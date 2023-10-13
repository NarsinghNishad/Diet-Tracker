import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';



const Login = () => {

  const { setloggedin } = useAppContext();
  //initilize formik
  const loginForm = useFormik({
    initialValues: {

      email: '',
      password: '',


    },
    onSubmit: async (value) => {
      console.table(value);
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'Post',
        body: JSON.stringify(value),
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log(res.status);

      if (res.status === 200) {

        Swal.fire({
          icon: 'success',
          title: "Login Success"
        })
        setloggedin(true);
        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));

      }
      else if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password'
        })
      }
    },

  });
  return (
    <div className='col-md-3 mx-auto'>
      <div className='card '>
        <div className='card-body'>
          <h1 className='text-center'>Login Here</h1>
          <hr />
          <form onSubmit={loginForm.handleSubmit} >
            <label htmlFor="">EMAIL</label><br />
            <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="text" placeholder='email ' className='form-control' /><br />
            <label htmlFor="">PASSWORD</label><br />

            <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="text" placeholder=' password' className='form-control' /><br />
            <button className='btn btn-primary w-100'>Login here</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;