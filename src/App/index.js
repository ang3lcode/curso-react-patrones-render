import React from "react";
// import { TodoProvider } from "../TodoContext";
// import { AppUI } from "./AppUI";
// import { TodoSearch } from "../TodoSearch";
// import { TodoItem } from "../TodoItem";

function App() {
  const [state, setState] = React.useState('animo');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}

function TodoHeader({ children }) {
  return (
    <header>{children}</header>
    // <React.Fragment>
    //   <TodoCounter />
    //   <TodoSearch />
    // </React.Fragment>
  );
}

function TodoList({ children }) {
  return <section>{children}</section>;
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoCounter</p>;
}
function TodoItem({ state }) {
  return <p>TodoItems { state }</p>;
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
