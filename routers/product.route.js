import controller from '../controller/logic/product.controller.js'

export default (app) => {

    app.get("/product", (req,res,next)=>{
        controller.getAllProduct(req,res,next);
    });

    app.get("/product/bycode/:code", (req,res,next)=>{
        controller.getByCodeProduct(req,res,next);
    });

    app.post("/product", (req,res,next)=>{
        controller.createProduct(req,res,next);
    });

    app.put("/product", (req,res,next)=>{
        controller.updateProduct(req,res,next);
    });

    app.delete("/product", (req,res,next)=>{
        controller.deleteProduct(req,res,next);
    });
}