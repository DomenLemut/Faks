
public class Test01 {

    public static void main(String[] args) {
        Datoteka dopis = new BesedilnaDatoteka("dopis.txt", 500);
        Datoteka porocilo = new BesedilnaDatoteka("porocilo.txt", 30000);
        Datoteka seminarska = new BesedilnaDatoteka("seminarska.tex", 3500);

        System.out.println(dopis.toString());
        System.out.println(porocilo.toString());
        System.out.println(seminarska.toString());
    }
}
