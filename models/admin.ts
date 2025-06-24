import { model, models, Schema,Document } from "mongoose";
import mongoose from "mongoose";


export interface IAdmin extends Document {
    name: string;
    email: string;
    password: string;
    role: 'superadmin' | 'manager';
  }
const AdminSchema=new Schema({
    email:{
        type:String,
        required:[true,'please provide email']
    },
   password:{
        type:String,
        required:[true,'please provide password']
    }
},{timestamps:true})

const Admin=models.Admin || model<IAdmin>('Admin',AdminSchema)

export default Admin