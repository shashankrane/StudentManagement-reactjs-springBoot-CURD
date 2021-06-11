import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ViewStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            student:[]
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then(res => {
            this.setState({student: res.data});
        })

    }

    render() {
        return (
            <div>
                <br></br>
               <div className="card col-md-6 offset-md-3">
                   <h3 className="text-center">View Student Details</h3>
                   <div className="card-body">
                       <div className="row">
                           <label>Student First Name : {this.state.student.firstName} </label>
                           
                       </div>
                       <div className="row">
                           <label>Student Last Name : {this.state.student.lastName} </label>
                           
                       </div>
                       <div className="row">
                           <label>Student Email Id : {this.state.student.email} </label>
                       
                       </div>
                   </div>
               </div>
               <br></br>
            </div>
        );
    }
}

export default ViewStudentComponent;
