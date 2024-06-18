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

    if(req.method === "DELETE"){
        const id = req.query.customerId

        try {
            await Customer.deleteOne({_id:id})
            res.status(200).json({status:"success",message:"data deleted"})
        } catch (error) {
            console.log(error);
            res.status(500).json({status:"failed",message:"error in deleting data"})
            return;
        }
    }
}