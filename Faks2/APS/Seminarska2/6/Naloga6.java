import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

import java.util.Arrays;

public class Naloga6 {
    public static int [][] verjetnosti; // vedno manjsi float od nic, zato predstavljen z dvema integerjema. -> dodana natancnost
    public static int [][] povezave;
    public static int [][] dejstva;
    public static MyList [] Nodes;

    public class ListNode {
        public ListNode next = null;
        public int element;

        public ListNode(int element) {
            this.element = element;
        }
    }

    public class MyList {
        public ListNode first = null;
        public ListNode last = null;

        public ListNode curr = null;

        public MyList() {}

        public void add(int povezava) {
            ListNode node = new ListNode(povezava);
            if(first == null) {
                first = node;
                last = node;
            } else 
                last.next = node;
            last = node;
        }
    }

    public class SearchList {
        public SearchListNode first = null;
        public SearchListNode last = null;

        public ListNode curr = null;

        public SearchList() {}

        public void add(int [] arr) {
            SearchListNode node = new SearchListNode(arr);
            if(first == null) {
                first = node;
                last = node;
            } else 
                last.next = node;
            last = node;
        }

        public SearchListNode remove() {
            SearchListNode save = first;
            first = first.next;
            return save;
        }

        public void Empty() {
            first = null;
            last = null;
        }

        public boolean isEmpty() {
            return (first == null);
        }
    }

    public class SearchListNode {
        public SearchListNode next = null;
        public int [] arr;

        public SearchListNode(int [] arr) {
            this.arr = arr;
        }
    }

    public static boolean Load(String source) {
        try (FileReader fr = new FileReader(source)) {
            BufferedReader br = new BufferedReader(fr);
            //verjetnosti
            String [] partedString = br.readLine().split(",");
            verjetnosti = new int[partedString.length][2];

            for(int i = 0; i < verjetnosti.length; i++) {
                int k = 0;
                int n = 10;
                k += partedString[i].charAt(2) - '0';
                for(int crka = 3; crka < partedString[i].length(); crka++) {
                    n *= 10;
                    k *= 10;
                    k += partedString[i].charAt(crka);
                }
                verjetnosti[i][0] = k;
                verjetnosti[i][1] = n;
            }   

            //stevilo povezav in dejstev
            partedString = br.readLine().split(",");
            int N = Integer.parseInt(partedString[0]);
            int M = Integer.parseInt(partedString[1]);


            //povezave
            povezave = new int [N][2];

            for(int i = 0; i < povezave.length; i++) {
                partedString = br.readLine().split(",");
                povezave[i][0] = Integer.parseInt(partedString[0]);
                povezave[i][1] = Integer.parseInt(partedString[1]);
            }
            

            //dejstva
            dejstva = new int [M][3];

            for(int i = 0; i < dejstva.length; i++) {
                partedString = br.readLine().split(",");
                dejstva[i][0] = Integer.parseInt(partedString[0]);
                dejstva[i][1] = Integer.parseInt(partedString[1]);
                dejstva[i][2] = Integer.parseInt(partedString[2]);
            }

            //vozlisca
            Nodes = new MyList[verjetnosti.length];
            for(int i = 0; i < Nodes.length; i++) {
                Nodes[i] = new Naloga6().new MyList();
            } 
            for(int i = 0; i < povezave.length; i++) {
                Nodes[povezave[i][0] - 1].add(povezave[i][1] - 1);
                Nodes[povezave[i][1] - 1].add(povezave[i][0] - 1);
            }
            
            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }    
    }

    public static void Store(String path, String output) {
        
    }

    public static int [] izracunajTuriste() {
        int [] turisti = new int[verjetnosti.length];

        for(int i = 0; i < dejstva.length; i++) {
            turisti[dejstva[i][0] - 1] += dejstva[i][2];
            turisti[dejstva[i][1] - 1] += dejstva[i][2];
        }

        return turisti;
    }

    public static boolean povezavaObstaja(int prva, int druga) {
        for(int i = 0; i < povezave.length; i++) {
            if(povezave[i][0] == prva && povezave[i][1] == druga)
                return true;
        }
        return false;
    }


    public static int vrniNajvecjiIndex(int [] arr) {
        int max = arr[0];
        int index = 0;

        for(int i = 1; i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }

        return index;
    }

    public static int [] izracunajPromet(int [] turisti) {
        int [] promet = new int[verjetnosti.length];

        for(int i = 0; i < verjetnosti.length; i++) {
            promet[i] = (turisti[i] * verjetnosti[i][0]) / verjetnosti[i][1];
        }

        return promet;
    }

    //algoritem za iskanje poti
    public static int [] searchPath(int start, int end) {
        boolean [] check = new boolean [Nodes.length];

        int [] curr = new int [1];
        curr[1] = start;

        SearchList list0 = new Naloga6().new SearchList();
        SearchList list1 = new Naloga6().new SearchList();
        
        list0.add(curr);

        int [] next;

        while(true) {
            while(!list0.isEmpty()) {
                curr = list.remove().arr;
                
                //naredi novo pot
                next = new int [curr.length + 1];
                for(int i = 0; i < curr.length; i++) {
                    next[i] = curr[i];
                }

                next[curr.length + 1] = 
    
                list1.add(next);
            }
    
            list1 = list;
        }
    }

    
    public static void main(String[] args) {
        Counter count = new Counter("program");
        count.Start();
        //------------------------------------------

        if(Load(args[0])) {
            int [] turisti = izracunajTuriste();
            int [] promet = izracunajPromet(turisti);
            System.out.printf("%d,%d\n", vrniNajvecjiIndex(turisti) + 1, vrniNajvecjiIndex(promet) + 1);
        }

        //-----------------------------------------
        count.Print();
    }
}