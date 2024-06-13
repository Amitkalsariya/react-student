
import { useState } from 'react';
import './App.css';
import Add from './Add';

function App() {
  // let [data, setData] = useState([])
  // let [name, setName] = useState("")
  // let [sub1, setSub1] = useState("")
  // let [sub2, setSub2] = useState("")
  // let [sub3, setSub3] = useState("")
  // let [id, setId] = useState(-1)
  // let dataAdd = () => {
  //   var copydata = [...data]
  //   if (id >= 0) {
  //     copydata.splice(id, 1, { name, sub1, sub2, sub3 })
  //     setId(-1)

  //   }
  //   else {
  //     copydata.push({ name, sub1, sub2, sub3 })
  //   }
  //   setData(copydata)
  //   setName("")
  //   setSub1("")
  //   setSub2("")
  //   setSub3("")

  // }
  // const dataDelete = (id) => {
  //   let copydata = [...data]
  //   copydata.splice(id, 1)
  //   setData(copydata)

  // }
  // const dataUpdate = (id) => {
  //   setId(id)
  //   let copydata = [...data]
  //   setName(copydata[id].name)
  //   setSub1(copydata[id].sub1)
  //   setSub2(copydata[id].sub2)
  //   setSub3(copydata[id].sub3)
    
  // }
  return (
    <div className="App">
      {/* <center>
      <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" value={sub1} placeholder='Subject 1' onChange={(e) => setSub1(e.target.value)} />
      <input type="text" value={sub2} placeholder='Subject 2' onChange={(e) => setSub2(e.target.value)} />
      <input type="text" value={sub3} placeholder='Subject 3' onChange={(e) => setSub3(e.target.value)} />
      <button onClick={dataAdd}>Add</button>
      <table border={1} align='center' cellPadding={5} cellSpacing={3}>
        <thead>
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
        </thead>
        <tbody>
          {
            data.map((el, i) => {

              var a = parseInt(el.sub1)
              var b = parseInt(el.sub2)
              var c = parseInt(el.sub3)
              var total = parseInt(a + b + c)
              var per = parseInt(total / 3)
              var max = Math.max(a, b, c)
              var min = Math.max(a, b, c)
              let grade;
              if (a < 33 || b < 33 | c < 33) {
                max = "--"
                min = "--"
                total = "--"
                per = "--"
                grade = "FAIL"
              }
              else if (per >= 90) {
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
        </tbody>
      </table>
      </center> */}
      {/* <Test></Test> */}
      <Add></Add>
    </div>
  );
}

export default App;
