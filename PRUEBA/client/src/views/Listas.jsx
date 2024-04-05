import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

function Listas() {
    const [products, setProducts] = useState([]);
    const [tasks, setTasks] = useState([]);
    const URL = 'http://localhost:3000/product/Products'
    const Task = 'http://localhost:3000/task/Tasks'

    const getProducts = async () => {
        try {
            const response = await axios.get(URL);
            setProducts(response.data);
            console.log(products)
        } catch (error) {
            console.log(error)
        }
    }

    const getTasks = async () => {
        try {
            const response = await axios.get(Task);
            setTasks(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getTasks();
    }, [])


  return (
    <div>
      <div className="container">
        <div className="col-2 row-4">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
        <tr>
            <th>{product.name}</th>
            <th>{product.description}</th>
            <th>{product.price}</th>
        </tr>
    ))}
  </tbody>
</table>
        </div>
      </div>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((task) => (
        <tr>
            <th>{task.Title}</th>
            <th>{task.Description}</th>
        </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default Listas
