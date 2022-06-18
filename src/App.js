import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProperty } from "./Actions/ObjAction";
import { AddTodoAction, RemoveTodoAction } from "./Actions/TodoAction";

function App() {
  const [work, setWork] = useState("");
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(work));
  };

  const removeHandler = (t) => {
    console.log("click", t);
    dispatch(RemoveTodoAction(t));
  };

  // TRYING MY OWN THING...
 let cnt = 0; 
  const myObject = useSelector((state) => state.myObject);
  const { obj } = myObject;
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const handleObjSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0 && key.length > 0) {
      dispatch(AddProperty(key, value));
    }
  };

  return (
    // Todo list 
    <div className="App">
      <h1>Todo list app in redux</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => {
            setWork(e.target.value);
          }}
        />
        <button type="submit">GO</button>
      </form>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span>{t.todo} </span>
            <button onClick={() => removeHandler(t)}>Delete</button>
          </li>
        ))}
      </ul>
    {/* Self Learned Object Redux... */}
      <>
        <form onSubmit={handleObjSubmit}>
          <input
            type="text"
            placeholder="KEY"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="VALUE"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>

        <h1> The Object </h1>
        {Object.entries(obj).map((item) => (
          <li key = {cnt++}>
            <span>{item}</span>
          </li>
        ))}
      </>
    </div>
  );
}

export default App;
