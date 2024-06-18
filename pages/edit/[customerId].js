import CustomerEditPage from '@/components/templates/CustomerEditPage';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const CustomerId = () => {
    const [data,setData] = useState(null)
    const router = useRouter()
    const{query:{customerId} , isReady} = router
    //isReady be ma true false mide agar data vojod dasht true mide chon tu lahze aval data undefind hast

    useEffect(() => {
        if(isReady){
            fetch(`/api/customer/${customerId}`)
            .then(res => res.json())
            .then(data => setData(data.data))
        }
    },[isReady])

    if(data) return (
        <CustomerEditPage data={data} id={data._id}/>
    );
};

export default CustomerId;