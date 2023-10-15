import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UserTable = () => {
    const userData = useLoaderData()
    const[users , setUsers]=useState(userData)

    const handelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-update-pbghddbo0-biddut-roys-projects.vercel.app/users/${id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data=>{
                    if (data.deletedCount>0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                })
              
            }
          })
    }

    return (
        <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Create time</th>
                        <th>lastLog</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                            {
                                users.map((user, idx) =>
                                    <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user?.lastlog}</td>
                                        <td>
                                            {
                                                <button onClick={()=>handelDelete(user._id)}>Delete</button>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
</div>
    );
};

export default UserTable;