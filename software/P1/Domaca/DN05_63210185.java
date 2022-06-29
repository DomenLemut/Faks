import java.util.Scanner;
public class DN05_63210185{
    public static void main(String[] args){
        Scanner sc = new Scanner (System.in);
        int n = sc.nextInt();
        int height = n + 1;
        Boolean [] [] t = new boolean [(height) * 4] [2000];
        zapisiLike(n, t);
        preglejInIzpisiStolpce(height, t);
    }


    public void zapisiLike(int n, boolean [][] tabela){
        Scanner sc = new Scanner (System.in);
        for(int i = 0; i < n; i++){
            int type = sc.nextInt();
            int x = sc.nextInt();
            for(int y = t[0].lenght - 1; y >= 0; a--){
                if(precekirajLik(x, y - 1 , type, t)){
                    prflikajLik(x, y, type, t);
                }
            }
        }
    }

    public void preglejInIzpisiStolpce(int h, boolean[][] tabelcic){
        for(int stolpec = -2000; stolpec >= 2000; stolpec++){
            for(int vrstica = h; vrstica >= 0; vrstica--){
                if(tabelcic[vrstica][stolpec] == true){
                    System.out.println(vrstica + ":" + (stolpec + 1));
                }
            }
        }
    }
    
    public void prflikajLik(int x, int y, int type, boolean [][] tabelcic){
        switch(type){
            case 0:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y] [x + 2] = true; tabelcic [y] [x + 3] = true;

            case 1:
            tabelcic [y] [x] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 2] [x] = true; tabelcic [y + 3] [x] = true;
           
            case 2:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 1] [x + 1] = true;

            case 3:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y] [x + 2] = true; tabelcic [y + 1] [x + 1] = true;

            case 4:
            tabelcic [y + 1] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 2] [x + 1] = true;

            case 5:
            tabelcic [y + 1] [x] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 1] [x + 2] = true; tabelcic [y] [x + 1] = true;

            case 6:
            tabelcic [y] [x] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 2] [x] = true; tabelcic [y + 1] [x + 1] = true;

            case 7:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 2] [x] = true;

            case 8:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y] [x + 2] = true; tabelcic [y + 1] [x + 3] = true;

            case 9:
            tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 2] [x + 1] = true; tabelcic [y + 3] [x] = true;

            case 10:
            tabelcic [y] [x] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 1] [x + 2] = true;

            case 11:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 2] [x + 1] = true;

            case 12:
            tabelcic [y + 1] [x] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 1] [x + 2] = true; tabelcic [y] [x + 2] = true;

            case 13:
            tabelcic [y] [x] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 2] [x] = true; tabelcic [y + 2] [x + 1] = true;

            case 14:
            tabelcic [y] [x] = true; tabelcic [y + 1] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y] [x + 2] = true;

            case 15:
            tabelcic [y + 1] [x] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y] [x + 1] = true; tabelcic [y] [x + 2] = true;

            case 16:
            tabelcic [y] [x] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 2] [x + 1] = true;

            case 17:
            tabelcic [y] [x] = true; tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 1] [x + 2] = true;

            case 18:
            tabelcic [y] [x + 1] = true; tabelcic [y + 1] [x + 1] = true; tabelcic [y + 1] [x] = true; tabelcic [y + 2] [x] = true;
        }
    }

    
    
    public boolean precekirajLik(int x, int y, int type, boolean[][] tabelcic){
        switch(type){
            case 0:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y] [x + 2] || tabelcic [y] [x + 3]);

            case 1:
            return(tabelcic [y] [x] || tabelcic [y + 1] [x] || tabelcic [y + 2] [x] || tabelcic [y + 3] [x]);
           
            case 2:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y + 1] [x] || tabelcic [y + 1] [x + 1]);

            case 3:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y] [x + 2] || tabelcic [y + 1] [x + 1]);

            case 4:
            return(tabelcic [y + 1] [x] || tabelcic [y] [x + 1] || tabelcic [y + 1] [x + 1] || tabelcic [y + 2] [x + 1]);

            case 5:
            return(tabelcic [y + 1] [x] || tabelcic [y + 1] [x + 1] || tabelcic [y + 1] [x + 2] || tabelcic [y] [x + 1]);

            case 6:
            return(tabelcic [y] [x] || tabelcic [y + 1] [x] || tabelcic [y + 2] [x] || tabelcic [y + 1] [x + 1]);

            case 7:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y + 1] [x] || tabelcic [y + 2] [x]);

            case 8:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y] [x + 2] || tabelcic [y + 1] [x + 3]);

            case 9:
            return(tabelcic [y] [x + 1] || tabelcic [y + 1] [x + 1] || tabelcic [y + 2] [x + 1] || tabelcic [y + 3] [x]);

            case 10:
            return(tabelcic [y] [x] || tabelcic [y + 1] [x] || tabelcic [y + 1] [x + 1] || tabelcic [y + 1] [x + 2]);

            case 11:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y + 1] [x + 1] || tabelcic [y + 2] [x + 1]);

            case 12:
            return(tabelcic [y + 1] [x] || tabelcic [y + 1] [x + 1] || tabelcic [y + 1] [x + 2] || tabelcic [y] [x + 2]);

            case 13:
            return(tabelcic [y] [x] || tabelcic [y + 1] [x] || tabelcic [y + 2] [x] || tabelcic [y + 2] [x + 1]);

            case 14:
            return(tabelcic [y] [x] || tabelcic [y + 1] [x] || tabelcic [y] [x + 1] || tabelcic [y] [x + 2]);

            case 15:
            return(tabelcic [y + 1] [x] || tabelcic [y + 1] [x + 1] || tabelcic [y] [x + 1] || tabelcic [y] [x + 2]);

            case 16:
            return(tabelcic [y] [x] || tabelcic [y + 1] [x] || tabelcic [y + 1] [x + 1] || tabelcic [y + 2] [x + 1]);

            case 17:
            return(tabelcic [y] [x] || tabelcic [y] [x + 1] || tabelcic [y + 1] [x + 1] || tabelcic [y + 1] [x + 2]);

            case 18:
            return(tabelcic [y] [x + 1] || tabelcic [y + 1] [x + 1] || tabelcic [y + 1] [x] || tabelcic [y + 2] [x]);
        }
    }


}