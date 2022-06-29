import java.util.Scanner;

public class Prastevila {
    public static void main(String []args) {


        Scanner sc = new Scanner(System.in);  
        int range = sc.nextInt();
        int count = 0;
         for (int ranger = 1; ranger < range; ranger++){
             for (int current = 1; current < ranger; current++){

                 if (ranger % current == 0){
                     count++ ;
                 }
             }    
             if (count <= 2){
                System.out.println (ranger);
            }
            count = 0;      
            }
    }
}    