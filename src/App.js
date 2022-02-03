import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Dropdown from './Dropdown';

function App() {
  const [empData,setEmpData]=useState(
    [
      { empId: 'empId-1', name: 'Aalan David',age:24,salary:"30000",address:"Madurai" },
      { empId: 'empId-2', name: 'Amir Khan',age:30,salary:"70000",address:"Chennai" },
      { empId: 'empId-3', name: 'Sundar Prasad',age:27,salary:"60000", address:"Bangalore"},
      { empId: 'empId-4', name: 'Juliana Mota',age:24,salary:"30000",address:"Noida" },
      { empId: 'empId-5', name: 'Natasha Pandya',age:44,salary:"10000000",address:"Mumbai" },
      { empId: 'empId-6', name: 'Dinesh Bodaye',age:24,salary:"30000",address:"Madurai" },
      { empId: 'empId-7', name: 'Rahul Nagwekar',age:30,salary:"70000",address:"Chennai" }
    ]
  );
  const [currentEmp,seCurrentEmp]=useState(empData[0])
  const getEmpDetails=(e)=>{
    console.log(e.target.value);
    let findEmp=empData.find((data)=>data.empId===e.target.value);
    seCurrentEmp(findEmp);
}
  return (
    <div className="App">
     <h1>Employee Details</h1>
     {/* <Dropdown options={empData} multiple /> */}
      <>Select an Employee </>
      <Dropdown options={empData} changeEmp={getEmpDetails}/>    
      <br/> <br/>
      { 'Details of '  + currentEmp.name}<br/>
       Age    : {currentEmp.age}<br/>
       Salary : {currentEmp.salary}<br/>
       Address: {currentEmp.address}<br/>
    </div>
  );
}

export default App;
