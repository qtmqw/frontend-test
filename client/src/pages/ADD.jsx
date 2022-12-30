import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import './ADD.css';

const ADD = () => {

    const [switcher, setSwitcher] = useState('selectItem')

    const [dvd, setDvd] = useState(false);
    const [furniture, setFurniture] = useState(false);
    const [book, setBook] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        switcher === 'dvd'
            ? setDvd(true)
            : setDvd(false);
        switcher === 'furniture'
            ? setFurniture(true)
            : setFurniture(false);
        switcher === 'book'
            ? setBook(true)
            : setBook(false);

    }, [switcher]);

    const handleOnChange = (e) => {
        setSwitcher(e.target.value);
    }

    const [Sku, setSku] = useState('')
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Size, setSize] = useState('')
    const [Weight, setWeight] = useState('')
    const [Width, setWidth] = useState('')
    const [Lenght, setLenght] = useState('')
    const [Dimension, setDimension] = useState('')

    const changeOnClick = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8080/add", {
            Sku: Sku,
            Name: Name,
            Price: Price,
            Size: Size,
            Weight: Weight,
            Width: Width,
            Lenght: Lenght,
            Dimension: Dimension

        })
            .then(res => console.log(res.data))
        navigate("/")
    }

    return (
        <Container>
            <header>
                <h1>Product Add</h1>
                <div >
                    <Button variant='success' onClick={changeOnClick} noValidate>Save</Button>
                    <Link to='/' class="space_add"><Button variant='dark'>Cancel</Button></Link>
                </div>
                <br />
            </header>
            <form>
                <div >
                    <div className="px-3 mb-6">
                        <label>
                            <span class="sku_add">SKU </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="text" placeholder='#sku' name="Sku" onChange={e => setSku(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div >
                    <div className="px-3 mb-6">
                        <label>
                            <span class="name_add">Name </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="text" placeholder='#name' name="Name" onChange={e => setName(e.target.value)}
                            />
                        </label>
                    </div>
                </div>

                <div >
                    <div className="px-3 mb-6">
                        <label>
                            <span class="price_add">Price ($) </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="number" placeholder='#price' name="Price" onChange={e => setPrice(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className='switch'>
                    <span>Type Switcher</span>
                    <div>
                        <select className="form-select" value={switcher} onChange={handleOnChange}>
                            <option value="selectItem">Type Switcher</option>
                            <option value="dvd">DVD</option>
                            <option value="furniture">Furniture</option>
                            <option value="book">Book</option>
                        </select>
                    </div>
                </div>
                {dvd &&
                    <div className="px-3">
                        <label class="dvd">
                            <span>Size (MB) </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="number" placeholder='#size' name="Size" onChange={e => setSize(e.target.value)}
                            />
                        </label>
                    </div>
                }
                {furniture &&
                    <div className="px-3">
                        <label class="furniture">
                            <span>Height (CM) </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="number" placeholder='#height' name="Dimension" onChange={e => setDimension(e.target.value)}
                            />
                            <br />
                            <span class="width">Width (CM) </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="number" placeholder='#width' name="Width" onChange={e => setWidth(e.target.value)}
                            />
                            <br />
                            <span>Lenght (CM) </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="number" placeholder='#lenght' name="Lenght" onChange={e => setLenght(e.target.value)}
                            />
                        </label>
                    </div>
                }
                {book &&
                    <div className="px-3">
                        <label class="book">
                            <span>Weight (KG) </span>
                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-2 px-4 mb-3"
                                type="number" placeholder='#weight' name="Weight" onChange={e => setWeight(e.target.value)}
                            />
                        </label>
                    </div>
                }
                <footer>
                    <p>
                        Scandiweb Test assignment
                    </p>
                </footer>
            </form>
        </Container>
    )
}

export default ADD