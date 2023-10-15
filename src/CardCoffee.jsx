import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardCoffee = ({coffee , allCoffees , setAllCoffees}) => {
     const {_id ,name , quantity, supplier, test, category, details , photo}= coffee;

     const handelDelete = () =>{
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
           
            fetch(`https://coffee-update-pbghddbo0-biddut-roys-projects.vercel.app/coffees/${_id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data =>{
                if (data.deletedCount>0) {
                       Swal.fire(
                        'Deleted!',
                        'Your coffee has been deleted.',
                        'success'
                                )
                }
                const remaining = allCoffees.filter(coffee => coffee._id !== _id);
                setAllCoffees(remaining)                
            })
            }
          })
     }
    return (
        <div className="mx-auto flex "> 
        <div className=" bg-base-100 shadow-xl flex">
            <figure><img src={photo} alt="img"/></figure>
            <div className="border-solid border-2 flex">
                <div className="my-auto">
                    <h2 className="card-title">{name}</h2> 
                    <p>{details}</p>
                </div>
                <div className="justify-end">
                    <button className="btn">view</button> <br />
                    <Link to={`/coffee/${_id}`}>
                    <button className="btn">Edit</button>
                    </Link> <br />
                    <button onClick={()=>handelDelete(_id)} className="btn">x</button><br />
                </div>
            </div>
        </div>
    </div>
    

    );
};

export default CardCoffee;