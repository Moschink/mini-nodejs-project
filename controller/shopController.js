// const transporter = require()
let shop = [];

const getAllProduct = (req, res) => {
    res.send(shop);
}
const addNewProduct = (req, res) => {
    const id = Math.floor(Math.random() * 10000);
    const title = req.body.title;
    const description = req.body.description;

    shop.push({
        id,
        title,
        description,
        isDone: false
    });
}
const viewSingleProduct = (req, res) => {
    const id = req.params.id;
    let productFound;

    for(let i = 0; i<shop.length; i++){
        if(shop[i].id == id){
            productFound = shop[i];
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

const updateProductStatus = (req, res) => {
    const id = req.params.id;
    const isDone = req.body.isDone;

    const updatedProduct = [];

    for(let i = 0; i < shop.length; i++) {
        if(shop[i].id == id) {
            shop[i].isDone = isDone
        }
        updatedProduct.push(shop[i]);
    }
    shop = updatedProduct;

    res.send({
        message: "product updated successfully",
        shop
    });
}

const deleteProduct = (req, res) =>{
    const id = req.params.id;
    const updatedProduct = [];
    let deletedProduct

    for(let i; i<shop.length; i++){
        if(shop[i].id != id){
            updatedProduct.push(shop[i]);
        }else{
            deletedProduct = shop[i]
        }
    }
    shop = updatedProduct;
    res.send({
        message: "Product deleted successfully",
        deleteProduct
    });
}

module.exports = {
    addNewProduct,
    getAllProduct,
    viewSingleProduct,
    updateProductStatus,
    deleteProduct
}