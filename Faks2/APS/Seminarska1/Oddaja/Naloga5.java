import java.io.FileReader;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga5 {

    static class QueueElement {
        Object element;
        QueueElement next;

        QueueElement()
        {
            element = null;
            next = null;
        }
    }
    static class Queue {
        
        private QueueElement front;
        private QueueElement rear;
        
        public Queue()
        {
            makenull();
        }
        
        public void makenull()
        {
            front = null;
            rear = null;
        }
        
        public boolean empty()
        {
            return (front == null);
        }

        public int length() {
            int sum = 0;
            if (!empty()) {
                QueueElement curr = front;
                sum++;
                while (curr.next != null) {
                    sum++;
                    curr = curr.next;
                }
            }
            return sum > 0 ? sum : 0;
        }
        
        public Object front()
        {
            if (!empty())
                return front.element;
            else
                return null;
        }
        
        public void enqueue(Object obj)
        {
            QueueElement el = new QueueElement();
            el.element = obj;
            el.next = null;
            
            if (empty())
            {
                front = el;
            }
            else
            {
                rear.next = el;
            }
            
            rear = el;
        }
        
        public void dequeue()
        {
            if (!empty())
            {
                front = front.next;
                
                if (front == null)
                    rear = null;
            }
        }
    }
    static class Vozicek {
        int position;
        int element;
        String moves;
        int[] stanja;
        
        public Vozicek(int position, int element, String moves, int[] stanja) {
            this.position = position;
            this.element = element;
            this.moves = moves;
            this.stanja = stanja;
        }    
    }

    public static int stanje = 0;
    public static int stStanj;
    public static int trakLength;
    public static int stRazlicnih = 1;
    public static char [][] array;
    public static char [][] finalArray;
    public static int [] koncnoStanje;

    public static void initArr(char [][] array) {
        for(int i = 0; i < array.length; i++) {
            for(int j = 0; j < array[i].length; j++) {
                array[i][j] = '-';
            }
        }
    }

    public static int[] copy(int[] array) {
        int[] copy = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            copy[i] = array[i];
        }
        return copy;
    }

    public static int[] hash(char[][] array) {
        int[] hash = new int[array.length];
        int sum;
        int packet;
        String abeceda = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (int i = 0; i < array.length; i++) {
            sum = 0;
            for (int j = 0; j < array[0].length; j++) {
                packet = abeceda.indexOf(array[i][j]);
                for (int k = 0; k < j; k++) {
                    packet *= stStanj;
                }
                sum += packet;
            }
            hash[i] = sum;
        }
        return hash;
    }

    public static int stStanj(char[][] array) {
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[0].length; j++) {
                if (array[i][j] != '-') sum++;
            }
        }
        return sum;
    }

    public static boolean isEqual(int[] finalArray, int[] array2) {
        for (int i = 0; i < array.length; i++) {
            if (finalArray[i] != array2[i])
                return false;
        }
        return true;
    }

    public static int[] odlozi(int[] array, int p, int element) {
        array[p] += element;
        return array;
    }

    public static int[] nalozi(int[] array, int p) {
        array[p] -= array[p] % stStanj;
        return array;
    }

    public static int[] gor(int[] array, int p) {
        int currVozicek = array[p];
        currVozicek *= stStanj;
        currVozicek %= stRazlicnih;
        array[p] = currVozicek;
        return array;
    } 

    public static int[] dol(int[] array, int p) {
        int currVozicek = array[p];
        currVozicek /= stStanj;
        array[p] = currVozicek;
        return array;
    }

    public static boolean vsebuje(int[] array, int p) {
        return array[p] % stStanj != 0;
    }

    public static void main(String[] args) {

        try (FileReader fr = new FileReader(args[0])) {
            
            BufferedReader br = new BufferedReader(fr);

            String [] integersInString = br.readLine().split(",");

            int l = Integer.parseInt(integersInString[0]);
            int h = Integer.parseInt(integersInString[1]);

            array = new char[l][h];
            finalArray = new char[l][h];

            initArr(array);
            initArr(finalArray);

            int x = 0;
            char curr;

            for(int y = 0; y < array.length; y++) {
                x = 0;
                br.skip(2);
                curr = (char) br.read();
                while(curr != '\r' && curr != '\n' && curr != -1) {
                    if(curr == ',')
                        x++;
                    else
                        array[y][x] = curr;
                    curr = (char) br.read();
                }
            }

            for(int y = 0; y < finalArray.length; y++) {
                x = 0;
                br.skip(2);
                int i = 0;
                curr = (char) br.read();
                while(curr != '\r' && curr != '\n' && curr != -1 && i < 20) {
                    if(curr == ',')
                        x++;
                    else
                        finalArray[y][x] = curr;
                    curr = (char) br.read();
                    i++;
                }
            }

            stStanj = stStanj(array) + 1;
            trakLength = array[0].length;

            koncnoStanje = hash(finalArray);

            for (int i = 0; i < trakLength; i++) {
                stRazlicnih *= stStanj;
            }

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    

        Queue zeObiskani = new Queue();

        Queue queue = new Queue();
        Vozicek s = new Vozicek(0, 0, "", hash(array));
        queue.enqueue(s);

        while (!queue.empty()) {

            s = (Vozicek) queue.front();
            queue.dequeue();

            if (s.position < 0 || s.position >= s.stanja.length) {
                continue;
            }

            if (isEqual(s.stanja, koncnoStanje)) {
                break;
            }

            queue.enqueue(new Vozicek(s.position - 1, s.element, s.moves + "-LEVO", copy(s.stanja)));
            queue.enqueue(new Vozicek(s.position + 1, s.element, s.moves + "-DESNO", copy(s.stanja)));
            queue.enqueue(new Vozicek(s.position, s.element, s.moves + "-GOR", gor(copy(s.stanja), s.position)));
            queue.enqueue(new Vozicek(s.position, s.element, s.moves + "-DOL", dol(copy(s.stanja), s.position)));
            if (vsebuje(s.stanja, s.position) && s.element == 0) {
                queue.enqueue(new Vozicek(s.position, s.stanja[s.position] % stStanj, s.moves + "-NALOZI", nalozi(copy(s.stanja), s.position)));
            }
            if (!vsebuje(s.stanja, s.position) && s.element > 0) {
                queue.enqueue(new Vozicek(s.position, 0, s.moves + "-ODLOZI", odlozi(copy(s.stanja), s.position, s.element)));
            }
        
        }
        
        try {
            FileWriter fw = new FileWriter(args[1]);
            String[] moves = s.moves.split("-");
            for (int i = 1; i < moves.length; i++) {
                fw.write(moves[i] + "\n");
            }

            fw.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}