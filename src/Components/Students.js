import React, {Component} from "react";
import Details from "./Details";

class Students extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            age:'',
            course:'',
            batch:'',
            id:'',
            arrayOfStudents:[
                {
                    name:'John',
                    age:'24',
                    course:'MERN',
                    batch:'October',
                    id:'1',
                },
                {
                    name:'Doe',
                    age:'25',
                    course:'MERN',
                    batch:'November',
                    id:'2',
                },
                {
                    name:'Biden',
                    age:'26',
                    course:'MERN',
                    batch:'September',
                    id:'3',
                },
                {
                    name:'Barar',
                    age:'22',
                    course:'MERN',
                    batch:'September',
                    id:'4',
                },
                {
                    name:'Christ',
                    age:'23',
                    course:'MERN',
                    batch:'October',
                    id:'5',
                },
                {
                    name:'Elent',
                    age:'24',
                    course:'MERN',
                    batch:'November',
                    id:'6',
                }
            ]
        };
    };

    render(){
        return (
            <div id="students_container">
                <h1>Students Detail</h1>
                <div className="students_white_rows">
                    <div className="name inner_white_rows">Name</div>
                    <div className="age inner_white_rows">Age</div>
                    <div className="course inner_white_rows">Courses</div>
                    <div className="batch inner_white_rows">Batch</div>
                    <div className="change inner_white_rows">Change</div>
                </div>
                <Details data={this.state.arrayOfStudents}/>
            </div>
        );
    };
};

export default Students;