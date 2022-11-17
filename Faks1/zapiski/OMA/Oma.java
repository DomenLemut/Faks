public class Oma {
    public static void main(String[] args) {
        float a = 1;
        for(int i = 0; i < 20; i++) {
            System.out.printf("za %d clen zaporedja = %f\n", i, a);
            a = calculateNext(a);
        }

    }

    public static float calculateNext(float a) {
        return (a + (15 / a)) / 2;
    }
}
