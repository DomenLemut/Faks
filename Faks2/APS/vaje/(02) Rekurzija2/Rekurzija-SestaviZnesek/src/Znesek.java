public class Znesek {
	
	public static boolean sestavi(int[] vrednosti, int index, int znesek) {
		if(index < vrednosti.length) {
			if(znesek > 0){
				for(int i = index; i < vrednosti.length; i++){
					if(sestavi(vrednosti, i + 1, znesek - vrednosti[index])){
						System.out.println(vrednosti[index]);
						return true;
					}
				}
			}
			else if(znesek == 0){
				System.out.println(vrednosti[index]);
				return true;
			}
		}
		
		return false;
		
	}
	
	public static void main(String[] args) {
		int[] vrednosti = {7,8,5,1,3,9,2,5,2,3,5};
		int znesek = 10;
		
		System.out.print("Znesek " + znesek + " dobimo tako, da sestejemo elemente: ");
		
		if (!sestavi(vrednosti, 0, znesek))
			System.out.println("Zneska ni mogoce sestaviti s podanimi elementi");
	}

}