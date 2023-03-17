
import React ,{ useState } from "react";
import employeData from "./employeData.js";

function Employees(){

    const [employee, setEmployee]= useState(employeData);
    const [empName, setEmpName]= useState();
    const [lastName, setLastName]= useState();
    const [email, setEmail]= useState();
    const [flag, setFlag]= useState(false);
    const [updatedIndex, setUpdatedIndex]= useState(0);


    const addEmployee=()=>{

        if(empName != "" && lastName != "" && email != ""){
            let newEmploye={
                empName,
                lastName,
                empEmail: email
            }
            setEmployee([...employee, newEmploye])
            setEmpName("");
            setLastName("");
            setEmail("");
        }else{
            alert("All fields required!")
        }
    }

    const deleteHandler=(delEmail)=>{
        console.log(delEmail);
        let afterDeletion=employee.filter((employee)=>{
            if(employee.empEmail !== delEmail){
                return employee
            }
        });
        setEmployee([...afterDeletion]);
    }
    const updateHandler=(employee, index)=>{
        setEmpName(employee.empName);
        setLastName(employee.lastName);
        setEmail(employee.empEmail);
        setUpdatedIndex(index);
        setFlag(true);
    }
    const ctaUpdateHandler=()=>{

        if(empName != "" && lastName != "" && email != ""){
            let newEmploye={
                empName,
                lastName,
                empEmail: email
            }

            let updatedEmployee=employee.map((emp, index)=>{
                if(updatedIndex === index){
                    
                    return newEmploye;
                }else{
                    return emp;
                }
            })
            setEmployee([...updatedEmployee])
            setEmpName("");
            setLastName("");
            setEmail("");
            setFlag(false)
        }else{
            alert("All fields are required!")
        }
    }

    const ShowDescription=(employee)=>{

        alert(`I am ${employee.empName} ${employee.lastName} and I have done my graduation in computer science and currently I am learning about Mobile app and Web Deevelopment. `)
    }

    return(
        <div>
            <h1>Employees List</h1>

            <input type="text" value={empName} placeHolder="Enter First Name" onChange={(e)=>setEmpName(e.target.value)}/>
            <input type="text" value={lastName} placeHolder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)}/>
            <input type="text" value={email} placeHolder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>

            {flag ?
            <button onClick={ctaUpdateHandler}>Update</button>
            :
            <button onClick={addEmployee}>Add Employee</button>
        
            }
        <hr/>
            <table>
                <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                    <th>Actions</th>
                </tr>
                {employee.map((employee, index)=>{
                    return(
                    <tr>
                        <td>{employee.empName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.empEmail}</td>
                        <td>
                            <button onClick={()=>updateHandler(employee, index)}>Update</button>
                            <button onClick={()=>deleteHandler(employee.empEmail)}>Delete</button>
                            <button onClick={()=>ShowDescription(employee)}>View</button>
                        </td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}
export default Employees;