import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateDiet = () => {
    
  
    const { id } = useParams();
    const [foodData, setFoodData] = useState(null)
  
    const fetchFoodData = async () => {
      const res = await fetch('http://localhost:5000/food/getbyid/' + id);
      const data = await res.json();
  
      console.log(data);
      setFoodData(data);
    }
    useEffect(() => {
      fetchFoodData();
    }, [])
  
    const submitupdateForm = async (value) => {
      const res = await fetch('http://localhost:5000/food/update' + id, {
        method: 'PUT',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "icon",
          title: "Food Updated"
        });
        Navigate('/managefood')
        
      }
    };
  return (
    <div className='justify-content-center align-items-center d-flex float-left vh-100 img6'>
        <div style={{ marginLeft:'600px', height:'400px'}} className='card  sign w-25'>
          <div className='card-body '>
          <h1 className="text-center "> Update Diet</h1><br /> 
             
          {foodData !== null ? (
              <Formik
                initialValues={foodData}
                onSubmit={submitupdateForm}
              >
                {(addfooditemForm) => (

                  <form onSubmit={addfooditemForm.handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input id='name' onChange={addfooditemForm.handleChange} value={addfooditemForm.values.name} type="text" placeholder='  name' className='form-control' /><br /><br />

                    <label htmlFor="">FoodItem</label>
                    <input id='fooditems' onChange={addfooditemForm.handleChange} value={addfooditemForm.values.email} type="text" placeholder=' fooditems'  className='form-control' /><br /><br />
                   
                    <button type='submit' className='form-control btn btn-primary'>UpdateDiet here</button>

                  </form>

                )}

              </Formik>

            ) : <h1 className='text-center my-5'> Loading ...</h1>
            }
             </div>
             </div>
    </div>
  )
}

export default UpdateDiet;