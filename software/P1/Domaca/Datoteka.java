public abstract class Datoteka{ //öe je vsaj ena metoda abstraktna je tudi razred abstrakten
    private String ime;

    public Datoteka(String ime){
        this.ime = ime;
    }

    public String getIme(){
        return(this.ime);
    }

    public int velikost(int w, int h){
        return (3 * w * h + 54);
    }

    public abstract String opis()
    /* abstraktna metoda bo obstajala, 
    *ampak ne se.... zato damo "abstract"
    */

    @Override 
    //pogleda,ce metoda obstaja
    public String toString(){
        return String.format("%s [%s &s]", this.ime, this.opis, opis());

    }


}