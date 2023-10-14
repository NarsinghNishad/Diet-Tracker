import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Addfooditem = () => {
  const navigate = useNavigate();

  const AddfooditemForm = useFormik({
    initialValues: {
      name: '',
      description: '',
      calories: '',
    },
    onSubmit: async (value) => {
      console.table(value);


      const res = await fetch('http://localhost:5000/food/add', {
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
          title: 'Addfooditems successfully'

        })
        navigate('/AddDiet');
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
    <div className='justify-content-center align-items-center d-flex float-left vh-100 img3'>
      <div style={{marginRight:'500px', marginTop:''}} className='card  sign'>
        <div className='card-body'>
          <h1 style={{color:'yellow'}} className='text-center'>Addfooditem Here</h1> <hr />
          <form action="" onSubmit={AddfooditemForm.handleSubmit}>
            <input type="text " id='name' onChange={AddfooditemForm.handleChange} value={AddfooditemForm.values.name} placeholder='FoodName' className='form-control' /><br />
            <input type="text" id='description' onChange={AddfooditemForm.handleChange} value={AddfooditemForm.values.description} placeholder='description' className='form-control' /><br />
            <input type="number" id='calories' onChange={AddfooditemForm.handleChange} value={AddfooditemForm.values.calories} placeholder='calories' className='form-control' /><br />

            <button className='form-control btn btn-primary'>Addfooditem</button>
          </form>
        </div>
      </div>
    </div>

  )
};

export default Addfooditem;