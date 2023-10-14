import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageFood = () => {

    const [foodlist, setFoodlist] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/food/getall");
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setFoodlist(data);
  };

  useEffect(() => {

    //on  component open
    fetchUserData();

  }, []);
  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/food/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      fetchUserData();
      toast.success('User Delete Successfully')
    }
  }

  return (
    <div className='vh-100 bg-ody-secoendary'>
      <div className='container py-5'>
        <h1 className='text-center my-4'>ManageFood</h1>
        <table className='table table-dark'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">s.No</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>

                <th scope="col">description</th>
                <th scope="col">calories</th>

                <th scope='col' colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                foodlist.map((food, index) => (
                  <tr
                    layout
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={food._id}
                  >
                    <td>{index + 1}</td>
                    <td>{food._id}</td>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                    <td>{food.calories}</td>
                    
                    <td>{food.fooditems.map(food => (
                      <p>{food.name}</p>
                    ))}</td>
                    
                    <td>
                      <Link to={'/updateuser/' + food._id} className='btn btn-primary'>Edit</Link>
                    </td>

                    <td>
                      <button className='btn btn-danger' onClick={() => { deleteUser(food._id) }}>Delete</button>
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

export default ManageFood;