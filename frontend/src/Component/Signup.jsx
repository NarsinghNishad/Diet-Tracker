import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'


export const Signup = () => {

  const navigate=useNavigate();
  const SignupForm=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirm:''
    },
    onSubmit: async (value)=>{
      console.table(value);


      const res=await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(value),
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log(res.status);
      if(res.status===200){
        Swal.fire({
          icon:'success',
          title:'SignUp successfully',
          test:'Now Login to Continue'
        })
        navigate ('/login')
      }
      else{
        Swal.fire({
          icon:'error',
          title:'Invalid Email or Password'
        })
      }

     
    },
    
     
  });

  const uploadfile =async (e) => {
    if(!e.target.files) return;
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('myfile', file);
      const res = await fetch('http://localhost:5000/util/uploadfile',{
        method: 'POST', 
        body: fd
      });
      console.log(res.status);
      
   }

  return (
    <div   className='justify-content-center align-items-center d-flex float-left vh-100 img  '  >
      <div style={{marginLeft:'500px'}} className='card  sign'>
        <div className='card-body'>
          <h1 className='text-center'>SignUp Here</h1> <hr />
          <form onSubmit={SignupForm.handleSubmit}>

            <input type="text " id='name' onChange={SignupForm.handleChange} value={SignupForm.values.name}  className='form-control' placeholder='Name'/><br />

            <input type="text" id='email' onChange={SignupForm.handleChange} value={SignupForm.values.email} className='form-control' placeholder='Email'/><br />
            <input type="password" id='password' onChange={SignupForm.handleChange} value={SignupForm.values.password} className='form-control' placeholder='Password'/><br />
            <input type="text" id='confirm' onChange={SignupForm.handleChange} value={SignupForm.values.confirm} className='form-control' placeholder='Confirm'/><br />

            <label htmlFor="">upload image</label>
             <input onChange={uploadfile} type="file" className='form-control mb-3' />
           <button className='form-control btn btn-primary '>submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Signup;