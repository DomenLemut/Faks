
public class Test04 {

    public static void main(String[] args) {

        Datoteka diagram = new SlikovnaDatoteka("diagram.bmp", 1200, 900);
        Datoteka triglav = new SlikovnaDatoteka("triglav.bmp", 3000, 2000);
        Datoteka ikona = new SlikovnaDatoteka("icon.bmp", 16, 16);

        System.out.println(diagram.velikost());
        System.out.println(triglav.velikost());
        System.out.println(ikona.velikost());
    }
}
