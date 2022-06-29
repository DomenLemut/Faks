
public class Test03 {

    public static void main(String[] args) {

        Datoteka diagram = new SlikovnaDatoteka("diagram.bmp", 1200, 900);
        Datoteka triglav = new SlikovnaDatoteka("triglav.bmp", 3000, 2000);
        Datoteka ikona = new SlikovnaDatoteka("icon.bmp", 16, 16);

        System.out.println(diagram.toString());
        System.out.println(triglav.toString());
        System.out.println(ikona.toString());
    }
}
