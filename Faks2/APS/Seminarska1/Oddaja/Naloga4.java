import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga4 {
    public static Naloga4 naloga4 = new Naloga4();

    public static int steps; //stevilo korakov
    public static int [][] parameters = new int [5][]; //vsi vhodni parametri
    public static Blagajna [] blagajne; //tabela blagajn, ker jih je koncno mnogo juhejjj :)
    public static Trgovina trgovina =  naloga4.new Trgovina();

    public static int ID = 1;
    public static int nextTime;


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

        @Override
        public String toString() {
            return String.format("ID: %d, LS: %d, LH: %d, LG: %d", ID, LS, LH, LG);
        }
    } 

    public class QueueElement {
        public Kupec kupec;
        public QueueElement nextElement = null;
        public int timer;

        public QueueElement(Kupec curr, int timer) {
            this.kupec = curr;
            this.nextElement = null;
            this.timer = timer;
        }
    }

    public class Trgovina {
        private QueueElement first = null;
        private QueueElement last = null;


        public void add(Kupec kupec) {
            QueueElement element = new QueueElement(kupec, kupec.LS * kupec.LH);


            if(first == null) {
                first = element;
                last = element;
            } else 
                last.nextElement = element;
            last = element;
        }

        public QueueElement remove(QueueElement curr, QueueElement prev) {
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


        public void check() {
            QueueElement curr = first;
            QueueElement prev = first;
            int min;
            int index;

            while(curr != null) {
                curr.timer--;
                if(curr.timer == 0) {
                    QueueElement toBlagajna = remove(curr, prev);

                    index = 0;
                    min = blagajne[0].vrsta;
                    for(int i = 0; i < blagajne.length; i++) {
                        if(blagajne[i].vrsta < min) {
                            index = i;
                            min = blagajne[i].vrsta;
                        }   
                    }

                    //System.out.println(toBlagajna.kupec.ID + " Koncal s nabiranjem izdelkov -> blagajna: " + index);
                    toBlagajna.timer = blagajne[index].casSkeniranja * toBlagajna.kupec.LS;
                    blagajne[index].EnQueue(toBlagajna);
                }

                curr = curr.nextElement;
                if(curr != prev.nextElement && curr != prev)
                    prev = prev.nextElement;
            }
        }
    }

    public class Blagajna {
        public QueueElement front = null;
        public QueueElement rear = null;
        public int casSkeniranja;
        public int vrsta = 0;
        public Solutions zakljucili = naloga4.new Solutions();

        public Blagajna(int casSkeniranja) {
            this.casSkeniranja = casSkeniranja;
        }

        private int lineLength() {
            return vrsta;
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
            vrsta--;
            if(front == rear){ 
                rear = null;
                front = null;
            } else {
                front = front.nextElement;
            }
        }
    }

    public class SolutionsNode {
        public int ID;
        public SolutionsNode next = null;

        public SolutionsNode(int ID) {
            this.ID = ID;
        }
    }

    public class Solutions {
        public SolutionsNode first = null;
        public SolutionsNode last = null;

        public void add(int ID) {
            SolutionsNode element = new SolutionsNode(ID);

            if(first == null) {
                first = element;
                last = element;
            } else 
                last.next = element;
            last = element;
        }

        @Override
        public String toString() {
            if(first == null)
                return "0";

            SolutionsNode curr = first;

            StringBuilder str = new StringBuilder();
            while(curr.next != null) {
                str.append(curr.ID + ",");
                curr = curr.next;
            }
            str.append(curr.ID);
            
            return str.toString();
        }
    }


    public static boolean Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            String integers = br.readLine();
            steps = Integer.parseInt(integers);

            String [] integersInString;

            for(int i = 0; i < 5; i++) {
                integersInString = br.readLine().split(",");

                parameters[i] = new int [integersInString.length];
                for(int j = 0; j < parameters[i].length; j++)
                    parameters[i][j] = Integer.parseInt(integersInString[j]);
            }

            return true;

        } catch (IOException e) {
            System.out.println("File not found!!");
            return false;
        }    
        
    }

    public static void Store(String out, String output) {
        try{
            BufferedWriter buffer = new BufferedWriter(new FileWriter(out));
            buffer.write(output);
            buffer.close();
        } catch (IOException e) {
            System.out.println("Cannot write to file!");
        }
    }

    public static boolean addToTrgovina(Kupec kupec) {
        for(Blagajna b: blagajne) {
            if(b.lineLength() <= kupec.LG){
                trgovina.add(kupec);
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        //*****************************************************************************
        if(args.length < 2) {
            System.out.println("Premalo argumentov!");
            System.exit(0);
        }
        
        Solutions zapustili = naloga4.new Solutions();

        if(Load(args[0])) {
            //naredi blagajne
            blagajne = new Blagajna [parameters[0].length];
            for(int blagajna = 0; blagajna < parameters[0].length; blagajna++) {
                blagajne[blagajna] = naloga4.new Blagajna(parameters[0][blagajna]);
            }

            nextTime = parameters[1][0] - 1;

            //---------------------------------------------------------------------
            //main time loop
            for(int time = 0; time < steps; time++) {
                //System.out.println("Korak" + (time + 1));

                //1. ce obstaja kupec, ki je koncal s skeniranjem, ta zapusti blagajno
                for(Blagajna b: blagajne) {
                    if(b.front != null) {
                        b.front.timer--;
                        if(b.front.timer <= 0) {
                            //System.out.println(b.front.kupec.ID + " Zapusti blagajno");
                            b.zakljucili.add(b.front.kupec.ID);
                            b.DeQueue();                       
                        }
                    }
                }

                //2. ce je kupec ravnokar nabral vse izdelke se postavi na blagajno z najkrajso cakalo vrsto
                trgovina.check();

                //3. ce je nastopil cas za prihod novega kupca, ga kreiramo s podatki.
                if(time == nextTime) {
                    Kupec kupec = naloga4.new Kupec(ID, parameters[2][(ID - 1) % parameters[2].length],
                    parameters[3][(ID - 1) % parameters[3].length], parameters[4][(ID - 1) % parameters[4].length]);
                    nextTime += parameters[1][(ID) % parameters[1].length];
                    ID++;

                    //dodaj kupca v trgovino
                    System.out.println("Generiran " + kupec.toString());
                    if(!addToTrgovina(kupec)) {
                        System.out.println("Kupec " + kupec.ID + " ni mogel v trgovino ");
                        zapustili.add(kupec.ID);
                    } else {
                        System.out.println("Kupec " + kupec.ID + " zacne z nabiranjem izdelkov");
                    }
                }
                System.out.println();
            }
            //-------------------------------------------------------------------

            StringBuilder str = new StringBuilder();
            for(Blagajna b: blagajne)
                str.append(b.zakljucili.toString() + "\n");
            str.append(zapustili.toString());
    
            Store(args[1], str.toString());
        }



        //*****************************************************************************
    }
}
