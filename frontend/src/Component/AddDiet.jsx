import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const AddDiet = () => {

  const [foodList, setFoodList] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [selFood, setSelFood] = useState([]);

  const fetchFoodItems = async () => {
    const res = await fetch('http://localhost:5000/food/getall');
    const data = await res.json();
    console.log(data)
    setFoodList(data);

  }

  useEffect(() => {
    fetchFoodItems();
  }, []);

  const selectFood = (food) => {
    setSelFood([...selFood, food]);
  }

  const AddDietForm = useFormik({
    initialValues: {
      name: '',
      user: currentUser._id,
      fooditems: [],
      createdAt: new Date()
    },
    onSubmit: async (value) => {
      value.fooditems = selFood;
      console.table(value);


      const res = await fetch('http://localhost:5000/diet/add', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'AddDiet successfully'

        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email or Password'
        })
      }


    },


  });
  return (
    <div className='body bg-success-subtle w-100 h-100'>
      <div className='col-md-3 mx-auto'>
        <div className='card '>
          <div className='card-body'>
            <h1 className='text-center'>AddDiet</h1>
            <form onSubmit={AddDietForm.handleSubmit}>
              <input type="text" id='name' onChange={AddDietForm.handleChange} value={AddDietForm.values.name} placeholder='name' className='form-control' /><br />

              <label>Select Food</label>
              <select className='form-control' onChange={e => selectFood(foodList[parseInt(e.target.value)])}>
                <option>Select Food</option>
                {
                  foodList.map((food, index) => (<option key={index} value={index}>{food.name}</option>))
                }
              </select>

              <p>Selected Foods</p>
              <ul className='list-group'>
                {
                  selFood.map((food) => (
                    <li className='list-group-item d-flex justify-content-between'>
                      <p>{food.name}</p>
                      <button className='btn btn-danger'>Remove</button>
                    </li>
                  ))
                }
              </ul>

              <button className='btn btn-primary'>AddDiet Here</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddDiet;