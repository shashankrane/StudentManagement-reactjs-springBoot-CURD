import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ListStudentComponent from "./component/ListStudentComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import CreateStudentComponent from "./component/CreateStudentComponent";
import UpdateStudentComponent from "./component/UpdateStudentComponent";
import ViewStudentComponent from "./component/ViewStudentComponent";

function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />
          <div className="container">
            <Switch> 
              <Route  exact path="/" component={ListStudentComponent}></Route>
              <Route  exact path="/students" component={ListStudentComponent}></Route>
              <Route  exact path="/add-student" component={CreateStudentComponent}></Route>
              <Route  exact path="/update-student" component={UpdateStudentComponent}></Route>
              <Route  exact path="/view-student/:id" component={ViewStudentComponent}></Route>
                
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
