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

    if(req.method === "GET"){
        const id = req.query.customerId

 
        try {
            const customer = await Customer.findOne({_id: id});
            res.status(200).json({status:"success",data:customer})
        } catch (error) {
            return res.status(500).json({status:"failed",message:"error in retrieving data from DB"})
        }
    }
}