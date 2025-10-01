import java.io.FileReader;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;

import java.io.IOException;

public class Naloga5 {
    public static char [][] arr;
    public static char [][] arr1;

    public static int [] zacetnaStanja;
    public static int [] koncnaStanja;

    public static int steviloStanj;
    public static int steviloTrakov;
    public static int dolzinaTrakov;
    public static int maxCode;

    public final String [] ukazi = {"GOR", "DOL", "LEVO", "DESNO", "NALOZI", "ODLOZI"};

    public class QueueElement {
        public QueueElement nextElement;
        public int [] stanja;
        
        public QueueElement() {

        }
    }

    public class Queue {
        public QueueElement front = null;
        public QueueElement rear = null;

        //dodaj odzadaj
        public void EnQueue(QueueElement element) {
            if(front == null) {
                front = element;
                rear = element;
            } else 
                rear.nextElement = element;
            rear = element;
        }

        //izbrisi odspredaj
        public void DeQueue() {
            if(front == rear){ 
                rear = null;
                front = null;
            } else {
                front = front.nextElement;
            }
        }
    }

    public static boolean Load(String input) {
        try (BufferedReader br = new BufferedReader(new FileReader(input))) {
            String [] strings = br.readLine().split(",");
            steviloTrakov = Integer.parseInt(strings[0]);
            dolzinaTrakov = Integer.parseInt(strings[1]);


            return true;
            
        } catch (IOException e) {
            return false;
        }    
    }

    public static void odlozi(int [] stanja, int stanje, int index) {
        stanja[index] += stanje;
    }

    public static int nalozi(int [] stanja, int index) {
        int save = stanja[index] % steviloStanj;
        stanja[index] -= stanja[index] % steviloStanj;
        return save;
    }

    public static void gor(int [] stanja, int index) {
        stanja[index] *= steviloStanj;
        stanja[index] %= maxCode;
    } 

    public static void dol(int [] stanja, int index) {
        stanja[index] /= steviloStanj;
    }

    public static void main(String[] args) {
        Counter Program = new Counter("Program");
        Program.Start();
        //*********************************************************************

        if(Load(args[0])) {

        }


        
        //*********************************************************************
        Program.Print();
    }
}

