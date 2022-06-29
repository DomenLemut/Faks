import java.util.Scanner;

public class GoldenRatio{
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        int range = 1000;
        double a = 2;
        double b = 3;
        double zacasna;
        double golden = 0;

        for(int count = 1; count < range; count++){

            golden = (golden + b / a) / 2.0;
            zacasna = b;
            b = a + b;
            a = zacasna;
        }

        System.out.println(golden);

    }
}