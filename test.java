import java.util.Scanner;
public class test {

    public static void main(String[] args) {
        try (Scanner Input = new Scanner(System.in)) {
            int Age = Input.nextInt();
            String[] age = {"Erreur", "Bebe", "Enfant", "Ado", "Adulte", "Aine"};
            if (Age <= 0) {
                System.out.println(age[0]);
            } else if (Age < 2) {
                System.out.println(age[1]);
            } else if (Age < 13) {
                System.out.println(age[2]);
            } else if (Age < 18) {
                System.out.println(age[3]);
            } else if (Age < 65) {
                System.out.println(age[4]);
            } else if (Age < 122) {
                System.out.println(age[5]);
            } else if (Age >= 122) {
                System.out.println(age[0]);
            }
        }
    }
}