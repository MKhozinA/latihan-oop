class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categories = []; // Array untuk menyimpan ID kategori terkait
  }

  displayInfo() {
    console.log(`Product ID: ${this.productId}`);
    console.log(`Product Name: ${this.productName}`);
    console.log(`Price: ${this.price}`);
    console.log(`Description: ${this.description}`);
    console.log(`Categories: ${this.categories.join(', ')}`);
  }

  updateProduct(updatedFields) {
    // Implement logic untuk memperbarui detail produk berdasarkan updatedFields object
    Object.assign(this, updatedFields);
    console.log(`Product details updated: ${JSON.stringify(updatedFields)}`);
  }

  addCategory(categoryId) {
    // Tambahkan ID kategori baru ke dalam array categories jika belum ada
    if (!this.categories.includes(categoryId)) {
      this.categories.push(categoryId);
      console.log(`Product added to Category ${categoryId}`);
    }
  }

  removeCategory(categoryId) {
    // Hapus ID kategori dari array categories
    this.categories = this.categories.filter(catId => catId !== categoryId);
    console.log(`Product removed from Category ${categoryId}`);
  }
}

module.exports = Product;
