import TodoList,{TodoItem} from "./TodoList";

function App() {
  return (
    
    <div className="App">
      <div className="header">
        <h1>MY TODOS</h1>
        <button>clear all</button>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
