import Customer from "@/models/Customer";
import ConnectDB from "@/utils/ConnectDB";

export default async function handler(req,res){
    
    try {
        await ConnectDB()
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"failed",message:"error in connecting to data base"})
        return;
    }

    if(req.method === "POST"){
        const data = req.body.data
        
        if(!data.name || !data.lastName || !data.email){
            return res.status(400).json({status:"failed",message:"Invalid Data"})
        }


        try {
            const customer = await Customer.create(data);
            res.status(201).json({status:"success",message:"data save in DB successfully",data:customer})
        } catch (error) {
            return res.status(500).json({status:"failed",message:"error in save data in DB"})
        }
    }
}