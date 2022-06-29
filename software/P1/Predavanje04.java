import java.util.Scanner;
public class Predavanje04 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int ocena = sc.nextInt();

        switch (ocena){                                   //v case-jih se števila ohranjajo skozi celotno deklarirano switch zanko. Če želimo doseg omejiti ga zapremo v {}
            case 1:
                System.out.println("jaaa");
                break;
            case 2:
                System.out.println("neee");
                break;


        }


    }
}
