import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.LinkedList;
import java.util.ListIterator;
import java.util.Queue;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Naloga6 {
    public static float [] verjetnosti; // vedno manjsi float od nic, zato predstavljen z dvema integerjema. -> dodana natancnost
    public static int [][] povezave;
    public static int [][] dejstva;
    public static ArrayList <LinkedList<Integer>> Nodes = new ArrayList<LinkedList<Integer>>();;

    public static boolean Load(String source) {
        try (FileReader fr = new FileReader(source)) {
            BufferedReader br = new BufferedReader(fr);
            //verjetnosti
            String [] partedString = br.readLine().split(",");
            verjetnosti = new float[partedString.length];

            for(int i = 0; i < verjetnosti.length; i++) {
                verjetnosti[i] = Float.parseFloat(partedString[i]);
            }   

            //stevilo povezav in dejstev
            partedString = br.readLine().split(",");
            int N = Integer.parseInt(partedString[0]);
            int M = Integer.parseInt(partedString[1]);


            //povezave
            povezave = new int [N][2];

            for(int i = 0; i < N; i++) {
                partedString = br.readLine().split(",");
                povezave[i][0] = Integer.parseInt(partedString[0]) - 1;
                povezave[i][1] = Integer.parseInt(partedString[1]) - 1;
            }
            

            //dejstva
            dejstva = new int [M][3];

            for(int i = 0; i < M; i++) {
                partedString = br.readLine().split(",");
                dejstva[i][0] = Integer.parseInt(partedString[0]) - 1;
                dejstva[i][1] = Integer.parseInt(partedString[1]) - 1;
                dejstva[i][2] = Integer.parseInt(partedString[2]) - 1;
            }


            for(int i = 0; i < verjetnosti.length; i++) {
                Nodes.add(new LinkedList<Integer>());
            }

            for(int i = 0; i < povezave.length; i++) {
                Nodes.get(povezave[i][0]).add(povezave[i][1]);
                Nodes.get(povezave[i][1]).add(povezave[i][0]);
            }
            
            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }    
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

    public static int [] izracunajTuriste() {
        int [] turisti = new int[verjetnosti.length];

        for(int [] t: dejstva) {
            int [] tmp = searchPath(t[0], t[1]);
            
            if(tmp != null) {
                for(int j = 0; j < tmp.length; j++) {
                    turisti[tmp[j]] += t[2];
                }
            }
        }

        return turisti;
    }
 
    public static int [] izracunajPromet(int [] turisti) {
        int [] promet = new int[verjetnosti.length];

        for(int i = 0; i < verjetnosti.length; i++) {
            promet[i] = (int) (turisti[i] * verjetnosti[i]);
        }   

        return promet;
    }

    //algoritem za iskanje poti
    public static int [] searchPath(int start, int end) {
        boolean [] check = new boolean [Nodes.size()];

        Queue<int[]> list0 = new LinkedList<int[]>();

        int [] innerArr = {start};
        list0.add(innerArr);
        check[start] = true;

        while(!list0.isEmpty()) {
            int [] curr = list0.poll();

            for(int j: Nodes.get(curr[0])) {
                //dodaj naslednje vozlisce
                if(!check[j]) {
                    int [] tmp = insert(curr, j);
                    if(tmp[0] == end)
                        return tmp;
                    list0.add(tmp);
                    check[j] = true;
                }
            }
        }

        return null;
    }

    public static int [] insert(int [] arr, int insert) {
        int [] out = new int [arr.length + 1];
        for(int i = 0; i < arr.length; i++) {
            out[i + 1] = arr[i];
        }

        out[0] = insert;
        return out;
    }

    
    public static void main(String[] args) {
        Counter count = new Counter("program");
        count.Start();
        //------------------------------------------

        if(Load(args[0])) {
            ListIterator<LinkedList<Integer>> iter = Nodes.listIterator();

            while(iter.hasNext()) {
                LinkedList<Integer> list = iter.next();
                Collections.sort(list);
                Collections.reverse(list);
            }

            int [] turisti = izracunajTuriste();
            if(turisti == null)
                return;
            int [] promet = izracunajPromet(turisti);

            System.out.println(String.format("%d,%d", vrniNajvecjiIndex(promet) + 1, vrniNajvecjiIndex(turisti) + 1));
        }
        //-----------------------------------------
        count.Print();
    }
}