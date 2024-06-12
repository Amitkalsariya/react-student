import React, { useState } from 'react'

const Test = () => {
   const data=[
    {
        "Name":"Amit",
        "Marks":"80"
    },
    {
        "Name":"Nem",
        "Marks":"80"
    },
    {
        "Name":"Ami",
        "Marks":"80"
    },
    {
        "Name":"Ak",
        "Marks":"80"
    },
    {
        "Name":"Rick",
        "Marks":"80"
    }    
]
const data2=[
    {
        "Name":"M",
        "Marks":"80"
    },
    {
        "Name":"Nem",
        "Marks":"80"
    },
    {
        "Name":"Ami",
        "Marks":"80"
    },
    {
        "Name":"Ak",
        "Marks":"80"
    },
    {
        "Name":"Rick",
        "Marks":"80"
    }    
]
const data3=[
    {
        "Name":"I",
        "Marks":"80"
    },
    {
        "Name":"Nem",
        "Marks":"80"
    },
    {
        "Name":"Ami",
        "Marks":"80"
    },
    {
        "Name":"Ak",
        "Marks":"80"
    },
    {
        "Name":"Rick",
        "Marks":"80"
    }    
]
const data4=[
    {
        "Name":"N",
        "Marks":"80"
    },
    {
        "Name":"Nem",
        "Marks":"80"
    },
    {
        "Name":"Ami",
        "Marks":"80"
    },
    {
        "Name":"Ak",
        "Marks":"80"
    },
    {
        "Name":"Rick",
        "Marks":"80"
    }    
]
const data5=[
    {
        "Name":"AN",
        "Marks":"80"
    },
    {
        "Name":"Nem",
        "Marks":"80"
    },
    {
        "Name":"Ami",
        "Marks":"80"
    },
    {
        "Name":"Ak",
        "Marks":"80"
    },
    {
        "Name":"Rick",
        "Marks":"80"
    }    
]
  return (
    <div>
        <table border={1}>
            <tr>
            <th>Marks 1</th>
            <th>Name 1</th>
                
            </tr>
            
            {
                data.map((el,i)=>(
                <tr key={i}>
                    <td>{el.Name}</td>
                    <td>{el.Marks}</td>
                </tr>                        
                

                ))
            }
        </table>
        <table  border={1}>
        <tr>
            <th>Marks 1</th>
            <th>Name 1</th>
                
            </tr>
            {
                data2.map((el,i)=>(
                <tr key={i}>
                    <td>{el.Name}</td>
                    <td>{el.Marks}</td>
                </tr>                        
                

                ))
            }
        </table>
        <table  border={1}>
        <tr>
            <th>Marks 1</th>
            <th>Name 1</th>
                
            </tr>
            {
                data3.map((el,i)=>(
                <tr key={i}>
                    <td>{el.Name}</td>
                    <td>{el.Marks}</td>
                </tr>                        
                

                ))
            }
        </table>
        <table  border={1}>
        <tr>
            <th>Marks 1</th>
            <th>Name 1</th>
                
            </tr>
            {
                data4.map((el,i)=>(
                <tr key={i}>
                    <td>{el.Name}</td>
                    <td>{el.Marks}</td>
                </tr>                        
                

                ))
            }
        </table>
        <table  border={1}>
        <tr>
            <th>Marks 1</th>
            <th>Name 1</th>
                
            </tr>                   
            {
                data5.map((el,i)=>(
                <tr key={i}>
                    <td>{el.Name}</td>
                    <td>{el.Marks}</td>
                </tr>                        
                

                ))
            }
        </table>
    </div>
  )
}

export default Test
