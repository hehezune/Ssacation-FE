import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App.jsx';
import Title from './routes/Title.jsx';
import StudyBoard from './components/StudyBoard.jsx';
import StudyCreate from './components/StudyCreate.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import KakaoRedirect from './routes/KakaoRedirect.jsx';

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
  },
  {
    path: '/kakao',
    element: <KakaoRedirect />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);