# Panduan Pengguna Sistem E-commerce

Sistem e-commerce ini dirancang menggunakan prinsip Pemrograman Berorientasi Objek (OOP) dalam JavaScript dengan memanfaatkan Node.js.

## Petunjuk Penggunaan

### 1. Menjalankan Aplikasi

Pastikan Anda memiliki Node.js terinstal pada komputer Anda. Untuk menjalankan aplikasi, ikuti langkah-langkah berikut:

1. Salin repositori ini ke komputer Anda dengan perintah `git clone <URL_REPOSITORY>`.
2. Buka terminal atau command prompt, masuk ke direktori proyek dengan perintah `cd nama_direktori`.
3. Pastikan Anda sudah menginstal dependensi dengan perintah `npm install`.
4. Jalankan aplikasi dengan perintah `node main.js`.

### 2. Penggunaan Kelas

#### Kelas Produk (Product)

- `displayInfo()`: Menampilkan detail produk.
- `updateProduct()`: Memperbarui detail produk.
- `addCategory(categoryId)`: Menambahkan produk ke kategori tertentu.
- `removeCategory(categoryId)`: Menghapus produk dari kategori tertentu.

#### Kelas Kategori (Category)

- `displayInfo()`: Menampilkan detail kategori.
- `updateCategory()`: Memperbarui detail kategori.
- `products()`: Menampilkan produk yang termasuk dalam kategori.

#### Kelas Keranjang (Cart)

- `addItem(product, quantity)`: Menambahkan produk ke dalam keranjang dengan kuantitas.
- `removeItem(product)`: Menghapus produk dari keranjang.
- `viewCart()`: Menampilkan isi keranjang dan kalkulasi jumlah total.

#### Kelas Pesanan (Order)

- `createOrder(cart)`: Membuat pesanan baru dari item di dalam keranjang.
- `displayOrderDetails()`: Menampilkan detail pesanan, termasuk produk dan jumlah total.

### 3. Catatan Penting

- Pastikan untuk menambahkan produk ke dalam kategori sebelum menambahkan ke keranjang atau membuat pesanan.
- Perbarui detail produk dan kategori sesuai kebutuhan Anda.

Terima kasih telah menggunakan Sistem E-commerce ini! Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami.
