
public class Test10 {

    public static void main(String[] args) {

        Imenik a = new Imenik("a", new Datoteka[]{
            new Imenik("b", new Datoteka[]{
                new Imenik("c", new Datoteka[]{
                    new Imenik("d", new Datoteka[]{
                        new Imenik("e", new Datoteka[]{
                            new Imenik("f", new Datoteka[]{
                                new Imenik("g", new Datoteka[]{
                                    new BesedilnaDatoteka("g.txt", 100)
                                }),
                                new BesedilnaDatoteka("f.txt", 100)
                            }),
                            new BesedilnaDatoteka("e.txt", 100)
                        }),
                        new BesedilnaDatoteka("d.txt", 100)
                    }),
                    new BesedilnaDatoteka("c.txt", 100)
                }),
                new BesedilnaDatoteka("b.txt", 100)
            }),
            new BesedilnaDatoteka("a.txt", 100)
        });

        for (char c = 'a';  c <= 'g';  c++) {
            System.out.println(a.poisci(String.format("%c", c)));
            System.out.println(a.poisci(String.format("%c.txt", c)));
        }
    }
}
