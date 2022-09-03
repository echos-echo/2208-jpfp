import React from "react";
import { AllCampuses } from "./components/AllCampuses";
import { AllStudents } from "./components/AllStudents";
import { SingleStudent } from "./components/SingleStudent";
import { SingleCampus } from "./components/SingleCampus";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { useSelector } from "react-redux";

function App(){


    return(
        <BrowserRouter>
            <div className="content">
                <nav>
                    <Link to='/students'><div>Students</div></Link>
                    <br/>
                    <Link to='/campuses'><div>Campuses</div></Link>
                </nav>
                <main>
                    <Routes>
                        {/* temporary path; may add a homepage later on */}
                        <Route exact path='/' element={<AllStudents/>}/>
                        <Route path='/students' element={<AllStudents/>}/>
                        <Route path='/students/:studentId' element={<SingleStudent/>}/>
                        <Route path='/campuses' element={<AllCampuses/>}/>
                        <Route path='/campuses/:campusId' element={<SingleCampus/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;