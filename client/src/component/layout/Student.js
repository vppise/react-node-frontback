import React, { Fragment, useState } from 'react'
// import $ from 'jquery'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

 const Student = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        course: '',
        date: '',
    })
   
    const {name, email, mobile, address, course, date} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = async e => {
        e.preventDefault()
        console.log(formData)
        const newStudent = {
            name,
            email,
            mobile,
            address,
            course,
            date,
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newStudent);
            const res = await axios.post('/api/student', body, config);
            alert(res.data);
            // e.defaultValue();
        } catch (err) {
            if(err.response.data){
                alert(err.response.data)
            }
            // console.error(err.response.data)
        }
    }
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s6 l12">
                            
                        <form autoComplete="off" onSubmit={e => onSubmit(e)}>
                        <input placeholder="Name" name="name" value={name} onChange={e => onChange(e)} id="name" type="text" className="validate" required/>
                        <input placeholder="Email id" type="email" name="email" value={email} onChange={e => onChange(e)} id="email" required/>
                        <input placeholder="Mobile Number" type="number" name="mobile" value={mobile} onChange={e => onChange(e)} id="mo" maxLength="10" size="10" pattern="\d*"/>
                        <textarea placeholder="Address" name="address" onChange={e => onChange(e)} value={address} id="ads" cols="30" rows="10"></textarea>
                        <label>Choose a course:</label>
                        <select className="browser-default" name="course" defaultValue={course} onChange={e => onChange(e)} required>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                        </select>
                        <input type="date" name="date" onChange={e => onChange(e)} value={date} />
                        <button className='btn' type="submit" style={{marginLeft:"380px"}}>submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    
}

export default Student;