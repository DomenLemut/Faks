import java.util.Scanner;

public class DN01_63210185{

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();         //širina
        int b = sc.nextInt();         //višina
        int widthCount = a - 1;       //širina za štetje
        int heightCount = b - 1;      //višina za štetja
        int kvadrati = 0;             //štetje možnih kvadratov

        while (widthCount > 0 && heightCount > 0){
            kvadrati += (widthCount * heightCount);
            widthCount--;
            heightCount--;
        }

        System.out.println(kvadrati);

    }
}