import java.util.Scanner;
public class PDNOPKNO{
    public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		//uvod
		System.out.println("Pozdravljeni v PKNO PDNO pretvorniku");
		System.out.println("To je orodje, ki vam bo prihranilo veliko volje in zivcev :-)");
		
		//dobi spremenljivke in pretvori na 2 na n
		System.out.println("Vnesi stevilo vhodnih spremenljivk:  ");
		int steviloSpremenljivk = sc.nextInt();
		int steviloMintermov = izBitov(steviloSpremenljivk);
		System.out.println();
		System.out.println();
		
		
		//pridobiPKNO
		System.out.println("Vnesite PDNO ali PKNO funkcijo: ");
		int [] PKNOPDNOnova = PridobiPKNOPDNO(steviloMintermov);
		System.out.println();
		System.out.println();
		
		//izpisi spremenljivke iz tabele
		System.out.println("Vasi pretvorjeni mintermi: ");
		Izpisi(PKNOPDNOnova, steviloMintermov);
		
		
		
	}
	
	public static int [] PridobiPKNOPDNO(int steviloMintermov){
		Scanner sc = new Scanner(System.in);
		int [] tabelca = new int [steviloMintermov];
		int midterm = 0;
	    for(int i = 0; i < steviloMintermov; i++){
			midterm = sc.nextInt();
			if(midterm >= steviloMintermov){
			    System.out.println("ERROR -> Napacen vnos")
			    Break;
			}
			
			while(midterm > i){
				tabelca[i] = steviloMintermov - midterm;
				i++;
			}
			
			if(midterm <= i){
				tabelca[i] = steviloMintermov + 1;
			}
			
		}
		return tabelca;
		
		
	}
	
	
	
	public static int izBitov(int biti){
		int output = 1;
		for(int i = 0; i < biti; i++){
			output *= 2;
		}
		return output;
		
	}
	
	
	public static void Izpisi(int [] PKNOPDNOnova, int steviloMintermov){
		for(int i = 0; i < steviloMintermov; i++){
			if(PKNOPDNOnova[i] != steviloMintermov + 1){
				System.out.print(PKNOPDNOnova[i] + " ");
				
			}
		}
		
		
		
	}
 	
	
}	