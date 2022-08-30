import React from "react";
import { AllCampuses } from "./components/AllCampuses";
import { AllStudents } from "./components/AllStudents";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App(){


    return(
        <BrowserRouter>
            <div>
                <nav>
                    <Link to='/students'>Our Students</Link>
                    <br/>
                    <Link to='/campuses'>Our Campuses</Link>
                </nav>
                <main>
                    <h1>Welcome to our School</h1>
                    <Routes>
                        {/* temporary path; may add a homepage later on */}
                        <Route exact path='/' element={<AllStudents/>}/>
                        <Route path='/students' element={<AllStudents/>}/>
                        <Route path='/students/:studentId' element={<AllStudents/>}/>
                        <Route path='/campuses' element={<AllCampuses/>}/>
                        <Route path='/campuses/:campusId' element={<AllCampuses/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;