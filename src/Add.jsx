import React, { useState } from 'react'

const Add = () => {
    const [name,setName]=useState("")
    const [fname,setFname]=useState("")
    const [surname,setSurname]=useState("")
    const [age,setAge]=useState("")
    const [mo,setMo]=useState("")
    const [data,setData]=useState([])
    const handleAdd=(e)=>{
        e.preventDefault()
        // 1)
        // setData([...data,{name,fname,surname,age,mo}])
        // 2)
        // let copy=[...data]
        // copy.push({name,fname,surname,age,mo})
        // setData(copy)
        // 3)
        const obj={name,fname,surname,age,mo}
        data.push(obj)
        setName("")
        setFname("")
        setSurname("")
        setAge("")
        setMo("")

    }
    const handleDelete =(i)=>{
        let copy =[...data]    
        copy.splice(i,1)
        setData(copy)
            
    }
    
  return (
    <div>
        <center>
        <form onSubmit={handleAdd}>
            <input type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={fname} placeholder='First Name' onChange={(e)=>setFname(e.target.value)} />
            <input type="text" value={surname} placeholder='Surname' onChange={(e)=>setSurname(e.target.value)} />
            <input type="text" value={age} placeholder="Age"onChange={(e)=>setAge(e.target.value)} />
            <input type="text" value={mo} placeholder="Mo"onChange={(e)=>setMo(e.target.value)} />
            <input type="submit" />
        </form>
        <table border={1}  cellPadding={2} cellSpacing={2}>
                <tr>
                    <th>Name</th>
                    <th>Fname</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Mo</th>
                    <th>Delete</th>
                </tr>
                {
                    data.map((el,i) =>(
                       <tr key="i">
                            <td>{el.name}</td>
                            <td>{el.fname}</td>
                            <td>{el.surname}</td>
                            <td>{el.age}</td>
                            <td>{el.mo}</td>
                            <td><button onClick={handleDelete}>Delete</button></td>
                       </tr>

                    ))
                }
        </table>
        </center>
    </div>
  )
}

export default Add
