import java.util.Scanner;
import java.lang.Math;

public class DN02_63210185{

    public static void main (String[] args){

        Scanner sc = new Scanner (System.in);
        int b = sc.nextInt(); //število b (1,4) predstavlja obliko
        int d = sc.nextInt(); //dimenzija
        int n = sc.nextInt(); //število vnesenih indeksov
        int razdalja = 0; // razdalja med tipkami skupaj
        int xPrevious = 0; //prejšnji x
        int yPrevious = 0; //prejšnji y
        int x = 0;  //x
        int y = 0;  //y

        for(int a = 0; a < n; a++){

            int indeks = sc.nextInt();
            int count = 0;  //count, kjer indeksa ne moremo pretvoriti v X in Y analiticno
            switch (b){
                case 1: //Ravnovrstnica
                    x = indeks;

                case 2: //Kvadratnica
                    x = indeks % d;
                    y = indeks / d; 

                case 3: //Piramidnica
                    while (count <= indeks && y <= d){
                        if (x == y){
                            y++; 
                            x = -y;
                        } 
                        else{
                            x++;
                        }  
                        count++;     
                    }

                case 4: //Spiralnica 
            }      
            if (a < 1){

                xPrevious = x;
                yPrevious = y;
            } 
            else {

                razdalja += (x - xPrevious);
                razdalja += (y - yPrevious);
                xPrevious = x;
                yPrevious = y;
                System.out.println(razdalja);
            }
            
        }

        System.out.println(razdalja);

    }
}
