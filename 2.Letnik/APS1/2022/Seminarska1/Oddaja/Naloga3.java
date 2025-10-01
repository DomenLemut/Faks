import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga3 {

    public class NumberList {

        private NumberListNode first;
        private NumberListNode last;

        public NumberList() {
            first = null;
            last = null;
        }

        @Override
        public String toString() {
            StringBuilder str = new StringBuilder();

            NumberListNode curr = first;
            while(curr.next != null) {
                str.append(curr.num + ",");
                curr = curr.next;
            }
            str.append(curr.num);

            return str.toString();
        }

        public void add(int num) {
            NumberListNode node = new NumberListNode(num);
            if(first == null) {
                first = node;
                last = node;
            } else 
                last.next = node;
            last = node;
        }

        public void preslikaj(char op, int val) { // op = {'*', '+'} e(n) op= val
            NumberListNode curr = first;
            
            switch(op) {
                case '*':
                    while(curr != null){
                        curr.num *= val;
                        curr = curr.next;
                    }
                    break;
                case '+':
                    while(curr != null){
                        curr.num += val;
                        curr = curr.next;
                    }
                    break;
            }
        }

        public void delete(NumberListNode curr, NumberListNode prev) {
            if(curr == first)
                first = curr.next;
            else 
                prev.next = curr.next;
            if(curr == last)
                last = prev;

            curr = null;  //nastavi za garbage-collectorja
        }

        public void ohrani(char op, int val) { // op = {'<', '>', '='} obdrzi vse elemente, ki vstrezajo pogoju, ostale zavrze

            NumberListNode curr = first;
            NumberListNode prev = first;

            switch(op) {
                case '<':
                    while(curr != null) {
                        if(curr.num >= val)
                            delete(curr, prev);
                        curr = curr.next;
                        if(curr != prev.next && curr != prev)
                            prev = prev.next;
                    }

                    break;
                case '>':
                    while(curr != null) {
                        if(curr.num <= val)
                            delete(curr, prev);
                        curr = curr.next;
                        if(curr != prev.next && curr != prev)
                            prev = prev.next;
                    }

                    break;
                case '=':
                    while(curr != null) {
                        if(curr.num != val)
                            delete(curr, prev);
                        curr = curr.next;
                        if(curr != prev.next && curr != prev)
                            prev = prev.next;
                    }

                    break;
            }

        }

        public void zdruzi(char op) { // op = {'*', '+'} sesteje ali zmnozi vse elemente seznama
            int out = 0;
            NumberListNode curr;
            switch(op) {
                case '*':
                    out = 1;
                    curr = first;
                    while(curr != null) {
                        out *= curr.num;
                        curr = curr.next;
                    }
                    break;
                case '+':
                    out = 0;
                    curr = first;
                    while(curr != null) {
                        out += curr.num;
                        curr = curr.next;
                    }
                    break;
            }

            first = new NumberListNode(out);
            last = first;
        }
    }

    public class NumberListNode {
        public NumberListNode next;
        public int num;

        public NumberListNode(int n) {
            num = n;
        }
    }

    public static void izpisi(String out, byte [] t) {
        try{
            BufferedWriter buffer = new BufferedWriter(new FileWriter(out));
            for(int i = 0; i < t.length; i++) {
                buffer.write((char) (t[i] + '0'));
            }
            buffer.close();
        } catch (IOException e) {
            System.out.println("Cannot write to file!");
        }
    }

    public static void main(String[] args) {
        Naloga3 naloga3 = new Naloga3();
        Naloga3.NumberList numberList = naloga3.new NumberList();
        

        try {
            FileReader fr = new FileReader(args[0]);
            BufferedReader br = new BufferedReader(fr);
            FileWriter fw = new FileWriter(args[1]);
            BufferedWriter bw = new BufferedWriter(fw);


            //preberi prvi lajn in daj vsa stevila v List
            int n = 0;
            char curr = (char) br.read();

            while(curr != '\n' && curr != '\r') {
                if(curr == ','){
                    numberList.add(n);
                    n = 0;
                } else
                    n = n * 10 + Character.getNumericValue(curr);
                curr = (char) br.read();
            }
            numberList.add(n);



            curr = (char) br.read();
            curr = (char) br.read();
            n = 0;

            while(curr != '\n' && curr != '\r'){
                n = n * 10 + Character.getNumericValue(curr);
                curr = (char) br.read();
            }
            br.read();

            

            String [] integersInString;
            for(int i = 0; i < n; i++) {
                integersInString = br.readLine().split(",");
                switch(integersInString[0]) {
                    case "o":
                        numberList.ohrani(integersInString[1].charAt(0),
                        Integer.parseInt(integersInString[2]));
                        bw.append(numberList.toString() + "\n");
                        break;
                    case "p":
                        numberList.preslikaj(integersInString[1].charAt(0),
                        Integer.parseInt(integersInString[2]));
                        bw.append(numberList.toString() + "\n");
                        break;
                    case "z":
                        numberList.zdruzi(integersInString[1].charAt(0));
                        bw.append(numberList.toString() + "\n");
                        
                        break;
                }
            }

            bw.close();

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    
    }

}
