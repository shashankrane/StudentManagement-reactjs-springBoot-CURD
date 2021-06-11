
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state={
    
        }
    }
    render() {
        return (
            <div>
                 <header className="header">
                 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="/students"><h3>Student Management System </h3></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-link active" aria-current="page" to="/add-student">Add Student</Link>
                                <Link class="nav-link" to="/update-student">Update student</Link>
                                
                            </div>
                            </div>
                        </div>
                        </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;