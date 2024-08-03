import React, { useEffect, useState } from 'react';
import { HomeDiv, Titulo, Subtitulo, CategoriaDiv, ProdutoDiv, EndDiv, StyledLink } from './style';
import Header from '../../components/header/header';
import Footer from '../../components/footer';
import Carrossel from '../../components/carrossel'; 
import Divider from '../../components/divider';
import Categoria from '../../components/categoria';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Produto from '../../components/produto';

const SubCategorias = [
  { icon: require('../../assets/categoria1.png'), label: 'Celulares' },
  { icon: require('../../assets/categoria2.png'), label: 'Notebooks' },
  { icon: require('../../assets/categoria3.png'), label: 'Tablets' },
  { icon: require('../../assets/categoria4.png'), label: 'Periféricos' },
  { icon: require('../../assets/categoria5.png'), label: 'TVs' },
  { icon: require('../../assets/categoria6.png'), label: 'Acessórios' },
  { icon: require('../../assets/categoria7.png'), label: 'PCs' },
  { icon: require('../../assets/categoria8.png'), label: 'Smartwatches' },
]

const Paravoce = [
  { icon: require('../../assets/produto2.png'), name: 'Capa protetora', price: 'R$20,00' },
]

const Produtosemdestaque = [
  { icon: require('../../assets/produto3.png'), name: 'Smart TV', price: 'R$1.400,00' },
  { icon: require('../../assets/produto4.png'), name: 'Monitor', price: 'R$750,00' },
]

const Maisvendidos = [
  { icon: require('../../assets/produto5.png'), name: 'Smartphone', price: 'R$3.200,00' },
  { icon: require('../../assets/produto6.png'), name: 'Smartwatch', price: 'R$900,00' },
]

export default function Home(){
  return(
    <div>
      <Header/>

      <HomeDiv>
        
        <Titulo> 
          <img src={require("../../assets/mini-logo.png")}/>
          Bem-vindo à Elektro!
        </Titulo>

        <Carrossel/>

        <Divider/>

        <Subtitulo>
          Categorias Elektro
        </Subtitulo>
        
        <CategoriaDiv>
          {SubCategorias.map((item, index) => (
            <Categoria key={index} icon={item.icon} label={item.label}/>
          ))}
        </CategoriaDiv>
      
        <Subtitulo>
          Para você
        </Subtitulo>
        <Divider/>
        <ProdutoDiv>
          <StyledLink to="/Produto">
            <Produto icon={require('../../assets/produto1.png')} name='Celular' price='R$800,00'/>
          </StyledLink>  

          {Paravoce.map((item, index) => (
            <Produto key={index} icon={item.icon} name={item.name} price={item.price}/>
          ))}
        </ProdutoDiv>
        <Subtitulo>
          Produtos em destaque
        </Subtitulo>
        <Divider/>
        <ProdutoDiv>
          {Produtosemdestaque.map((item, index) => (
            <Produto key={index} icon={item.icon} name={item.name} price={item.price}/>
          ))}
        </ProdutoDiv>
        <Subtitulo>
          Mais vendidos
        </Subtitulo>
        <Divider/>
        <ProdutoDiv>
          {Maisvendidos.map((item, index) => (
            <Produto key={index} icon={item.icon} name={item.name} price={item.price}/>
          ))}
        </ProdutoDiv>

      </HomeDiv>

      <EndDiv>
        Siga-nos nas redes sociais!
        <img src={require("../../assets/social-medias.png")}/>
      </EndDiv>

      <Footer/>
    </div>
  );
}

