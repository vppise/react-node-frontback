import React, { Fragment } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

// const [name, email ,mobile , address , course, date ] = useState()

class StudentData extends React.Component {
    
    state = {
       students: []
    }

    componentDidMount = () => {
        this.getStudentData();
    };


     getStudentData = () => {
        axios.get('/api/student')
        .then((response) => {
            const data = response.data;
            this.setState({students: data})
            console.log(data)
            console.log("data received")
        })
        .catch((err) => {
            console.error(err.message);
        });
    }     


    // displayStudentData = () => {

    //   return students.map((student, index) => {
    //     const {name, email, mobile, address, course, date} = student
    //         <div key={index}>
    //         {/* <td>{student.name}</td>
    //         <td>{student.email}</td>
    //         <td>{student.mobile}</td>
    //         <td>{student.address}</td>
    //         <td>{student.course}</td>
    //         <td>{student.date}</td> */}
    //       </div>
    //   })

    // }

    renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, email, mobile, address, course, date } = student //destructuring
         return (
            <tr key={id}>
               <td>{name}</td>
               <td>{email}</td>
               <td>{mobile}</td>
               <td>{address}</td>
               <td>{course}</td>
              <Moment format="DD/MM/YYYY"><td>{date}</td></Moment>
            </tr>
         )
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
      {this.renderTableData()}
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