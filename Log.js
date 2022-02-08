import React, { useEffect } from "react";
import '../ReactProject/form.css';
import { useNavigate } from 'react-router-dom';
import Table from "./Table";
import Add from "./Add";
function Log() {

    const getDataFromLocalstorage=()=>{
        const Data=localStorage.getItem('PersonalInfo')
        if(Data){
            return JSON.parse(Data)
        }
        else{
            return []
        }
    }

    const [data, setData] = React.useState(getDataFromLocalstorage())
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const submitData = (e) => {
        e.preventDefault();
        console.log(data)

        let info = {
            username,
            password
        }
        setData([...data, info])
        setUsername('');
        setPassword('');
    }
    useEffect(() => {
        localStorage.setItem('PersonalInfo', JSON.stringify(data))
    }, [data])
   const deleteData=(username)=>{
            const filtereddata=data.filter((element,index)=>{
                return element.username !== username
            })
            setData(filtereddata)
   }

   const AddData=()=>{
       const filtereddata=data.filter((element,index)=>{
           return element.username!==username
       })
       setData(filtereddata)
   }
   
    return (
        <div className="wrapper">
            <h1>Login Here</h1>
            <div className="main">
                <div className="form-container">
                    <form autoComplete="off" className="form-group" onSubmit={submitData}>
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" placeholder="username" onChange={(e) => setUsername(e.target.value)} required /><br />

                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} required /><br />

                        <button type="submit" className="btn btn-success btn-md" value="submit">Submit</button>
                    </form>
                </div>

                <div className='view-container'>
                    {/* <h1> Add Customer</h1> */}
                    {data.length > 0 && <>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Table data={data} deleteData={deleteData} />
                                    {/* <Add data={data} AddData={AddData}/> */}
                                </tbody>
                            </table>
                        </div><br/><br/>
                        <button className='btn btn-danger' onClick={() => setData([])} >Remove All</button>
                    </>}

                    {data.length < 1 && <div> Customers Are Not Added</div>}

                </div>
            </div>
        </div>
    )
}
export default Log