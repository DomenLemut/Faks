import java.util.Scanner;

public class Prastevila2 {
    public static void main(String []args) {


        Scanner sc = new Scanner(System.in);  
        int range = sc.nextInt();
        int count = 0;
        int odd = 0;
         for (int ranger = 1; ranger < range; ranger++){
             for (int current = 1; current < ranger; current++){
                 
                 if (ranger % current == 0){
                     count++ ;
                 if (ranger % 100 == 0){
                     odd = 0;
                 }    
                 }
             }    
             if (count <= 2){
                odd++;
            }
            System.out.println(odd);
            count = 0;      
         }
    }
}    