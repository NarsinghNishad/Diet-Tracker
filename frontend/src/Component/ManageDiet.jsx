import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageDiet = () => {

  const [dietlist, setDietlist] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/diet/getall");
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setDietlist(data);
  };

  useEffect(() => {

    //on  component open
    fetchUserData();

  }, []);
  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/diet/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      fetchUserData();
      toast.success('User Delete Successfully')
    }
  }

  return (
    <div className='vh-100 bg-ody-secoendary'>
      <div className='container py-5'>
        <h1 className='text-center my-4'>Manage Diet</h1>
        <table className='table table-dark'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">s.No</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>

                <th scope="col">Fooditems</th>

                <th scope='col' colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                dietlist.map((diet, index) => (
                  <tr
                    layout
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={diet._id}
                  >
                    <td>{index + 1}</td>
                    <td>{diet._id}</td>
                    <td>{diet.name}</td>
                    <td>{diet.user}</td>
                    <td>{diet.fooditems.map(food => (
                      <p>{food.name}</p>
                    ))}</td>
                    <td>{diet.createAt}</td>
                    <td>
                      <Link to={'/updateuser/' + diet._id} className='btn btn-primary'>Edit</Link>
                    </td>

                    <td>
                      <button className='btn btn-danger' onClick={() => { deleteUser(diet._id) }}>Delete</button>
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

export default ManageDiet;