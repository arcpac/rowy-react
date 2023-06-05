import React from "react";
import {Routes, Route } from "react-router-dom";
import TodoList from "./pages/todo/todo-list";
import CountryList from "./pages/countries/country-list";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/countries" element={<CountryList />} />
       </Routes>
    </div>
  );
}

export default App;
