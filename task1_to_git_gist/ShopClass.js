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
      console.log("Invalid stock status");
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
    else{
      console.log("not found")
    }
  }
}


  editProduct(id, updatedFields) {
    const product = this.getProductById(id);
    if (!product){
      console.log("Not a existing")
    };

    if (updatedFields.productName !== undefined) {
      product.productName = updatedFields.productName;
    }

    if (updatedFields.cost !== undefined) {
      product.cost = updatedFields.cost;
    }

    return product;
  }

  updateStockStatus(id, newStatus) {
  let product = null;

  if (
    newStatus === "in-stock" || "low-stock" || "out-of-stock"
  ) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        product = this.products[i];
        product.stockStatus = newStatus;
        break;
      }
    }

    if (product) {
      return product;
    } else {
      console.log("Not a number")
    }
  } else {
    console.log("Invalid stock status")
  }
}
}
