import React from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import { useEffect } from 'react';
const CarForm = (props) => {
    const Navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [imgUrl, setImgUrl] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        props.formSubmitted({
            name,
            imgUrl,
            desc
        });
    }
    useEffect(() => {
        if (props.car) {
            setName(props.car.name);
            setImgUrl(props.car.imgUrl);
            setDesc(props.car.desc);
        }
    }, [])
    useEffect(() => {

    }, [props.errors])
    return (
        <>
            <form onSubmit={onSubmitHandler} className='row'>
                <div className='col-5 m-5'>
                    <div className="form-group">
                        <label htmlFor="carName">Car Name</label>
                        <input type="text" className="form-control" id="carName" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Image url</label>
                        <input type="text" className="form-control" id="imgUrl" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <textarea className="form-control" id="desc" rows="3" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="col  d-flex flex-column justify-content-end p-5">
                    {props.car ?
                        <DeleteButton carId={props.car._id} successDelete={() => Navigate('/list')} />

                        : null}
                    <button type="submit" className="btn btn-primary mt-3">{props.formAction}</button>


                </div>

                <p >{props.errors}</p>

            </form>

        </>
    )
}

export default CarForm