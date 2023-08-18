import React from 'react'
import '../App.css';

export default function Form(props) {

    const { handleClose, handleSubmit, handleOnChnage, data } = props;


    return (
        <div className="addContainer" >
            <form onSubmit={handleSubmit}>
                <div className="close-btn btn-cancle" onClick={() => handleClose(false)} > CANCLE</div>
                <label htmlFor="userName"> User Name: </label>
                <input required type="text" id="userName" name="userName" onChange={handleOnChnage} value={data.userName} />
                <label htmlFor="personalName"> Personal Name: </label>
                <input required type="text" id="personalName" name="personalName" onChange={handleOnChnage} value={data.personalName} />
                <label htmlFor="email">Email: </label>
                <input required type="email" id="email" name="email" onChange={handleOnChnage} value={data.email} />
                <label htmlFor="contactInfo">contact Info: </label>
                <input required type="number" id="contactInfo" name="contactInfo" onChange={handleOnChnage} value={data.contactInfo}></input>
                <button className="btn">Submit</button >
            </form >
        </div >
    )
}
