import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userlist, setUserlist] = useState([]);

  const fetchUserData = async () =>{
    const res = await fetch("http://localhost:5000/user/getall");
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setUserlist(data);
  };

  useEffect(() =>{

    //on  component open
    fetchUserData();
    
  }, []);
  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch ('http://localhost:5000/user/delete/'+id, {method : 'DELETE'});
    console.log(res.status);
    if(res.status === 200){
      fetchUserData();
      toast.success('User Delete Successfully')
    }
  }

  return (
    <div className='vh-100 bg-ody-secoendary'>
     <div className='container py-5'>
        <h1 className='text-center my-4'>Manage User</h1>
        <table className='table table-dark'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">s.No</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope='col' colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      userlist.map( (user, index) => (
       <tr
       layout
       animate={{opacity:1}}
       exit={{opacity:0}}
       key={user._id}
       >
        <td>{index+1}</td>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>
          <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link>
        </td>

        <td>
          <button className='btn btn-danger' onClick={() => {deleteUser(user._id)}}>Delete</button>
        </td>
       </tr>
      ))
    }
    
  </tbody>
</table>

        </table>
     </div>

    </div>
  )
}

export default ManageUser;