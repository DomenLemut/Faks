
public class Test06 {

    public static void main(String[] args) {

        Imenik etc = new Imenik("etc", new Datoteka[]{
            new SlikovnaDatoteka("icon.bmp", 16, 16),
            new BesedilnaDatoteka("settings", 200),
        });

        Imenik faks = new Imenik("faks", new Datoteka[]{
            new SlikovnaDatoteka("diagram.bmp", 1200, 900),
            new BesedilnaDatoteka("dn.tex", 700),
            new BesedilnaDatoteka("seminarska.tex", 3500),
        });

        Imenik zasebno = new Imenik("zasebno", new Datoteka[]{
            new SlikovnaDatoteka("gozd.bmp", 700, 1200),
            new SlikovnaDatoteka("jaz.bmp", 1500, 1000),
            new SlikovnaDatoteka("morje.bmp", 900, 750),
            new BesedilnaDatoteka("roman.txt", 10000),
            new Imenik("stariCasi", new Datoteka[]{
                new BesedilnaDatoteka("pisemce.txt", 300),
                new SlikovnaDatoteka("sosolci.bmp", 2000, 1500),
                new SlikovnaDatoteka("zabava.bmp", 1300, 1000),
            }),
            new SlikovnaDatoteka("triglav.bmp", 3000, 2000),
            new BesedilnaDatoteka("vsebina.txt", 200),
        });

        Imenik ana = new Imenik("ana", new Datoteka[]{faks, zasebno});

        Imenik sluzba = new Imenik("sluzba", new Datoteka[]{
            new BesedilnaDatoteka("dopis.txt", 500),
            new SlikovnaDatoteka("nacrt.bmp", 2000, 1000),
            new BesedilnaDatoteka("porocilo.txt", 30000),
        });

        Imenik bojan = new Imenik("bojan", new Datoteka[]{sluzba});

        Imenik home = new Imenik("home", new Datoteka[]{ana, bojan});

        Imenik koren = new Imenik("koren", new Datoteka[]{etc, home});

        System.out.println(faks.velikost());
        System.out.println(zasebno.velikost());
        System.out.println(sluzba.velikost());
        System.out.println(ana.velikost());
        System.out.println(bojan.velikost());
        System.out.println(home.velikost());
        System.out.println(etc.velikost());
        System.out.println(koren.velikost());
    }
}
