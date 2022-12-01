public class Kupec {
    public int ID; //ID kupca
    public int LS; //dolzina nakupovalnega seznama
    public int LH; //cas nabiranja enega izdelka
    public int LG; //toleranca do gnece pred blagajno

    public Kupec(int ID, int LS, int LH, int LG) {
        this.ID = ID;
        this.LS = LS;
        this.LH = LH;
        this.LG = LG;
    }

    @Override
    public String toString() {
        return String.format("ID: %d, LS: %d, LH: %d, LG: %d", ID, LS, LH, LG);
    }
} 