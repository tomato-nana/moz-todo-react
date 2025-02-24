import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const filterButtonDATA = [
  { id: "filter-0", name: "All" },
  { id: "filter-1", name: "Active" },
  { id: "filter-2", name: "Completed" },
];

root.render(
  <React.StrictMode>
    {/* 为App组件传递props（subject） */}
    <App tasks={DATA} filterType={filterButtonDATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
