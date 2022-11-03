

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



        public void ohrani(char op, int val) { // op = {'<', '>', '='} obdrzi vse elemente, ki vstrezajo pogoju, ostale zavrze

            NumberListNode curr = first;
            NumberListNode prev = first;

            switch(op) {
                case '<':
                    while(curr != null) {
                        if(curr.num >= val){
                            if(curr == first)
                                first = curr.next;
                            else 
                                prev.next = curr.next;
                            if(curr == last)
                                last = prev;
                        }
                        curr = curr.next;
                        if(curr != prev.next && curr != prev)
                            prev = prev.next;
                    }
                    break;
                case '>':
                    while(curr != null) {
                        if(curr.num <= val){
                            if(curr == first)
                                first = curr.next;
                            else 
                                prev.next = curr.next;
                            if(curr == last)
                                last = prev;
                        }
                        curr = curr.next;
                        if(curr != prev.next && curr != prev)
                            prev = prev.next;
                    }
                    break;
                case '=':
                    while(curr != null) {
                        if(curr.num != val){
                            if(curr == first)
                                first = curr.next;
                            else 
                                prev.next = curr.next;
                            if(curr == last)
                                last = prev;
                        }
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

    public static class Main {
        public static void main(String[] args) {

            Naloga3 naloga3 = new Naloga3();
            Naloga3.NumberList numberList = naloga3.new NumberList();

            numberList.add(10);
            numberList.add(17);
            numberList.add(5);
            numberList.add(4);
            numberList.add(13);
            numberList.add(20);
            numberList.add(57);
            numberList.add(1);
            numberList.izpisi();


            numberList.ohrani('>', 17);
            numberList.izpisi();
            numberList.zdruzi('*');
            // numberList.zdruzi('+');
            numberList.izpisi();
        }
    }
}
