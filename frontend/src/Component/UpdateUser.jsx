import { Formik } from 'formik';
import React, {useEffect, useState} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  )

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getbyid/' + id);
    const data = await res.json();

    console.log(data);
    setUserData(data);
  }
  useEffect(() => {
    fetchUserData();
  }, [])

  const submitupdateForm = async (value) => {
    const res = await fetch('http://localhost:5000/user/update' + id, {
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
        title: "User Updated Succesfully",
        test: 'Now Signup to Continue'
      });
      Navigate('/manageuser');
      navigate('/signup')
    }
  };

    
  return (
    <div className='justify-content-center align-items-center d-flex float-left vh-100 img5'>
        <div style={{marginTop:'150px', marginRight:'150px'}} className='card sign '>
        <div className='card-body'>
          <h1 className="text-center">Update Profile</h1> 
             
          {userData !== null ? (
              <Formik
                initialValues={userData}
                onSubmit={submitupdateForm}
              >
                {(SignupForm) => (

                  <form onSubmit={SignupForm.handleSubmit}>
                    
                    <input id='name' onChange={SignupForm.handleChange} value={SignupForm.values.name} type="text" placeholder='  name' className='form-control' /><br />

                    
                    <input id='email' onChange={SignupForm.handleChange} value={SignupForm.values.email} type="text" placeholder=' email'  className='form-control' /><br />
                    <input id='password' onChange={SignupForm.handleChange} value={SignupForm.values.password} type="text" placeholder='password'  className='form-control' /><br />
                    <input id='confirm' onChange={SignupForm.handleChange} value={SignupForm.values.confirm} type="text" placeholder='confirm'  className='form-control'/><br />
                    <button type='submit' className='form-control btn btn-primary'>Update</button>

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

export default UpdateUser;