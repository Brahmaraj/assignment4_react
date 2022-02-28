import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";

class Details extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            passedProps:props
        };
    };

    render(){
        
        return(
            <>
            {this.state.passedProps.data.length>0 && this.state.passedProps.data.map( (ele) => {
                return (
                    <>
                    <div id="horizontal_line"></div>
                    <div className="students_white_rows"> 
                        <div className="name inner_white_rows">{ele.name}</div>
                        <div className="age inner_white_rows">{ele.age}</div>
                        <div className="course inner_white_rows">{ele.course}</div>
                        <div className="batch inner_white_rows">{ele.batch}</div>
                        <div className="change "><Link to="/edit_data">edit</Link></div>
                    </div>
                    <Outlet />
                    </>
                );
            })}
            </>
        );
    };
};

export default Details;