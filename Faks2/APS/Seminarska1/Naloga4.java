public class Naloga4 {
    public class Kupec {
        //ID – enolično določa kupca
        private int ID;
        //S – dolžina nakupovalnega seznama (število izdelkov, ki jih namerava kupiti),
        private int S;
        //H – čas nabiranja enega izdelka z nakupovalnega seznama,
        private float H;
        //G – toleranca do gneče pred blagajno.
        private int G;

        public Kupec(int ID, int S, int H, int G) {
            this.ID = ID;
            this.S = S;
            this.H = H;
            this.G = G;
        }
    }

    // T – število korakov (časovnih enot) simulacije

    // LV – seznam vrednosti V1, V2, ..., VB, ki predstavljajo čase skeniranja enega izdelka na posamezi blagajni (v korakih simulacije).

    // LT – seznam z zamiki prihodov kupcev (v korakih simulacije). Seznam LT lahko vsebuje enega ali več elementov.
    // Na primer, če velja LT = [X, Y, Z], pomeni, da bodo novi kupci generirali v korakih
    // X, X+Y, X+Y+Z, X+Y+Z+X, X+Y+Z+X+Y, X+Y+Z+X+Y+Z,...

    // LS – seznam s podatki o dolžinah nakupovalnih seznamov. Seznam LS lahko vsebuje enega ali
    // več elementov. Na primer, če velja LS = [A,B,C], pomeni, da bo prvi kupec imel na
    // nakupovalnem seznamu A izdelkov, drugi kupec bo imel B izdelkov, tretji kupec C izdelkov,
    // četrti kupec A izdelkov, peti kupec B izdelkov, in tako naprej.

    // LH – seznam s podatki o tem, koliko časa kupec nabira en izdelek (v korakih simulacije).
    // Seznam LH lahko vsebuje enega ali več elementov. Na primer, če velja LH = [A,B], pomeni, da
    // bo prvi kupec potreboval A korakov simulacije za izbiro izdelka, druga kupec B korakov, tretji
    // kupec A korakov, četrti kupec B korakov, in tako naprej.

    // LG – seznam s podatki o toleranci do gneče za generirane kupce. Seznam LG lahko vsebuje
    // enega ali več elementov. Na primer, če velja LG = [A], pomeni, da bodo imeli vsi kupci
    // toleranco nastavljeno na A.

    public class Main {
        // public static void main(String[] args) {
            
        // }
    }
}
