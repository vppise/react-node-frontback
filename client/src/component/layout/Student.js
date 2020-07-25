import React, { Fragment, useState } from "react";
// import $ from 'jquery'
import axios from "axios";
import { Redirect } from "react-router-dom";

const Student = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const { email, password, mobile, address } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const newStudent = {
      email,
      password,
      mobile,
      address,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newStudent);
      const res = await axios.post("/api/student", body, config);
      alert(res.data);
      setFormData(formData, "");
      // e.defaultValue();
    } catch (err) {
      if (err.response.data) {
        alert(err.response.data);
      }
      // console.error(err.response.data)
    }
  };
  return (
    <Fragment>
      <h4 className="center">User Registration</h4>
      <div className="container">
        <div className="row">
          <div className="input-field col s6 l12">
            <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
              <input
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                id="name"
                type="text"
                className="validate"
                required
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                id="email"
                required
              />
              <input
                placeholder="Mobile Number"
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => onChange(e)}
                id="mo"
                maxLength="10"
                size="10"
                pattern="\d*"
              />
              <textarea
                placeholder="Address"
                name="address"
                onChange={(e) => onChange(e)}
                value={address}
                id="ads"
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <button
                className="btn"
                type="submit"
                style={{ marginLeft: "380px" }}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Student;
