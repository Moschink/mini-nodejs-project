// Array to store products (keeping your original variable name)
let shop = [];

const getAllProduct = (req, res) => {
    res.send(shop);
}

const addNewProduct = (req, res) => {
    const id = Math.floor(Math.random() * 10000);
    const productName = req.body.productName;
    const cost = parseInt(req.body.cost); 
    const stockStatus = req.body.stockStatus;
    const createdAt = new Date()
    shop.push({
        id,
        productName,
        cost,
        stockStatus,
        createdAt,
    });
    res.send({
        message : "Product added successfully"
    })
}

const viewSingleProduct = async (req, res) => {
    const id = parseInt(req.params.id); // Fixed: parse ID as integer
    let productFound;
    for(let i = 0; i < shop.length; i++){
        if(shop[i].id === id){ // Fixed: use strict equality
            productFound = shop[i];
            break; // Added break to stop searching once found
        }
    }
    if(!productFound){
        res.status(404).send("Product not found");
        return
    }
    res.send({
        message: "Product Found",
        productFound
    })
}

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { productName, cost } = req.body;
    
    let updatedProduct = null;
    
    for(let i = 0; i < shop.length; i++) {
        if(shop[i].id === id) {
            
            if(productName !== undefined && productName !== null && productName !== "") {
                shop[i].productName = productName;
            }
            if(cost !== undefined && cost !== null && cost !== "") {
                shop[i].cost = parseInt(cost);
            }
            shop[i].updatedAt = new Date();
            updatedProduct = shop[i];
            break;
        }
    }
    if(!updatedProduct) {
        return res.status(404).send({
            message: "Product not found",
            
        });
    }
    res.send({
        message: "Product updated successfully",
        updatedProduct: updatedProduct,
        allProducts: shop
    });
}

const updateProductStatus = (req, res) => {
    const id = parseInt(req.params.id); 
    const { status } = req.body;
    
    if (!status) {
        return res.status(400).send("Status is required in request body");
    }
    
    let productFound = false;
    
    for(let i = 0; i < shop.length; i++) {
        if(shop[i].id === id) {
            shop[i].stockStatus = status; 
            shop[i].updatedAt = new Date();
            productFound = true;
            break;
        }
    }
    
    if(!productFound) {
        return res.status(404).send("Product not found");
    }
    
    res.send({
        message: "Product status updated successfully",
        updatedProduct: shop.find(product => product.id === id)
    });
}

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id); 
    const updatedProduct = [];
    let deletedProduct;
    
    for(let i = 0; i < shop.length; i++){ 
        if(shop[i].id !== id){ 
            updatedProduct.push(shop[i]);
        } else {
            deletedProduct = shop[i];
        }
    }
    
    if(!deletedProduct) {
        return res.status(404).send("Product not found");
    }
    
    shop = updatedProduct;
    res.send({
        message: "Product deleted successfully",
        deletedProduct
    });
}

module.exports = {
    addNewProduct,
    getAllProduct,
    viewSingleProduct,
    updateProduct,        
    updateProductStatus,
    deleteProduct
}