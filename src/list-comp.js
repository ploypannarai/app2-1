import React from 'react'

export default function List(){
    let color=['red','green','blue','yellow']
    let list = color.map(c => <li>{c}</li> )
   // return <ol>{list}</ol>

    return (
        <ul>
           <li>{color[0]}</li>
           <li>{color[1]}</li>
           <li>{color[2]}</li>
           <li>{color[3]}</li>
        </ul>
    )
}