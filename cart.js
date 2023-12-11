class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = []; // Array untuk menyimpan produk dan kuantitasnya
  }

  // Menambahkan produk dengan kuantitas tertentu ke dalam keranjang
  addItem(product, quantity) {
    // Mencari apakah produk sudah ada di dalam keranjang
    const foundItem = this.items.find(item => item.product.productId === product.productId);

    if (foundItem) {
      // Jika produk sudah ada, tambahkan kuantitasnya
      foundItem.quantity += quantity;
    } else {
      // Jika produk belum ada, tambahkan sebagai item baru
      this.items.push({ product, quantity });
    }

    console.log(`Added ${quantity} ${product.productName}(s) to Cart (${this.cartId})`);
  }

  // Menghapus produk dari keranjang
  removeItem(product) {
    this.items = this.items.filter(item => item.product.productId !== product.productId);
    console.log(`Removed ${product.productName} from Cart (${this.cartId})`);
  }

  // Menampilkan isi keranjang dan kalkulasi jumlah total
  viewCart() {
    console.log(`Cart ID: ${this.cartId}`);
    console.log('Items in Cart:');
    this.items.forEach(item => {
      console.log(`Product: ${item.product.productName}, Quantity: ${item.quantity}`);
    });

    const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
    console.log(`Total Items: ${totalItems}`);
  }
}

module.exports = Cart;
