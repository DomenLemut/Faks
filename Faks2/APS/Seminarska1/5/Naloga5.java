import java.io.FileReader;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.EOFException;
import java.io.FileWriter;

import java.io.IOException;

public class Naloga5 {
    public static char [][] arr;
    public static char [][] arr1;

    public static int trak = 0;
    public static int place = -1;

    public final String [] ukazi = {"GOR", "DOL", "LEVO", "DESNO", "NALOZI", "ODLOZI"};

    public static void main(String[] args) {
        Counter Program = new Counter("Program");
        Program.Start();
        //*********************************************************************

        Load(args[0]);
        printArr(arr);
        printArr(arr1);

        
        //*********************************************************************
        Program.Print();
    }

    public static void printArr(char [][] t) {
        System.out.printf("\n[Array printed out]\n");
        System.out.printf("-------------------\n");
        for(int i = 0; i < t[0].length; i++) {
            for(int j = 0; j < t.length; j++) {
                System.out.printf("%c ", t[j][i]);
            }
            System.out.print("\n");
        }
    }

    public static void clearArr(char [][] arr) {
        for(int i = 0; i < arr.length; i++) {
            for(int j = 0; j < arr[i].length; j++) {
                arr[i][j] = '-';
            }
        }
    }


    public static void Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            

            BufferedReader br = new BufferedReader(fr);

            String [] integersInString = br.readLine().split(",");

            int length = Integer.parseInt(integersInString[0]);
            int height = Integer.parseInt(integersInString[1]);

            arr = new char[height][length];
            arr1 = new char[height][length];

            clearArr(arr);
            clearArr(arr1);

            int x = 0;
            char curr;



            for(int y = 0; y < arr[0].length; y++) {
                x = 0;
                br.skip(2);

                curr = (char) br.read();
                while(curr != '\r' && curr != '\n' && curr != -1) {
                    if(curr == ',')
                        x++;
                    else
                        arr[x][y] = curr;

                        
                    curr = (char) br.read();
                }
            }

            for(int y = 0; y < arr1[0].length; y++) {
                x = 0;
                
                br.skip(2);
                int i = 0;

                curr = (char) br.read();

                while(curr != '\r' && curr != '\n' && curr != -1 && i < 20) {
                    if(curr == ',')
                        x++;
                    else
                        arr1[x][y] = curr;


                    curr = (char) br.read();
                    i++;
                }
            }

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    
    }
}
