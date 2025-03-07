public class Main {
    public static void main(String[] args) {
        String [] tablero = {"","","","","","","","","",""};
        showTablero(tablero);
    
    }

   public static void showTablero(String [] tablero) {
    System.out.println(tablero[0] + " | "+ tablero[1]+" | " + tablero[2]);
    System.out.println(tablero[3] + " | "+ tablero[4]+" | " + tablero[5]);
    System.out.println(tablero[6] + " | "+ tablero[7]+" | " + tablero[8]);
   }
}