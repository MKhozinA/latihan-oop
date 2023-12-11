class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.products = [];
  }

  //Menampilkan detail kategori.
  displayInfo() {
    console.log(`Category ID: ${this.categoryId}`);
    console.log(`Category Name: ${this.categoryName}`);
  }

  //Memperbarui detail kategori.
  updateCategory(updatedFields) {
    // Menerapkan logika untuk memperbarui detail kategori berdasarkan objek updateFields
    Object.assign(this, updatedFields);
    console.log(`Category details updated: ${JSON.stringify(updatedFields)}`);
  }

  //Menampilkan produk yang termasuk dalam kategori.
  products() {
    console.log(`Products in Category ${this.categoryName}:`);
    this.products.forEach(product => {
      console.log(`Product Name: ${product.productName}, Price: ${product.price}`);
    });
  }
}

module.exports = Category;
