import Swal from 'sweetalert2'

const Addcoffee = () => {

    const handelarcontrol =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name , quantity, supplier, test, category, details , photo}

        fetch('http://localhost:5000/coffees' ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then( data =>{
           if (data.insertedId) {
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
            <p>ADD coffee</p>

<form onSubmit={handelarcontrol} className=" w-1/2 mx-auto ">
                <div className="form-control flex">
                    <label className="label">
                        <span className="label-text">add a Coffee</span>
                    </label>
                    <label className="input-group ">
                        <input type="text" placeholder="add a coffee" name="name" className="input input-bordered my-10" />
                    </label>
                    <label className="input-group ">
                        <input type="text" placeholder="coffee quantity" name="quantity" className="input input-bordered" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group ">
                        <input type="text" placeholder="supplier" name="supplier" className="input input-bordered my-10" />
                    </label>
                    <label className="input-group ">
                        <input type="text" placeholder="test" name="test" className="input input-bordered" />
                    </label>
                    </div>
                <div className="form-control">
                    <label className="input-group ">
                        <input type="name" placeholder="category" name="category" className="input input-bordered my-10" />
                    </label>
                    <label className="input-group ">
                        <input type="text" placeholder="details" name="details" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="input-group ">
                        <input type="name" placeholder="photo url" name="Photo" className="input input-bordered my-10" />
                    </label>
                    </div>
                    <input type="submit" value="Add"  className="btn btn-wide bg-slate-500 mt-5"/>
            </form>
            
        </div>
    );
};

export default Addcoffee;