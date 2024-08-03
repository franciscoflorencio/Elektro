import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/Router';

import Home from './pages/Home';
import PaginaInicial from './pages/Pagina-Inicial';
import ProdutoEncontrado from './pages/Produto-Encontrado';
import ErroNaPesquisa from './pages/Erro-na-Pesquisa';
import AbaDePesquisa from './pages/Aba-de-Pesquisa';
import Produto from './pages/Produto';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
