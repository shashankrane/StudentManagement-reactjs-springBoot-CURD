

import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id:"",
            firstName:"",
            lastName:"",
            email:""
        }
       this.changeidHandler =this.changeidHandler.bind(this);
       this.changeFirstNameHandler =this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler =this.changeLastNameHandler.bind(this);
       this.changeemailHandler =this.changeemailHandler.bind(this);
       this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student ={id:this.state.id,firstName: this.state.firstName,lastName: this.state.lastName,email: this.state.email};
        console.log("student =>" + JSON.stringify(student));

        StudentService.updateStudent(student).then(res=>{
            this.props.history.push('/students');
        });
    }
    changeidHandler =(event)=>{
        this.setState({id: event.target.value});
    }
    changeFirstNameHandler =(event)=>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler =(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeemailHandler =(event)=>{
        this.setState({email: event.target.value});
    }
    cancel(){
        this.props.history.push('/students');
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className ="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                            <h3 className="text-center">Update Student</h3>
                            <div className="card-body">
                                <form>
                                <div style={{marginBottom:"10px"}} className="form-group">
                                        <label>Id</label>
                                        <input placeholder="id" name="id" className="form-control"
                                        value={this.id} onChange={this.changeidHandler} />
                                    </div>
                                    <div style={{marginBottom:"10px"}} className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div style={{marginBottom:"10px"}} className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div style={{marginBottom:"10px"}} className="form-group">
                                        <label>Email Id</label>
                                        <input placeholder="Email Id" name="email" className="form-control"
                                        value={this.email} onChange={this.changeemailHandler} />
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;