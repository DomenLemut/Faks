import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class Naloga8 {
    public static HashMap<Integer, HashSet<Integer>> arr = new HashMap<Integer, HashSet<Integer>>();
    public static ArrayList<int[]> trash = new ArrayList<int[]>();

    public static boolean Load(String path) {
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            int n = Integer.parseInt(br.readLine());

            for (int i = 0; i < n; i++) {
                String[] slicedString = br.readLine().split(",");
                int[] povezava = new int[2];

                povezava[0] = Integer.parseInt(slicedString[0]);
                povezava[1] = Integer.parseInt(slicedString[1]);
                if (!pathExists(povezava[0], povezava[1])) {
                    if(!arr.containsKey(povezava[0]))
                        arr.put(povezava[0], new HashSet<Integer>());
                    arr.get(povezava[0]).add(povezava[1]);

                    if(!arr.containsKey(povezava[1]))
                        arr.put(povezava[1], new HashSet<Integer>());
                    arr.get(povezava[1]).add(povezava[0]);
                } else
                    trash.add(povezava);
            }
            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }
    }

    public static boolean pathExists(int start, int end) {
        Queue<Integer> queue = new LinkedList<Integer>();
        boolean [] visited = new boolean[2000];
        queue.add(start);
        visited[start] = true;

        while (!queue.isEmpty()) {
            int curr = queue.poll(); 
            if (arr.containsKey(curr)) {
                if (arr.get(curr).contains(end)) {
                    return true;
                }
                for (int next : arr.get(curr)) {
                    if (!visited[next]) {
                        visited[next] = true;
                        queue.add(next);
                    }
                }
            }
        }
        return false;

    }

    public static void main(String[] args) {
        Counter count = new Counter("Program");
        count.Start();
        // ---------------------------------------------------------

        if (Load(args[0])) {
            StringBuilder str = new StringBuilder();

            for (int[] i : trash)
                str.append(String.format("%d,%d\n", i[0], i[1]));

            try{
                BufferedWriter buffer = new BufferedWriter(new FileWriter(args[1]));
                buffer.write(str.toString());
                buffer.close();
            } catch (IOException e) {
                System.out.println("Cannot write to file!");
            }
        }

        // ---------------------------------------------------------
        count.Print();
    }
}
