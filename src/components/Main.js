import React, { useState } from "react";

function Main() {
  const [DoList, setDoList] = useState([{}]);
  const HandleChange = () => {};

  const Add = (e) => {
    e.key == "Enter"
      ? DoList[DoList.length - 1] == null
        ? setDoList([{ text: e.target.value, active: true }])
        : setDoList([...DoList, { text: e.target.value, active: true }])
      : console.log(DoList);
  };

  const activeChange = (item) => {};

  function Delete(index) {
  const temp = [...DoList];
  temp.splice(index,1)
  setDoList(temp)
  }

  const Listele = (props) => {
    return (
    <ul className="todo-list">
      {props.list.map((item, index) => (
        <li key={index} >
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={HandleChange}
              onClick={!item.active}
            ></input>
            <label>{item.text}</label>
            <button
              className="destroy"
              onClick={() => Delete(index) }
            ></button>
          </div>
        </li>
      ))}
    </ul>)
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className={"new-todo"}
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={Add}
        ></input>
      </form>
      <section className="main">
        <input className="toggle-all" type="checkbox"></input>
        <label htmlFor="toggle-all">Mark all as complete</label>
      </section>

      {<Listele list={DoList} />}
    </>
  );
}

export default Main;

