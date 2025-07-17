class ProvisionStore {
  #shopName;
  #location;

  constructor(shopName, location) {
    this.#shopName = shopName;
    this.#location = location;
    this.products = [];
  }

  generateId() {
    return Math.floor(Math.random() * 100000);
  }

  addProduct(productName, cost, stockStatus) {
    const allowedStatus = ["in-stock", "low-stock", "out-of-stock"];
    if (!allowedStatus.includes(stockStatus)) {
      throw new Error("Invalid stock status");
    }

    const product = {
      id: this.generateId(),
      productName,
      cost,
      stockStatus,
      createdAt: new Date()
    };

    this.products.push(product);
    return product;
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    console.log("Product not found");
    return null;
  }

  deleteProductById(id) {
    const newProducts = [];
    let deletedProduct = null;

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id !== id) {
        newProducts.push(this.products[i]);
      } else {
        deletedProduct = this.products[i];
      }
    }

    this.products = newProducts;
    return deletedProduct;
  }

  editProduct(id, updatedFields) {
    const product = this.getProductById(id);
    if (!product) {
      console.log("Product not found");
      return null;
    }

    if (updatedFields.productName !== undefined) {
      product.productName = updatedFields.productName;
    }

    if (updatedFields.cost !== undefined) {
      product.cost = updatedFields.cost;
    }

    return product;
  }

  updateStockStatus(id, newStatus) {
    if (!["in-stock", "low-stock", "out-of-stock"].includes(newStatus)) {
      console.log("Invalid stock status");
      return null;
    }

    let product = null;

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        product = this.products[i];
        product.stockStatus = newStatus;
        break;
      }
    }

    if (!product) {
      console.log("Product not found");
      return null;
    }

    return product;
  }
}
