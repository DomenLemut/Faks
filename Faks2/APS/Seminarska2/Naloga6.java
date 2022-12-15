

public class Naloga6 {
    
    public static boolean Load(String source) {
        try (FileReader fr = new FileReader(source)) {
            BufferedReader br = new BufferedReader(fr);


            return true;
        } catch (IOException e) {
            System.out.println("File not found!");
            return false;
        }    
    }
    public static void main(String[] args) {
        if(Load[args[0]]) {

        }
    }
}