import React, { useContext } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from "react-router-dom";
import { students_data } from "./StudentContext";




export default function BasicTable() {

  let navigate = useNavigate();

  let [students] = useContext(students_data);

  console.log(students);

  const addStudentHandler = () => {
    navigate(`/student-desc`)
  }

  return (
      <>
      <button className="student_add_button" onClick={addStudentHandler}>Add button</button>
    <TableContainer component={Paper} style={{margin:"100px auto",width:"90vw"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student,index) => {
            console.log(student)
            return (<>
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.age}</TableCell>
              <TableCell align="right">{student.course}</TableCell>
              <TableCell align="right">{student.batch}</TableCell>
              <TableCell align="right"><Link to={"/student-desc/"+student.id}>edit</Link></TableCell>
            </TableRow>
            </>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}