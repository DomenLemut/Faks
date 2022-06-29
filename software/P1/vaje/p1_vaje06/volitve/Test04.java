
import java.util.Arrays;

public class Test04 {

    public static void main(String[] args) {
        int[][][] volitve = {
            {
                {20,  5,  0, 10},
                {30, 40, 45, 25},
                {50, 20, 20, 15},
                { 0, 15,  5, 25},
                { 0, 20, 30, 25},
            },
            {
                {60,  5, 25,  0},
                {10, 15, 15, 30},
                {10, 65, 15, 55},
                { 0,  5, 25,  0},
                {20, 10, 20, 15},
            },
            {
                {20, 10, 10,  0},
                { 5, 30,  5, 90},
                {15, 30, 10, 10},
                {40, 20,  5,  0},
                {20, 10, 70,  0},
            },
        };

        System.out.println(Arrays.deepToString(Volitve.glasovi(volitve)));
    }
}
