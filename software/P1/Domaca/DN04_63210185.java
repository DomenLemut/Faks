import java.util.Scanner;
public class DN04_63210185{
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);

        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] order = new int[n];
        write(order, n);
        System.out.println(read(order, n, k));




    }
    public static int[] write(int[] order, int n) {
        Scanner sc = new Scanner (System.in);
        for (int i = 0; i < n; i++) {
            order[i] = sc.nextInt();
        }     
        return order;
    }


    public static int read(int[] order, int n, int k) {
        int pari = 0; 
        int max = maksimum(order, n, k); 
        for(int a = 0; a < n; a++) {
            if(k > max + order[a]){
                a++;
            }

            for(int b = 0; b < n; b++) {
                if(order[a] + order[b] == k) {
                    pari++;
                }
            }
        }
        return pari;

    }



    public static int maksimum(int[] order, int n, int k){
        int max = 0;
        for (int a = 0; a < n; a++){
            if (order[a] > max){
                max = order[a];
            }
        } 
        return max;
    }





}