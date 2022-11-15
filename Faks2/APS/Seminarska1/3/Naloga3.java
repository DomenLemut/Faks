import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;

public class Naloga3 {
    
    public class NumberList {

        private NumberListNode first;
        private NumberListNode last;

        public NumberList() {
            first = null;
            last = null;
        }

        public void izpisi() {
            NumberListNode curr = first;
            while(curr != null) {
                System.out.print(curr.num + " ");
                curr = curr.next;
            }
            System.out.print(" \n");
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

        public void setBuffer(BufferedWriter buffer) {
        }

        public void closeBuffer() {
        }
    }


    public class NumberListNode {
        public NumberListNode next;
        public int num;

        public NumberListNode(int n) {
            num = n;
        }
    }

    public static void main(String[] args) {

        //zbrisi pri oddaji
        Counter counter1 = new Counter("Program");
        //zbrisi pri oddaji
        counter1.Start();




        Naloga3 naloga3 = new Naloga3();
        Naloga3.NumberList numberList = naloga3.new NumberList();

        try (FileReader fr = new FileReader(args[0])) {
            BufferedReader br = new BufferedReader(fr);

            //preberi prvi lajn in daj vsa stevila v List
            String[] integersInString = br.readLine().split(",");
            
            for (int i = 0; i < integersInString.length; i++)
                numberList.add(Integer.parseInt(integersInString[i]));

            int n = Integer.parseInt(br.readLine());

            for(int i = 0; i < n; i++) {
                integersInString = br.readLine().split(",");
                switch(integersInString[0]) {
                    case "o":
                        numberList.ohrani(integersInString[1].charAt(0),
                        Integer.parseInt(integersInString[2]));
                        numberList.izpisi();
                        break;
                    case "p":
                        numberList.preslikaj(integersInString[1].charAt(0),
                        Integer.parseInt(integersInString[2]));
                        numberList.izpisi();
                        break;
                    case "z":
                        numberList.zdruzi(integersInString[1].charAt(0));
                        numberList.izpisi();
                        break;
                }
            }
        } catch (IOException e) {
            System.out.println("File not found!!");
        }    



        //zbrisi pri oddaji
        counter1.Print();
    }

}
