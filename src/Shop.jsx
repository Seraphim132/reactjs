import React, { useState } from 'react'

const Shop = () => {
    const [Form, setForm] = useState({
        title: '',
        desc: '',
        category: '',
        price: '',
        image: null
    })
    const [Product, setProduct] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Form.title !== '' && Form.desc !== '' && Form.category !== '' && Form.price !== '' && Form.image !== null){
            setProduct([...Product,Form])
            setForm({
                title: '',
                desc: '',
                category: '',
                price: '',
                image: null
            })
        }
    }
  return (
    <div>
      <div>
        <form className='form1' onSubmit={handleSubmit}>
            <label className='lab'>PRODUCT TITLE</label><br />
            <input type="text" className='inpu' value={Form.title} required onChange={(e) => setForm({...Form,title : [e.target.value]})}/>
            <label className='lab'>PRODUCT DESCRIPTION</label>  <br />
            <textarea className='textarea' required value={Form.desc} onChange={(e) => setForm({...Form,desc :[e.target.value]})}></textarea><br />
            <label className='lab'>PRODUCT CATEGORY</label><br />
            <input className='inpu' required type="text" value={Form.category} onChange={(e) => setForm({...Form,category :[e.target.value]})}/><br />
            <label className='lab'>PRODUCT PRICE</label><br />
            <input className='inpu' required type="number" value={Form.price} onChange={(e) => setForm({...Form,price :[e.target.value]})} /><br />
            <label className='lab'>UPLOAD PRODUCT IMAGE</label><br />
            <input className='input' required type="file" placeholder='Choose File' onChange={(e) => {
                let img = URL.createObjectURL(e.target.files[0])
                setForm({... Form, image: img})
            }}/>
            <button className='button1'>ADD PRODUCT</button>
        </form>
      </div>
      <div className='tags'>
        {Product.map((Product, ind) => (
            <div className='tag' key={ind}>
                <img className='img23' src={Product.image} alt="image 1" />
                <div className='ta'>
                  <h1>Product:  {Product.title}</h1>
                  <h2>CATEGORY:  {Product.category}</h2>
                  <h3>PRICE:  ${Product.price}</h3>
                  <p>DESCRIPTION: {Product.desc}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
