import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;


public class Naloga7 {
    public static int [][] linije;
    public static Postaja [] postaje;

    public static int start, end;

    public static int steviloPostaj = 0;

    public static int saveLength = -1;

    public class Postaja {
        //hashmap or arraylist, thats the question now.
        public HashMap <Integer, Postaja> sosede;
        public int index;

        public Postaja(int index) {
            sosede = new HashMap<Integer, Postaja>();
            this.index = index;
        }

        public void add(Postaja postaja, int linija) {
            sosede.put(linija, postaja);
        }
    }

    public static boolean Load(String source) {
        try (BufferedReader br = new BufferedReader(new FileReader(source))) {
            linije = new int[Integer.parseInt(br.readLine())][];

            for(int i = 0; i < linije.length; i++) {
                String [] str = br.readLine().split(",");
                linije[i] = new int[str.length];
                for(int j = 0; j < linije[i].length; j++) {
                    linije[i][j] = Integer.parseInt(str[j]);
                }
            }

            String [] read = br.readLine().split(",");
            start = Integer.parseInt(read[0]) - 1;
            end = Integer.parseInt(read[1]) - 1;
            
            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }    
    }

    public static void ustvariPostaje() {
        Naloga7 naloga7 = new Naloga7();
        postaje = new Postaja [steviloPostaj];
        for(int i = 0; i < postaje.length; i++) {
            postaje[i] = naloga7.new Postaja(i);
        }

        for(int i = 0; i < linije.length; i++) {
            for(int j = 0; j < linije[i].length - 1; j++) {
                postaje[linije[i][j]].add(postaje[linije[i][j + 1]], i);
            }
        }
    }

    public static int pathLength(int start, int end) {
        boolean [] check = new boolean [postaje.length];
        Queue<Postaja> list = new LinkedList<Postaja>();
        Queue<Integer> changes = new LinkedList<Integer>();
        Queue<Integer> lines = new LinkedList<Integer>();

        LinkedList<Integer> solutions = new LinkedList<Integer>();

        //set ukazov
        list.add(postaje[start]);
        lines.add(-1);
        changes.add(0);

        int length = 1; //dodamo en element
        int pathLength = 0; //smo bili na eni postaji

        boolean flag = false;

        while(!list.isEmpty()) {
            Postaja postaja = list.poll();
            int changesSoFar = changes.poll();
            int line = lines.poll();
            length--;

            //ce gremo na nov krog - prvi del
            if(length == 0 && !flag) pathLength++;

            for(HashMap.Entry <Integer, Postaja> entry: postaja.sosede.entrySet()) {

                if(!check[entry.getValue().index]) {
                    if(entry.getValue().index == end) {
                        flag = true;
                        solutions.add(changesSoFar);
                    } 
    
                    if(!flag) {
                        //list-------------------------------
                        list.add(entry.getValue());
    
                        //changes----------------------------
                        if(entry.getKey() == line)
                            changes.add(changesSoFar);
                        else
                            changes.add(changesSoFar + 1);
    
                        //lines------------------------------
                        lines.add(entry.getKey());  
    
                        check[entry.getValue().index] = true;
                    }
                }
            }

            //ce gremo na nov krog - drugi del
            if(length == 0 && !flag) length = list.size();
        }

        if(flag) {
            saveLength = Collections.min(solutions);
            System.out.println("SaveLength: " + saveLength);
            return pathLength;
        }

        return -1;
    }
    

    public static int changesLength(int start, int end) {
        boolean [] check = new boolean [steviloPostaj];
        ArrayList<Postaja> list0 = new ArrayList<Postaja>();
        ArrayList<Postaja> list1 = new ArrayList<Postaja>();
        ArrayList<Postaja> save;

        check[start] = true;

        for(HashMap.Entry <Integer, Postaja> entry: postaje[start].sosede.entrySet()) {
            Postaja curr = entry.getValue();
            int line = entry.getKey();

            while(curr != null) {
                if(curr.index == end)
                    return 0;
                if(!check[curr.index])
                    list0.add(curr);
                check[curr.index] = true;

                curr = curr.sosede.get(line);
            }
        }

        int changes = 1;

        while(true) {
            for(Postaja p: list0) {
                //po vseh sosedih vozlisc
                for(HashMap.Entry <Integer, Postaja> entry: p.sosede.entrySet()) {
                    Postaja curr = entry.getValue();
                    int line = entry.getKey();

                    while(curr != null) {
                        if(curr.index == end)
                            return changes;
                        if(!check[curr.index])
                            list1.add(curr);
                        check[curr.index] = true;

                        curr = curr.sosede.get(line);
                    }
                }
            }

            //preglej, ce se ni nic zapisalo v now array
            if(list1.size() == 0)
                return -1;

            //zamenjaj kazalce in pocisti array 1
            save = list0;
            list0 = list1;
            list1 = save;
            list1.clear();

            changes++;
        }
    }

    public static void main(String[] args) {
        Counter cnt = new Counter("program");
        cnt.Start();
        //-----------------------------------------------------------------------
        if(Load(args[0])) {
            ustvariPostaje();

            StringBuilder str = new StringBuilder();
            //minimalno število prestopanj, ki ga potrebujemo za pot od vstopnega
            //postajališča A do izstopnega postajališča B
            int leastChanges = changesLength(start, end);
            if(leastChanges == -1) {
                str.append(String.format("-1\n-1\n-1"));
            } else {
                int shortestPath = pathLength(start, end);
                str.append(leastChanges + "\n");
                str.append(shortestPath + "\n");
                str.append(String.format("%d", saveLength == leastChanges ? 1 : 0));
            }

            // try{
            //     BufferedWriter buffer = new BufferedWriter(new FileWriter(args[1]));
            //     buffer.write(str.toString());
            //     buffer.close();
            // } catch (IOException e) {
            //     System.out.println("Cannot write to file!");
            // }

            System.out.println(str.toString());
            //-----------------------------------------------------------------------
            cnt.Print();
        }
    }
}
