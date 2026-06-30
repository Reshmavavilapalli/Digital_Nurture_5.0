public class Product {

    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public void display() {
        System.out.println("ID: " + productId +
                           ", Name: " + productName +
                           ", Category: " + category);
    }

    public static void main(String[] args) {
        Product p = new Product(101, "Laptop", "Electronics");
        p.display();
    }
}