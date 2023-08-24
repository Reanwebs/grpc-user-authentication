import mongoose from "mongoose";

const WalletSchema = new mongoose.Schema({
    userId:{
        type:String,
        required :true
    },
    coins:{
        type:Number,
        required:true
    },
},{
    timestamps:true
});

const Wallet = mongoose.model('Wallet',WalletSchema);

export default Wallet;