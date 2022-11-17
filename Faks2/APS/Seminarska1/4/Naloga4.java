import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Naloga4 {

    public static Naloga4 naloga4;

    public static int steps; //stevilo korakov
    public static int [][] parameters = new int [5][]; //vsi vhodni parametri
    public static Blagajna [] blagajne; //tabela blagajn, ker jih je koncno mnogo juhejjj :)
    public static Trgovina trgovina;
    

    public class Kupec {
        public int ID; //ID kupca
        public int LS; //dolzina nakupovalnega seznama
        public int LH; //cas nabiranja enega izdelka
        public int LG; //toleranca do gnece pred blagajno

        public Kupec(int ID, int LS, int LH, int LG) {
            this.ID = ID;
            this.LS = LS;
            this.LH = LH;
            this.LG = LG;
        }
    } 

    //Kupec zapakiran v Queue element s next pointerjem in tick integerjem
    public class QueueElement {
        public Kupec kupec;
        public QueueElement nextElement = null;
        public int timer;

        public QueueElement(Kupec curr, int timer) {
            this.kupec = curr;
            this.nextElement = null;
            this.timer = timer;
        }

        public boolean updateTimer() {
            timer--;
            if(timer <= 0)
                return true;
            return false;
        }

        public void resetTime(int i) {
            this.timer = i;
        }
    }



    /*Trgovina class
     * predstavlja trgovino s kupci, ki trenutno izbirajo izdelke
     * implementiran OneWayLinkedList
     */
    public class Trgovina {
        private QueueElement first = null;
        private QueueElement last = null;

        private int ID = 1;
        private int nextTime = parameters[1][0];

        //za zbrisat
        public void rtrn() {
            QueueElement curr = first;

            System.out.print("V trgovini: (");
            while(curr != null) {
                System.out.print(curr.kupec.ID + " ");
                curr = curr.nextElement;
            }
            System.out.print(")");
            System.out.println();
        }

        public void novKupec(int time) {
            if(time == nextTime) {
                    //ustvarimo novega kupca - tu morajo biti izbrani se pravilni parametri
                Kupec curr = naloga4.new Kupec(ID, parameters[1].length, time % parameters[2].length, time % parameters[3].length);
        
                //poglej ce je kaka cakalna vrsta ok, pol dodaj, drugac pusti ta current viset v zraku
                for(int i = 0; i < blagajne.length; i++) {
                    //ce je kak ok
                    if(blagajne[i].lineLength() <= curr.LG) {
                        trgovina.add(curr);
                        break;
                    }
                }
                ID++;
            }
        }

        //odstrani element iz lista in ga vrni za nadaljno uporabo na blagajnah
        public QueueElement rm(QueueElement curr, QueueElement prev) {
            QueueElement save = curr;

            if (curr == first)
                first = first.nextElement;
            else if(curr == last)
                first = curr.nextElement;
            else 
                prev.nextElement = curr.nextElement;
            if(curr == last)
                last = prev;

            return save;
        }   

        public void add(Kupec kupec) {
            QueueElement element = new QueueElement(kupec, kupec.LS * kupec.LH);

            if(first == null) {
                first = element;
                last = element;
            } else 
                last.nextElement = element;
            last = element;
        }

        //preverjaj timerje - ce je kak 0 premakni element v cakalno vrsto na blagajni
        public void checkTimer() {
            QueueElement curr = first;
            QueueElement prev = first;

            //ta element je za ga vrec v cakalno vrsto
            QueueElement back = null;

            while(curr != null) {
                if(curr.updateTimer()){
                    
                    //odstrani element in ga shrani
                    back = rm(curr, prev);

                    //poisci blagajno z najkrajso cakalno vrsto
                    int index = 0;
                    int min = blagajne[index].lineLength();

                    for(int i = 1; i < blagajne.length; i++) {
                        if(blagajne[i].lineLength() < min) {
                            index = i;
                            min = blagajne[i].lineLength();
                        }   
                    }
                    
                    back.resetTime(blagajne[index].casSkeniranja * back.kupec.LS);
                    blagajne[index].EnQueue(back);
                }

                curr = curr.nextElement;

                if(curr != prev.nextElement && curr != prev)
                    prev = prev.nextElement;
            }
        }
    }




    public class Blagajna {
        private int casSkeniranja;

        //stetje kupcev v queue
        private int vrsta = 0;

        //stetje vseh kupcev na balagajni
        private int steviloKupcev = 0;

        //prvi in zadnji element
        private QueueElement front = null;
        private QueueElement rear = null;
        
        public Blagajna(int casSkeniranja) {
            this.casSkeniranja = casSkeniranja;
        }

        public int lineLength() {
            return vrsta;
        }

        public int returnSteviloKupcev() {
            return this.steviloKupcev;
        }

        public boolean Empty() {
            return front == null;
        }

        public Kupec Front() {
            return front.kupec;
        }

        //dodaj odzadaj
        public void EnQueue(QueueElement element) {
            if(front == null) {
                front = element;
                rear = element;
            } else 
                rear.nextElement = element;
            rear = element;
            vrsta++;
        }

        //izbrisi odspredaj
        public void DeQueue() {
            if(front == rear){ 
                rear = null;
                front = null;
            } else {
                front = front.nextElement;
            }
            steviloKupcev++;
            vrsta--;
        }

        //presteje elemente
        public int Elements() {
            QueueElement curr = front;

            int i;
            for(i = 0; curr != null; i++)
                curr = curr.nextElement;
            return i;
        }

        public void updateTime() {
            if(front != null && front.updateTimer())
                DeQueue();
        }

    }

    public static void Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            String integers = br.readLine();
            steps = Integer.parseInt(integers);

            String [] integersInString;

            for(int i = 0; i < 5; i++) {
                integersInString = br.readLine().split(",");

                fillArray(i, integersInString);
            }

            initBlagajne();

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    
        
    }

    public static void initBlagajne() {
       //v blagajvne zapisemo v array blagajn
        blagajne = new Blagajna [parameters[0].length];
        for(int i = 0; i < parameters[0].length; i++) {
            blagajne[i] = naloga4.new Blagajna(parameters[0][i]);
        }
    }

    public static void fillArray(int i, String [] integersInString) {
        parameters[i] = new int [integersInString.length];
        for(int j = 0; j < parameters[i].length; j++)
            parameters[i][j] = Integer.parseInt(integersInString[j]);
    }

    //za zbrisat
    public static void printOutParameters() {
        System.out.printf("-------------------------------------------\n");
        System.out.printf("[Trgovina - parametri]\n");
        System.out.printf("%d\n", steps);
        for(int i = 0; i < parameters.length; i++) {
            for(int j = 0; j < parameters[i].length; j++) {
                System.out.print(parameters[i][j] + " ");
            }
            System.out.println();
        }

        System.out.printf("-------------------------------------------\n");
    }

    public static boolean preverGneco(Blagajna [] blagajne, int gneca) {
        int min = blagajne[0].lineLength();
        for(int i = 1; i < blagajne.length; i++) {
            if(blagajne[i].lineLength() <  min)
                min = blagajne[i].vrsta;
        }
        if(min > gneca)
            return false;
        return true;
    }

    public static void izpisiBlagajne() {
        for(int i = 0; i < blagajne.length; i++) {
            System.out.println("(Blagajna " + i + ": " + blagajne[i].vrsta + " )");
            if(blagajne[i].front != null) {
                System.out.println(" na blagajni: " + blagajne[i].front.kupec.ID);
            }
        }
    }


    public static void main(String[] args) {
        Counter program = new Counter("Program");
        program.Start();

        //initiate classes
        naloga4 = new Naloga4();
        trgovina = naloga4.new Trgovina();

        //ustvari count parametre
        int time = 0;

        //pripravi nalogo
        Load(args[0]);

        //glavni loop programa
        while(time < steps) {
            for(Blagajna b: blagajne){
                b.updateTime();
            }

            trgovina.checkTimer();

            trgovina.novKupec(time);
            
            System.out.printf("\n[krog -> %d]\n", time);
            izpisiBlagajne();
            trgovina.rtrn();

            time++;
        }


        System.out.println("\nKoncno stevilo ljudi na blagajnah: ");
        for(int i = 0; i < blagajne.length; i++) {
            System.out.println(i + ": " + blagajne[i].returnSteviloKupcev());
        }


        program.Print();
    }
}