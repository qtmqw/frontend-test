import React, { useEffect, useState } from 'react'
import { Card, Form, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios'

import './Product.css';

const App = () => {

  const [products, setProducts] = useState([])
  const [isChecked, setisChecked] = useState([]);

  useEffect(() => {
    const allProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/")
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    allProducts()
  }, [])


  const handlecheckbox = (e) => {
    const { value, checked } = e.target;
    console.log(value);
    if (checked) {
      setisChecked([...isChecked, value]);
    } else {
      setisChecked(isChecked.filter((e) => e !== value));
    }
  }

  const [product, setProduct] = useState([])
  const deleteProduct = async id => {
    console.log(isChecked);
    if (isChecked.length !== 0) {
      await axios.delete(`http://localhost:8080/delete/${isChecked}`)
      setProduct(product.filter(elem => elem._id !== id))
    }
  }

  return (
    <Container>
      <form>
        <header>
          <h1>Product List</h1>
          <div >
            <Link to='/add' class="space"><Button>ADD</Button></Link>
            <Button variant='danger' onClick={deleteProduct} >MASS DELETE</Button>
          </div>
          <br />
        </header>
        <section>
          {products.map(product => (
            <Card style={{ width: '18rem' }} key={product.id} class="card">
              <Card.Body className='text-center'>
                <Form.Check type="checkbox" className='delete-checkbox' value={product.id} checked={product.isChecked} onChange={(e) => handlecheckbox(e)} />
                <p class="sku">{product.Sku}</p>
                <p class="name">{product.Name}</p>
                <p class="price">{product.Price} $</p>
                {
                  product.Size === "" || (
                    <p class="size">Size: {product.Size} MB</p>
                  )
                }
                {
                  product.Weight === "" || (
                    <p class="weight">Weight: {product.Weight} KG</p>
                  )
                }
                {
                  product.Dimension === "" || (
                    <p class="dimension">Dimension: {product.Dimension} x {product.Width} x {product.Lenght}</p>
                  )
                }
              </Card.Body>
            </Card>
          ))}
        </section >
        <footer>
          <p>
            Scandiweb Test assignment
          </p>
        </footer>
      </form>
    </Container>
  )
}

export default App
