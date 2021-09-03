import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

// schema creation
const productSchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true,
    },
    color:{
        type: "String",
        required: true,
    },
    weigth: {
        type: "String",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    
});

productSchema.plugin(validator)
export default productSchema;
