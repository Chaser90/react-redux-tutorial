import React from 'react';

const Ninjas = ({ninjas}) => {
  
  const ninjasList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>age: { ninja.age }</div>
        <div>Belt: { ninja.Belt }</div>
      </div>
    )
  })
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas
