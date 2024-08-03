import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import  Home from "../pages/Home";
import  AbaDePesquisa  from "../pages/Aba-de-Pesquisa";
import  ErroNaPesquisa  from "../pages/Erro-na-Pesquisa";
import  PaginaInicial  from "../pages/Pagina-Inicial";
import  Produto  from "../pages/Produto";
import  ProdutoEncontrado from "../pages/Produto-Encontrado";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <PaginaInicial/> } path="/" />
                <Route element = { <Home/> } path="/Home" />
                <Route element = { <AbaDePesquisa/> } path="/AbaDePesquisa" />
                <Route element = { <ErroNaPesquisa/> } path="/ErroNaPesquisa" />
                <Route element = { <Produto/> } path="/Produto" />
                <Route element = { <ProdutoEncontrado/> } path="/ProdutoEncontrado" />

            </Routes>

        </BrowserRouter>

    );

}

export default Router;
