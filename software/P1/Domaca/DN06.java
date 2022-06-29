public class Tocka{
    public void main(String[] args){

    }



    public Tocka(double x, double y){
        private double x1 = x;
        private double y1 = y; 
    }

    public double vrniX(){
        return this.x;
    } 

    public double vrniY(){
        return this.y;
    }

    public String toString(){
        System.out.println("(% + %)", String.format("%.2f", this.x), String.format("%.2f", this.y));
    }

    public double razdalja(Tocka t){
        return(Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y)));
    } 

    public static Tocka izhodisce(){
        private double x = 0;
        private double y = 0;
    }

    public double razdaljaOdIzhodisca(){
        razdalja(izhodisceX);
    }

}




public class Premica{
    public void main(String[] args){
     
        
    }



    public Premica(double k, double n){
        private double n = n;
        private double k = k;
    }

    public double vrniK(){
        return this.k;
    }

    public double vrniN() {
        return this.n;
    }

    public String toString(){
        system.out.println("y = % x + &" , this.k, this.n);
    }

    public Tocka tockaPriX(double x){
        return(this.k * x + this.n);
    } 

    public static Premica skoziTocko(double k, Tocka t){
        private double k = t;

    }

    public Premica vzporednica(Tocka t){w
        private double n = ;

    }

    public Premica pravokotnica(Tocka t){

    }

    public Tocka presecisce(Premica p, double epsilon){

    }

    public Tocka projekcija(Tocka t){

    }

    public double razdalja(Tocka t){

    }

    public double razdaljaOdIzhodisca(){

    } 

    public double razdalja(double n){

    }


}