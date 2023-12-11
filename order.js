class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }

  createOrder(cart) {
    this.items = cart.items;
    // Hitung totalAmount dari barang-barang di dalam keranjang
    this.totalAmount = this.calculateTotalAmount();
    console.log(`Order created from Cart (${cart.cartId})`);
  }

  calculateTotalAmount() {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`);
    console.log('Items in Order:');
    this.items.forEach(item => {
      console.log(`Product: ${item.product.productName}, Quantity: ${item.quantity}`);
    });
    console.log(`Total Amount: ${this.totalAmount}`);
  }
}

module.exports = Order;
