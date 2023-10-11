import java.io.FileReader;
import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.LinkedList;
import java.util.Queue;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Naloga6_1 {
    public static float[] verjetnosti; // vedno manjsi float od nic, zato predstavljen z dvema integerjema. -> dodana
                                       // natancnost
    public static int[][] povezave;
    public static int[][] dejstva;
    public static ArrayList<ArrayList<Integer>> Nodes;

    public static boolean Load(String source) {
        try (FileReader fr = new FileReader(source)) {
            BufferedReader br = new BufferedReader(fr);
            // verjetnosti
            String[] partedString = br.readLine().split(",");
            verjetnosti = new float[partedString.length];

            for (int i = 0; i < verjetnosti.length; i++) {
                verjetnosti[i] = Float.parseFloat(partedString[i]);
            }

            // stevilo povezav in dejstev
            partedString = br.readLine().split(",");
            int N = Integer.parseInt(partedString[0]);
            int M = Integer.parseInt(partedString[1]);

            // povezave
            povezave = new int[N][2];

            for (int i = 0; i < N; i++) {
                partedString = br.readLine().split(",");
                povezave[i][0] = Integer.parseInt(partedString[0]) - 1;
                povezave[i][1] = Integer.parseInt(partedString[1]) - 1;
            }

            // dejstva
            dejstva = new int[M][3];

            for (int i = 0; i < M; i++) {
                partedString = br.readLine().split(",");
                dejstva[i][0] = Integer.parseInt(partedString[0]) - 1;
                dejstva[i][1] = Integer.parseInt(partedString[1]) - 1;
                dejstva[i][2] = Integer.parseInt(partedString[2]) - 1;
            }

            // vozlisca
            Nodes = new ArrayList<ArrayList<Integer>>();

            for (int i = 0; i < verjetnosti.length; i++) {
                Nodes.add(new ArrayList<Integer>());
            }

            for (int i = 0; i < povezave.length; i++) {
                Nodes.get(povezave[i][0]).add(povezave[i][1]);
                Nodes.get(povezave[i][1]).add(povezave[i][0]);
            }

            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }
    }

    public static int[] izracunajTuriste() {
        int[] turisti = new int[verjetnosti.length];

        for (int[] t : dejstva) {
            int[] tmp = searchPath(t[0], t[1]);
            if (tmp != null) {
                for (int j = 0; j < tmp.length; j++) {
                    turisti[tmp[j]] += t[2];
                }
            }
        }

        return turisti;
    }

    public static int vrniNajvecjiIndex(int[] arr) {
        int max = arr[0];
        int index = 0;

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }

        return index;
    }

    public static int[] izracunajPromet(int[] turisti) {
        int[] promet = new int[verjetnosti.length];

        for (int i = 0; i < verjetnosti.length; i++) {
            promet[i] = (int) (turisti[i] * verjetnosti[i]);
        }

        return promet;
    }

    // algoritem za iskanje poti
    public static int[] searchPath(int start, int end) {
        boolean[] check = new boolean[Nodes.size()];

        Queue<int[]> list0 = new LinkedList<int[]>();
        LinkedList<int[]> routes = new LinkedList<int[]>();

        int[] innerArr = { start };
        list0.add(innerArr);
        check[start] = true;

        int length = Integer.MAX_VALUE;
        boolean flag = false;

        while (list0.size() > 0) {
            int[] curr = list0.poll();

            // vsakemu dodaj vse mozne poti in ga zapisi v nov list
            for (int j : Nodes.get(curr[0])) {
                // dodaj naslednje vozlisce
                if (!check[j]) {
                    int[] tmp = insert(curr, j);

                    if (tmp[0] == end && (!flag || tmp.length == length)) {
                        flag = true;
                        length = tmp.length;
                        routes.add(tmp);
                    } else {
                        if (tmp.length > length)
                            break;
                        list0.add(tmp);
                    }
                }
            }
        }

        // Sort the routes in descending order by the route indexes
        Collections.sort(routes, (a, b) -> {
            for(int i = a.length - 1; i >= 0; i--) {
                if (a[i] > b[i]) {
                    return -1;
                } else if (a[i] < b[i]) {
                    return 1;
                }
            }

            return 0;
        });
        
        return routes.get(0);
    }

    public static int[] insert(int[] arr, int insert) {
        int[] out = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++) {
            out[i + 1] = arr[i];
        }

        out[0] = insert;
        return out;
    }

    public static void main(String[] args) {
        //Counter count = new Counter("program");
        //count.Start();
        // ------------------------------------------

        if (Load(args[0])) {
            // System.out.println(Arrays.deepToString(povezave));
            int[] turisti = izracunajTuriste();
            if (turisti == null)
                return;
            int[] promet = izracunajPromet(turisti);

            // try{
            //     BufferedWriter buffer = new BufferedWriter(new FileWriter(args[1]));
            //     buffer.write(String.format("%d,%d\n", vrniNajvecjiIndex(promet) + 1,
            //     vrniNajvecjiIndex(turisti) + 1));

            //     buffer.close();
            // } catch (IOException e) {
            //     System.out.println("Cannot write to file!");
            // }

            System.out.println(String.format("%d,%d", vrniNajvecjiIndex(promet) + 1, vrniNajvecjiIndex(turisti) + 1));
        }
        // -----------------------------------------
        //count.Print();
    }
}