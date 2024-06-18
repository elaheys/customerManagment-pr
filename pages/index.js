import HomePage from "@/components/templates/HomePage";
import Customer from "@/models/Customer"
import ConnectDB from "@/utils/ConnectDB"


export default function Home({data}) {

  return (
   <HomePage data={data}/>
  )
}


export async function getServerSideProps(){
  try {
    await ConnectDB()
    const customers = await Customer.find()
    return{
      props:{
        data : JSON.parse(JSON.stringify(customers))
      }
    }
  } catch (error) {
    console.log(error);
    return{
      notFound:true,
    }
  }
}