import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.jsx';
import Title from './routes/Title.jsx';
import StudyBoard from './components/StudyBoard.jsx';
import StudyCreate from './components/StudyCreate.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Title />
  },
  {
    path: '/main',
    element: <App />,
    children: [
      {
        path: '',
        element: <StudyBoard />
      },
      {
        path: 'create-study',
        element: <StudyCreate />
      }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);