import { useState } from "react";
function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([])
  console.log(todos)

  const handleAdd = () => {
    setTodos(prev => [...prev, work])
    setWork('')
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <div className="flex gap-2">
        <input
          type="text"
          className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <button
          type="button"
          className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div>
        <h3 className="font-bold text-xl">Content:</h3>
        <ul>
          {todos?.map((item, index)=>{
            return (
              <li key={index}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
