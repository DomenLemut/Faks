
//Prva naloga na poiskusnem izpitu Prog1


import java.util.Scanner;
public class Prva{
    public static void main(String[] args){
	    Scanner sc = new Scanner(System.in);
	    int sirinaH = sc.nextInt();
	    int visinaH = sc.nextInt();
		char prefChar = '*';
		Stolpci(sirinaH, visinaH, prefChar);
		Vrstice(sirinaH, visinaH, prefChar);
		Stolpci(sirinaH, visinaH, prefChar);
	
	}
	
	public static void Stolpci(int a, int b, char character){
	    for(int i = 0; i < 2 * b; i++){
		    for(int z = 0; z < a; z++){
			    System.out.print(character);
			}
			
			for(int z = 0; z < 2 * a; z++){
			    System.out.print(" ");
			}
			
			for(int z = 0; z < a; z++){
			    System.out.print(character);
			}
			System.out.println();
			
	    }
	}
	
	public static void Vrstice(int a, int b, char character){
	    for(int i = 0; i < b; i++){
		    for(int z = 0; z < 4 * a; z++){
			    System.out.print(character);
			}
			System.out.println();
			
		}
	}
	
}