import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageDiet = () => {

  const [dietlist, setDietlist] = useState([]);

  const [selDiet, setSelDiet] = useState(null);

  const calcCalories = (foodList) => {
    let cal = 0;
    for(let food of foodList){
      cal+=food.calories;
    }
    return cal;
  }

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
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Diet Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              {
                selDiet != null && (
                  <div className="modal-body">
                    <p className='m-0'>Name</p>
                    <h3 className='m-0'>{selDiet.name}</h3>
                    <p className='mt-3 mb-0'>Total Calories</p>
                    <h3 className='m-0'>{calcCalories(selDiet.fooditems)}</h3>
                    <hr />
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Food Name</th>
                          <th>Description</th>
                          <th>Calories</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          selDiet.fooditems.map((food) => (<tr>
                            <td>{food.name}</td>
                            <td>{food.description}</td>
                            <td>{food.calories}</td>
                          </tr>))
                        }
                      </tbody>
                    </table>
                  </div>

                )
              }
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className='container py-5'>
        <h1 className='text-center my-4'>Manage Diet</h1>
        <table className='table table-dark'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">s.No</th>
                {/* <th scope="col">ID</th> */}
                <th scope="col">Name</th>
                {/* <th scope="col">User</th> */}
                {/* <th scope="col">Fooditems</th> */}

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
                    {/* <td>{diet._id}</td> */}
                    <td>{diet.name}</td>
                    {/* <td>{diet.user}</td> */}
                    {/* <td>{diet.fooditems.map(food => (
                      <p>{food.name}</p>
                    ))}</td> */}
                    <td>{new Date(diet.createdAt).toLocaleDateString()}</td>
                    <td>

                    </td>

                    <td>
                      <button className='btn btn-danger' onClick={() => { deleteUser(diet._id) }}>Delete</button>
                    </td>
                    <td>
                      <button className='btn btn-primary' data-bs-toggle="modal"
                        data-bs-target="#exampleModal" onClick={() => { setSelDiet(diet) }}>View</button>
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