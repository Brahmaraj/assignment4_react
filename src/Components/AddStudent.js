import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { students_data } from "./StudentContext";

export const AddStudent = () => {

    const navigate = useNavigate();
    let [students, setStudents] = useContext(students_data);
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [course, setCourse] = useState("")
    let [batch, setBatch] = useState("")    
    let [tempObj] = useState({})

    

    // console.log(students);

    const onNameChange = (event) => {
        setName(event.target.value)
        // console.log(event.target.value)
    }

    const onAgeChange = (event) => {
        setAge(event.target.value)
    }

    const onBatchChange = (event) => {
        setBatch(event.target.value)
    }

    const onCourseChange = (event) => {
        setCourse(event.target.value)
    }

    // setTempObj(
    //         {
    //         name,
    //         age,
    //         course,
    //         batch
    //     })
    

    const submitHandler = () => {
        console.log(name,age,course,batch)
        console.log(tempObj)
        tempObj= {
            name,
            age,
            course,
            batch,
            id:String(students.length+1)
        }
        // students = [...students, tempObj]
        setStudents(tempObj)
        console.log(tempObj)
        navigate("/students")
    }

    const goBackHandler = () => {
        navigate("/students")
    }

    return(
            <div>
                <input className="input_box name_input" placeholder="name" type="text" value={name} name="name" onChange={onNameChange}/>
                <input className="input_box age_input" placeholder="age" type="number" name="age" value={age} onChange={onAgeChange}/>
                <input className="input_box course_input" placeholder="course" type="text" name="course" value={course} onChange={onCourseChange}/>
                <input className="input_box batch_input" placeholder="batch" type="text" name="batch" value={batch} onChange={onBatchChange}/>
                <button className="button back_button" onClick={goBackHandler}>go back</button>
                <button className="button submit_button" onClick={submitHandler} type="submit">submit</button>
            </div>     
        )
};
