import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updateCoffee = useLoaderData()
    const {_id, name , quantity, supplier, test, category, details , photo}= updateCoffee;
    const handelUpdate =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.updatePhoto.value;
        const newCoffee = { name , quantity, supplier, test, category, details , photoUrl}


        fetch(`http://localhost:5000/coffees/${_id}` ,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then( data =>{
           if (data.modifiedCount>0) {
            Swal.fire({
                title: 'success!',
                text: 'data add success',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
           }
        })
    }
    return (
        <div>
<form onSubmit={handelUpdate} className=" w-1/2 mx-auto ">
                <div className="form-control flex">
                    <label className="label">
                        <span className="label-text">Update Coffee :{name}</span>
                    </label>
                    <label className="input-group ">
                        <input type="text"  defaultValue={name} name="name" className="input input-bordered my-10" />
                    </label>
                    <label className="input-group ">
                        <input type="text" defaultValue={quantity}  name="quantity" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group ">
                        <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered my-10" />
                    </label>
                    <label className="input-group ">
                        <input type="text" name="test" defaultValue={test} className="input input-bordered" />
                    </label>
                    </div>
                <div className="form-control">
                    <label className="input-group ">
                        <input type="name" name="category" defaultValue={category} className="input input-bordered my-10" />
                    </label>
                    <label className="input-group ">
                        <input type="text" name="details" defaultValue={details} className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="input-group ">
                        <input type="name"  name="updatePhoto" defaultValue={photo} className="input input-bordered my-10" />
                    </label>
                    </div>
                    <input type="submit" value="Update coffee"  className="btn btn-wide bg-slate-500 mt-5"/>
            </form>
            
        </div>
    );
};

export default Update;