
import { useState } from 'react';
import './App.css';

function App() {
  let [data, setData] = useState([])
  let [name, setName] = useState("")
  let [sub1, setSub1] = useState("")
  let [sub2, setSub2] = useState("")
  let [sub3, setSub3] = useState("")
  let [id, setId] = useState(-1)
  let dataAdd = () => {
    var copydata = [...data]
    if (id >= 0) {
      copydata.splice(id, 1, { name, sub1, sub2, sub3 })
      setId(-1)

    }
    else {
      copydata.push({ name, sub1, sub2, sub3 })
    }
    setData(copydata)
    setName("")
    setSub1("")
    setSub2("")
    setSub3("")

  }
  const dataDelete = (i) => {
    let copydata = [...data]
    copydata.splice(i, 1)
    setData(copydata)

  }
  const dataUpdate = (id) => {
    setId(id)
    let copydata = [...data]
    console.log(copydata[id]);
    setName(copydata[id].name)
    setSub1(copydata[id].sub1)
    setSub2(copydata[id].sub2)
    setSub3(copydata[id].sub3)

  }
  return (
    <div className="App">
      <input type="text" value={name} placeholder='Enter Name' onChange={(p) => setName(p.target.value)} />
      <input type="text" value={sub1} placeholder='Subject 1' onChange={(p) => setSub1(p.target.value)} />
      <input type="text" value={sub2} placeholder='Subject 2' onChange={(p) => setSub2(p.target.value)} />
      <input type="text" value={sub3} placeholder='Subject 3' onChange={(p) => setSub3(p.target.value)} />
      <button onClick={dataAdd}>Add</button>
      <table border={1} align='center' cellPadding={5}>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Subject-1</th>
          <th>Subject-2</th>
          <th>Subject-3</th>
          <th>Total</th>
          <th>Per</th>
          <th>Max</th>
          <th>Min</th>
          <th>Grade</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {
          data.map((el, i) => {

            const a = parseInt(el.sub1)
            const b = parseInt(el.sub2)
            const c = parseInt(el.sub3)
            const total = parseInt(a + b + c)
            const per = total / 3
            const max = Math.max(a, b, c)
            const min = Math.max(a, b, c)
            let grade;
            if (per >= 90) {
              grade = "A+"
            }
            else if (per >= 80) {
              grade = "B"

            }
            else if (per >= 70) {
              grade = "C"
            }
            else {
              grade = "FAIL"
            }
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.name}</td>
                <td>{el.sub1}</td>
                <td>{el.sub2}</td>
                <td>{el.sub3}</td>
                <td>{total}</td>
                <td>{per}</td>
                <td>{max}</td>
                <td>{min}</td>
                <td style={{ backgroundColor: grade === "FAIL" ? "red" : "green" }}>{grade}</td>
                <td><button onClick={() => dataDelete(i)}>Delete</button></td>
                <td><button onClick={() => dataUpdate(i)}>Update</button></td>
              </tr>

            )
          })
        }
      </table>
    </div>
  );
}

export default App;
