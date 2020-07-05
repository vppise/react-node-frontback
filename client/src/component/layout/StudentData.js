import React, { Fragment, useState } from 'react'
import axios from 'axios'

// const [name, email ,mobile , address , course, date ] = useState()

class StudentData extends React.Component {
    
    state = {
        name: "",
        mobile: "",
        email: ""
    }
  
       componentDidMount(){
           axios.get('/api/student')
           .then(res => {
               console.log(res.data[0].name);
               this.setState({name: res.data[0].name});
               this.setState({mobile: res.data[0].mobile});
               this.setState({email: res.data[0].email});
               this.setState({name: res.data[0].name});
           })
       }
        
    
       
    render(){

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <h3 className="center">Students Data</h3>
                    <div className="col s12 l12">
                    <table className="highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Course</th>
              <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{this.state.name}</td>
            <td>{this.state.email}</td>
            <td>{this.state.mobile}</td>
            <td>$0.87</td>
            <td>$0.87</td>
            <td>$0.87</td>
          </tr>
        </tbody>
      </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
    }
}

export default StudentData;