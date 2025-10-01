import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga9 {

    public static Naloga9 naloga9 = new Naloga9();

    public static int dimenzija;
    public static Node korenskoVozlisce;

    public static int [][] tabela;
    public static int [] nivoji;
    public static int dostopi;

    public class Node {
        public Node [] poddrevesa = new Node [4];
        public int max, min;
        public int dim;

        public Node(int dim) {
            this.dim = dim;
        }

        public boolean jeZadnje() {
            return min == max;
        }


        //dela, ne tiki
        public int potopljeni(int nivo) {
            dostopi++;

            if (max <= nivo) {
                return dim * dim;
            } else if (max >= nivo && min <= nivo) {
                int submergedArea = 0;

                for (Node child : poddrevesa) {
                    if (child != null) {
                        submergedArea += child.potopljeni(nivo);
                    }
                }

                return submergedArea;
            } 

            return 0;
        }
    }


    public static int [] stringToInt(String str, int dimenzija) {
        int [] t = new int [dimenzija];
        int index = 0;
        int i = 0;
        int n = 0;

        while(i < dimenzija){
            if(str.charAt(index) >= '0' && str.charAt(index) <= '9') {
                n += (str.charAt(index) - '0');
                n *= 10;
            } else {
                t[i] = (n / 10);
                n = 0;
                i++;
            }
            index++;
         }

        return t;
    }

    public static boolean Load(String stream) {
        try (BufferedReader br = new BufferedReader(new FileReader(stream))) {
            dimenzija = Integer.parseInt(br.readLine());
            tabela = new int [dimenzija][];

            for(int i = 0; i < dimenzija; i++) {
                tabela[i] = stringToInt(br.readLine() + "\n", dimenzija);
            }

            nivoji = new int [Integer.parseInt(br.readLine())];

            for(int i = 0; i < nivoji.length; i++) {
                nivoji[i] = Integer.parseInt(br.readLine());
            }

            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }
    }



    private static Node addRecursive(int dim, int startX, int startY, boolean trash) {
        Node node = naloga9.new Node(dim);

        if(dim == 1) {
            node.max = tabela[startX][startY];
            node.min = tabela[startX][startY];
        } else {
            node.poddrevesa[0] = addRecursive(dim / 2, startX, startY, trash);
            node.poddrevesa[1] = addRecursive(dim / 2, startX + (dim / 2), startY, trash);
            node.poddrevesa[2] = addRecursive(dim / 2, startX, startY + (dim / 2), trash);
            node.poddrevesa[3] = addRecursive(dim / 2, startX + (dim / 2), startY + (dim / 2), trash);

            int min = node.poddrevesa[0].min;
            int max = node.poddrevesa[0].max;
    
            for(int i = 1; i < 4; i++) {
                if(node.poddrevesa[i].min < min)
                    min = node.poddrevesa[i].min;
                if(node.poddrevesa[i].max > max)
                    max = node.poddrevesa[i].max;
            }
    
            node.max = max;
            node.min = min;

            if(trash) {
                if(min == max) {
                    node.poddrevesa[0] = null;
                    node.poddrevesa[1] = null;
                    node.poddrevesa[2] = null;
                    node.poddrevesa[3] = null;
                }
            }
        } 

        return node;
    }

    public static void main(String[] args) {
        Counter program = new Counter("Program");
        program.Start();
        //----------------------------------------------------------

        if(Load(args[0])){
            korenskoVozlisce = addRecursive(dimenzija, 0, 0, true);
            StringBuilder str = new StringBuilder();

            for(int i = 0; i < nivoji.length; i++) {
                dostopi = 0;
                str.append(String.format("%d,%d\n", korenskoVozlisce.potopljeni(nivoji[i]), dostopi));
            }

            // try{
            //     BufferedWriter buffer = new BufferedWriter(new FileWriter(args[1]));
            //     buffer.write(str.toString());
            //     buffer.close();
            // } catch (IOException e) {
            //     System.out.println("Cannot write to file!");
            // }
            
            System.out.println(str.toString());
        }

        //----------------------------------------------------------
        program.Print();
    }
}
