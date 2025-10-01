import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Naloga7_1 {
    public static int [][] linije;
    public static Postaja [] postaje;

    public static int start, end;

    public static int steviloPostaj = 0;

    public class Postaja {
        //hashmap or arraylist, thats the question now.
        public ArrayList <Postaja> sosede;
        public ArrayList <Integer> smeri;
        public int index;

        public Postaja(int index) {
            sosede = new ArrayList<Postaja>();
            smeri = new ArrayList<Integer>();
            this.index = index;
        }

        public void add(Postaja postaja, int linija) {
            sosede.add(postaja);
            smeri.add(linija);
        }
    }

    public static boolean Load(String source) {
        try (BufferedReader br = new BufferedReader(new FileReader(source))) {
            linije = new int[Integer.parseInt(br.readLine())][];
            for(int i = 0; i < linije.length; i++) {
                linije[i] = stringToInt(br.readLine() + "\n");
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
    
    public static int [] stringToInt(String str) {
        int count = 0;
        int length = str.length();

        for(int i = 0; i < length; i++) {
            if(str.charAt(i) == ',')
                count++;
        }

        int [] rtrn = new int [count + 1];

        int n;
        int i = 0;

        for(int index = 0; index < rtrn.length; index++) {
            n = 0;

            while(str.charAt(i) >= '0' && str.charAt(i) <= '9') {
                n += (str.charAt(i) - '0');
                n *= 10;
                i++;
            }
            
            i++;
            rtrn[index] = (n / 10) - 1;

            if(n / 10 > steviloPostaj)
                steviloPostaj = n / 10;
        }

        return rtrn;
    }

    public static void ustvariPostaje() {
        Naloga7_1 naloga7 = new Naloga7_1();
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
        boolean [] check = new boolean [steviloPostaj];
        ArrayList<Postaja> list0 = new ArrayList<Postaja>();
        ArrayList<Postaja> list1 = new ArrayList<Postaja>();
 
        list0.add(postaje[start]);
        check[start] = true;

        int length = 1;
        while(true) {
            //po vseh vozliscih
            for(int i = 0; i < list0.size(); i++) {
                //po vseh sosedih vozlisc
                for(int j = 0; i < list0.get(i).sosede.size(); j++) {
                    if(list0.get(i).sosede.get(j).index == end)
                        return length;
                    
                    if(!check[list0.get(i).sosede.get(j).index]) {
                        list1.add(list0.get(i).sosede.get(j));
                        check[list0.get(i).sosede.get(j).index] = true;
                    }
                }
            }

            //preglej, ce se ni nic zapisalo v now array
            if(list1.size() == 0)
                return -1;

            //zamenjaj kazalce
            ArrayList<Postaja> save = list0;
            list0 = list1;
            list1 = save;
            list1.clear(); 
            length++;
        }
    } 

    public static int changeLength(int start, int end) {
        //isci po stevilo prestopanj - prvo pojdi po liniji, na kateri si zacel, ce lahko
        //tako prides do konca, nato poglej vse linije z enim prestopanjem, nato vse linije
        //z dvemi prestopanji... Ko najdes pot izpisi stevilo prestopov
        for(int i = 0; i < steviloPostaj; i++) {
            if(poisciLinijo(start, end, i))
                return i;
        }
        return -1;
    }

    public static boolean poisciLinijo(int start, int end, int steviloPrestopanj) {

        return false;
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

            // for(int i = 0; i < postaje.length; i++) {
            //     System.out.println("postaja " + i + ": ");
            //     for(int j = 0; j < postaje[i].sosede.size(); j++) {
            //         System.out.print(postaje[i].sosede.get(j).index + "(" + postaje[i].linije.get(j) + ")");
            //     }
            //     System.out.println();
            // }

            str.append(pathLength(start, end));



            System.out.println(str.toString());
            //-----------------------------------------------------------------------
            cnt.Print();
        }
    }
}
