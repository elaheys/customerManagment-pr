import React from 'react';
import FormInput from './FormInput';

const ItemList = ({form,setForm}) => {
    const { products } = form

    const addHandler = () => {
        setForm({...form, products:[...products,{name:"" , price:"" , qty:""}]})
    }

    const changeHandler = (e,index) =>{
        const {name,value} = e.target
        const newProducts = [...products]
        newProducts[index][name] = value
        setForm({...form, products : newProducts})
    }

    const deleteHandler = (index) => {
        const newProducts = [...products]
        newProducts.splice(index,1)
        setForm({...form, products : newProducts})
    }

    return (
        <div className='item-list'>
            <p>Purchased Products</p>
            {
                products.map((product,index) => (
                    <div key={index} className='form-input__list'>
                        <FormInput 
                        name="name"
                        label="Product Name" 
                        type="text" 
                        value={product.name} 
                        onChange={(e) => changeHandler(e,index)}/>
                        <div> 
                        <FormInput 
                        name="price"
                        label="Price" 
                        type="text" 
                        value={product.price} 
                        onChange={(e) => changeHandler(e,index)}/>

                        <FormInput 
                        name="qty"
                        label="Qty" 
                        type="number" 
                        value={product.qty} 
                        onChange={(e) => changeHandler(e,index)}/>
                        </div>
                        <button onClick={() => deleteHandler(index)}>Remove</button>
                    </div>
                ))
                }
            <button onClick={addHandler}>Add Item</button>
        </div>
    );
};

export default ItemList;

// function productItem({product,changeHandler,deleteHandler}){
//     <div  className='form-input__list'>
//                         <FormInput 
//                         name="name"
//                         label="Product Name" 
//                         type="text" 
//                         value={product.name} 
//                         onChange={changeHandler}/>
//                         <div> 
//                         <FormInput 
//                         name="price"
//                         label="Price" 
//                         type="text" 
//                         value={product.price} 
//                         onChange={changeHandler}/>

//                         <FormInput 
//                         name="qty"
//                         label="Qty" 
//                         type="number" 
//                         value={product.qty} 
//                         onChange={changeHandler}/>
//                         </div>
//                         <button onClick={deleteHandler}>Remove</button>
//                     </div>
// }