public class Oseba{

    private String ip;
    private char spol;
    private int starost;

    public Oseba (String ip, char spol, int starost){
        this.ip = ip;
        this.spol = spol;
        this.starost = starost;

    }
    public String toString(){
        //ip, spol, starost
        return String.format("%s, %c, %i", this.ip, this.spol, this.starost);

    }
    public boolean jeStarejsaOd(Oseba os){
        //true ce je oseba this starejsa od osebe os
        return(this.starost > os.starost);


    }

    




}

public class Stanovanje{

    private Oseba [] stanovalci;
    private Stanovanje [] sosedi;


    public Stanovanje(Oseba[] stanovalci){
        this.stanovalci = stanovalci;
        this.sosedi = null;

    }

    public int steviloStanovalcev(){
        return this.stanovalci.lenght;

    }

    public int steviloStarejsihOd(Oseba os){
        int n = 0;
        for(int i = 0; i < this.stanovalci.lenght; i++){
            if (i.jeStarejsaOd(os)){
                n++;
            }

        }
        return n;

    }
    public int[] mz(){
        public int[] mz() {
            int[] tab = {0, 0};
            for (Oseba p: this.stanovalci) {
            int ix = (p.vrniSpol() == 'M') ? 0 : 1;
            tab[ix]++;
            }
            return tab;
        }    


    }

    public Oseba starosta(){
        if (this.stanovalci.length == 0) {
            return null;
            }
            Oseba naj = this.stanovalci[0];
            for (Oseba p: this.stanovalci) {
            if (p.jeStarejsaOd(naj)) {
            naj = p;
            }
            return naj;
        }
            

    }
    public void nastaviSosede(Sosed levi, Stanovanje zgornji,
    Stanovanje desni, stanovanje spodnji){
        this.sosedi = new Stanovanje[]{
            levi, zgornji, desni, spodnji
        };


    }
    public Oseba starostSosescine(){
        Oseba naj = this.starosta();
        for (Stanovanje s: this.sosedi) {
            if (s != null) {
                Oseba najSosed = s.starosta();
                if (najSosed != null) {
                    if (naj == null || najSosed.jeStarejsaOd(naj)) {
                        naj = najSosed;
                    }
                }
            }
        }  
        return naj;
    }    


    public Oseba[] sosedjeSosedov(){

    }





}

public class Blok{
    public Blok(Stanovanje stanovanje){

    }

    public Oseba starosta(){

    }

    public int [][] razporeditev(){

    }


}