import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/todo/todo-list";
import CountryList from "./pages/countries/country-list";

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <img src="/truck.svg" alt="truck move it" height="30" class="m-2" />
            <a class="navbar-brand" href="#">
                Move It
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Postcode" aria-label="Search" />
                    <button class="btn btn-outline-dark" type="submit">Check</button>
                </form>
            </div>
        </div>
    </nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/countries" element={<CountryList />} />
      </Routes>
    </div>
  );
}

export default App;
