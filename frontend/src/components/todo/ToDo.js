import React, {useState, useEffect} from "react";

const ToDo= props => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/todo")
      .then(res => res.json())
      .then(lists => setCustomers(lists));
  }, [])

  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {customers.map(list => {return <li key = {list.id}>{list.firstName} {list.lastName}</li>})}
      </ul>
    </div>
  )
}

export default ToDo;