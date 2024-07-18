import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Please enter any Number: ");
        int n1 = scanner.nextInt();

        for (int n2 = 1; n2 <= 12; n2++) {
            System.out.println(n1 + " X " + n2 + " = " + (n1 * n2));
        }

        scanner.close();
    }
}