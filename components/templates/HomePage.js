import React from 'react';
import Card from '../module/Card';

const HomePage = ({data}) => {
    console.log(data);
    return (
        <div>
            {
                data.map(customer => (
                    <Card key={customer._id} customer={customer}/>
                ))
            }
        </div>
    );
};

export default HomePage;