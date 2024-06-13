import React, { useState } from 'react'

const Add = () => {
    const [name, setName] = useState("")
    const [fname, setFname] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")
    const [mo, setMo] = useState("")
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const handleAdd = (e) => {
        if (id !== null) {
            let copydata = [...data]
            copydata[id] = { name, fname, surname, age, mo }
            setData(copydata)
            setId(null)
        }
        else {

            const obj = { name, fname, surname, age, mo }
            data.push(obj)
        }
        e.preventDefault()
        // 1)
        // setData([...data,{name,fname,surname,age,mo}])
        // 2)
        // let copy=[...data]
        // copy.push({name,fname,surname,age,mo})
        // setData(copy)
        // 3)
        setName("")
        setFname("")
        setSurname("")
        setAge("")
        setMo("")

    }
    const handleDelete = (i) => {
        let copy = [...data]
        copy.splice(i, 1)
        setData(copy)

    }
    const handleEdit = (el, i) => {
        setName(el.name)
        setFname(el.fname)
        setSurname(el.surname)
        setAge(el.age)
        setMo(el.mo)
        setId(i)
    }

    return (
        <div>
            <center>
                <form onSubmit={handleAdd}>
                    <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={fname} placeholder='First Name' onChange={(e) => setFname(e.target.value)} />
                    <input type="text" value={surname} placeholder='Surname' onChange={(e) => setSurname(e.target.value)} />
                    <input type="text" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                    <input type="text" value={mo} placeholder="Mo" onChange={(e) => setMo(e.target.value)} />
                    <input type="Submit" />
                </form>
                <table border={1} cellPadding={2} cellSpacing={4}>
                    <tr>
                        <th>Name</th>
                        <th>Fname</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Mo</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    {
                        data.map((el, i) => (
                            <tr key="i">
                                <td>{el.name}</td>
                                <td>{el.fname}</td>
                                <td>{el.surname}</td>
                                <td>{el.age}</td>
                                <td>{el.mo}</td>
                                <td><button onClick={() => handleDelete(i)}>Delete</button></td>
                                <td><button onClick={() => handleEdit(el, i)}>Edit</button></td>
                            </tr>

                        ))
                    }
                </table>
            </center>
        </div>
    )
}

export default Add
