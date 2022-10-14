

public class Vaje01{
    public static void main(String [] args){
        System.out.println(jePalindrom("hahah"));
    }

    public static int s(int x, int y){
        if(y > 0)
            return s(x, y - 1) + 1;
        else if(y < 0)
            return s(x, y + 1) - 1;
        else
            return x;
    }

    public static boolean jePalindrom(String niz){
        if(niz.length() > 1){
            if(niz.charAt(0) == niz.charAt(niz.length() - 1))
                return jePalindrom(niz.substring(1, niz.length() - 2));
            else return false;
        }
        return true;
    }

    public static int vsota(int [] data, int index){
        if(index < data.length - 1){
            return vsota(data, index + 1);
        }
        else return 0;
    }

    public static void izpisibinarno(int n){
        System.out.printf("%d", n % 2);
        if(n > 1){
            izpisibinarno(n / 2);
        }
        else System.out.printf("\n");
    }
}