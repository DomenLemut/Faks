import java.util.Scanner;
public class Druga{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		int h = sc.nextInt();
		int w = sc.nextInt();
		int [] visine = PridobiSiVisave(h, w);
		Vrhovi(visine, w);
		InPrepadi(visine, w);
		
	}
	
	public static int[] PridobiSiVisave(int height, int width){
		Scanner sc = new Scanner(System.in);
		int[] t =  new int[width];
		int[] zaporedje = new int[width];
		
		for(int i = 0; i < width; i++){
			zaporedje[i] = i;
		}

		int count = 0;
		for(int trenutnaVisina = height; trenutnaVisina >= 1; trenutnaVisina--){
			for(int trenutnaSirina = 1; trenutnaSirina <= width; trenutnaSirina++){
				if(sc.nextInt() == 1 && zaporedje[trenutnaSirina] != 0){
					t[trenutnaSirina] = trenutnaVisina;
					zaporedje[trenutnaSirina] = 0;
					count++;
					if(count >= width){
						break;
					}
				
				}
			}
		}
		return t;
	}
	
	public static void Vrhovi(int [] visine, int width){
		int vrhovi = 0;
		for(int i = 0; i + 1 < width; i++){
			if(visine[i + 1] > visine[i]){
			vrhovi += visine[i + 1] - visine[i];
			}			
		}
		System.out.println(vrhovi);
	}
	
	public static void InPrepadi(int [] visine, int width){
		int prepadi = 0;
		for(int i = 0; i + 1 < width; i++){
			if(visine[i + 1] < visine[i]){
			    prepadi += visine[i] - visine[i + 1];
			}			
		}
		
		 System.out.println(prepadi);
	}

	
	
}