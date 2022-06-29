import java.util.Scanner;

public class DN02_63210185_0{

    public static void main (String[] args){

        Scanner sc = new Scanner (System.in);
        int b = sc.nextInt(); //število b (1,4) predstavlja obliko
        int d = sc.nextInt(); //dimenzija
        int n = sc.nextInt(); //število vnesenih indeksov
        int razdalja = 0;
        int xPrevious = 0;
        int yPrevious = 0;
        int x = 0;
        int y = 0;

        for(int a = 0; a < n; a++){

            int stevilo = sc.nextInt();
            iskanjeXY(b, d, stevilo);
            if (a == 0){
                xPrevious = x;
                yPrevious = y;
            }
            razdalja = (x - xPrevious) + (y - yPrevious);
            System.out.println(razdalja);
            xPrevious = x;
            yPrevious = y;

        }
        System.out.println(razdalja);


    }
    public method iskanjeXY(int oblika, int dimenzija, int indeks){
        int count = 0;  //count, kjer indeksa ne moremo pretvoriti v X in Y analiticno
        int x = 0;
        int y = 0;
        switch (oblika){
            case 1: //Ravnovrstnica
                x = indeks;

            case 2: //Kvadratnica
                x = indeks % dimenzija;
                y = indeks / dimenzija; 

            case 3: //Piramidnica
                while (count <= indeks && y <= dimenzija){
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
    }
}
