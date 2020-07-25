import React, { Fragment } from "react";
import axios from "axios";
import Moment from "react-moment";

// const [name, email ,mobile , address , course, date ] = useState()

class StudentData extends React.Component {
  state = {
    students: [],
    email: "",
    password: "",
  };

  componentDidMount = () => {
    this.getRendertData();
  };

  getRendertData = () => {
    axios
      .get("/api/student")
      .then((response) => {
        const data = response.data;
        this.setState({ students: data });
        console.log(data);
        console.log("data received");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  handelEmail = (e) => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };
  handelPassword = (e) => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };

  validate = (e) => {
    e.preventDefault();
    //    this.state.students.slice(0,this.state.students.length).map(items => {
    //    if(items.email === this.state.email && items.password === this.state.password){
    //        console.log('login successful');
    //        alert('success')
    //    } else {
    //        console.log('unsuccessful');
    //        alert('check login details');
    //    }
    //    })

    for (var i = 0; i <= this.state.students.length; i++) {
      if (
        this.state.email === this.state.students[i].email &&
        this.state.password === this.state.students[i].password
      ) {
        alert("login Successful");
        break;
      } else {
        alert("Check Login Credential ");
        break;
      }
    }
  };

  //  validate = async e => {
  //     e.preventDefault()
  //     console.log(this.state.students)
  //     const newStudent = {
  //         email: this.state.email,
  //         password: this.state.password

  //     }

  //     try {
  //         const config = {
  //             headers: {
  //                 'Content-Type': 'application/json'
  //             }
  //         }
  //         const body = JSON.stringify(newStudent);
  //         const res = await axios.post('/api/student', body, config);
  //         alert(res.data);
  //     } catch (err) {
  //         if(err.response.data){
  //             alert(err.response.data)
  //         }
  //         // console.error(err.response.data)
  //     }
  // }

  render() {
    return (
      <Fragment>
        <h4 className="center">Login</h4>
        <div className="container">
          <div className="row">
            <div className="col l6">
              <form onSubmit={(e) => this.validate(e)}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handelEmail}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handelPassword}
                />
                <input type="submit" value="Sign-In" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default StudentData;
