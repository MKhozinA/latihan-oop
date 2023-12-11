// Import kelas-kelas dari modul-modul yang telah dibuat
const Product = require('./product');
const Category = require('./category');
const Cart = require('./cart');
const Order = require('./order');

// Buat produk
const product1 = new Product(1, 'Product One', 10, 'Description of Product One');
const product2 = new Product(2, 'Product Two', 15, 'Description of Product Two');

// Buat kategori
const category1 = new Category(101, 'Category One');
const category2 = new Category(102, 'Category Two');

// Tambahkan produk ke dalam kategori
product1.addCategory(category1.categoryId);
product1.addCategory(category2.categoryId);
product2.addCategory(category2.categoryId);

// Tampilkan informasi produk dan kategori
product1.displayInfo();
product2.displayInfo();
category1.displayInfo();
category2.displayInfo();

// Buat keranjang belanja
const cart = new Cart(201);

// Tambahkan produk ke dalam keranjang
cart.addItem(product1, 2);
cart.addItem(product2, 1);

// Tampilkan isi keranjang
cart.viewCart();

// Buat pesanan dari keranjang
const order = new Order(301);
order.createOrder(cart);

// Tampilkan detail pesanan
order.displayOrderDetails();
