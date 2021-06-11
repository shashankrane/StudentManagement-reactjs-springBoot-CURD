import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            students :[]
        }
        this.addStudent = this.addStudent.bind(this);
       // this.updateStudent = this.updateStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.viewStudent = this.viewStudent.bind(this);
    }
    componentDidMount(){
        StudentService.getStudents().then((res)=>{
        this.setState({students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student');
    }
    // updateStudent(){
    //     this.props.history.push('/update-student');
    // }<button onClick={this.updateStudent} className="btn btn-info">Update</button> 
    deleteStudent(id){
        StudentService.deleteStudent(id).then(res => {
            this.setState({students: this.state.students.filter(student =>  student.id !==id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }


    render() {
        return (
            <>
            <div>
                <br></br>
                <h2 className="text-center">Student List</h2>
                <div>
                    <button  className="btn btn-primary btn-success" onClick={this.addStudent}>Add Students</button>
                </div>
                <br></br>
                <div className="row">
                    <table className=" table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>student Id</th>
                                <th>student First Name</th>
                                <th>student Last Name</th>
                                <th>student Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key ={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            
                                            <button style={{marginLeft:"10px"}} onClick={() =>this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={() =>this.viewStudent(student.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
        );
    }
}

export default ListStudentComponent;