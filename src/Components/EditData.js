import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { students_data } from "./StudentContext";

export const EditData = () => {

    const navigate = useNavigate();
    const [students, setStudents] = useContext(students_data);
    const {selectedid} = useParams();
    let [name, setName] = useState(students[selectedid-1].name)
    let [age, setAge] = useState(students[selectedid-1].age)
    let [course, setCourse] = useState(students[selectedid-1].course)
    let [batch, setBatch] = useState(students[selectedid-1].batch)    
    let [tempObj] = useState(students[selectedid-1])

    

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
        // event.preventdefault();
        console.log(name,age,course,batch)
        console.log(tempObj)
        tempObj= {
            name,
            age,
            course,
            batch,
            id:selectedid
        }
        console.log("temp obj"+tempObj.name)
        console.log(students.splice((selectedid-1),1,tempObj))
        setStudents(students)
        navigate("/students")
    }

    const goBackHandler = () => {
        // event.preventdefault();
        navigate("/students")
    }

    

    // setStudents({

    // })

    return(
        students.map((student,index) => { 
            if(student.id===selectedid)
                return (
                    <div key={index}>
                        
                        <input className="input_box name_input" placeholder="name" type="text" value={name} name="name" onChange={onNameChange}/>
                        <input className="input_box age_input" placeholder="age" type="number" name="age" value={age} onChange={onAgeChange}/>
                        <input className="input_box course_input" placeholder="course" type="text" name="course" value={course} onChange={onCourseChange}/>
                        <input className="input_box batch_input" placeholder="batch" type="text" name="batch" value={batch} onChange={onBatchChange}/>
                        <button className="button back_button"  onClick={goBackHandler}>go back</button>
                        <button className="button submit_button" onClick={submitHandler} type="submit">submit</button>
                    </div>
                )
        })
    )
};
