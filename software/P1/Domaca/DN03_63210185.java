import java.util.Scanner;
public class DN03_63210185{
    public static void main(String[] args){
        Scanner sc = new Scanner (System.in);
        int k = sc.nextInt(); //2 ^ k je maksimalna širina ploščice
        int h = sc.nextInt(); //višina
        int w = sc.nextInt(); //širina
        int stkvadratov = 0;

        int potenca = maxSquare(k);
        kvadrati(potenca, h, w, stkvadratov);

    }    

    public static int maxSquare(int maxPotenca){
        int brt = 1;
        for(int i = 0; i < maxPotenca; i++){
            brt *= 2;
        }
        return brt;
    }

    public static int kvadrati(int potenca, int h, int w, int stkvadratov){
        int originalnapotenca = potenca;
        while (w > 0){
            if (potenca > w){
                kvadrati(potenca / 2, h, w, stkvadratov);
            }
            else{
                int trenutnavisina = h;
                int trenutnasirina = potenca;
                if (potenca < trenutnavisina){
                    kvadrati(potenca / 2, trenutnavisina, trenutnasirina, stkvadratov);
                }
                else{
                    stkvadratov += trenutnavisina * potenca;
                    trenutnavisina -= (trenutnavisina / potenca) * potenca;
                    if(potenca == 1){
                        potenca = originalnapotenca;
                        kvadrati(potenca, h, w, stkvadratov);
                    }
                    else{
                        kvadrati (potenca / 2, trenutnavisina, w, stkvadratov);
                    }
                }
            }
        }
        System.out.println(stkvadratov);  
        return stkvadratov;

    }

}