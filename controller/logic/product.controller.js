import productDto from '../../model/dto/product.dto.js';

const createProduct = (req, res, next) =>{
    let Product = {
        code: req.body.code,
        name: req.body.name,
        color: req.body.color,
        weigth: req.body.weigth,  
        price: req.body.price  
    };
    productDto.create(Product,(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};
const updateProduct = (req, res, next) =>{
    let Product = {
        code: req.body.code,
        name: req.body.name,
        color: req.body.color,
        weigth: req.body.weigth,  
        price: req.body.price 
    };
    productDto.update({_id: req.body.id},Product,(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

const getAllProduct = (req, res, next) =>{
    productDto.getAll({},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(200).json(
            {info: data}
        );
    });
};
const getByCodeProduct = (req, res, next) =>{
    productDto.getByCode({code: req.params.code},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};

const deleteProduct = (req, res, next) => {
    productDto.delete({_id: req.body.id},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json(
            {
                info: data
            }
        );
    });
}

export default { createProduct, updateProduct, getAllProduct, getByCodeProduct, deleteProduct };