import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

import './assets/index.css';
import './assets/App.css';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias(); 
    this.notas = new ArrayDeNotas();
    
  };

  render() {

    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />

        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias} 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} 
          />

          <ListaDeNotas 
            apagarNota={this.notas.apagarNotas.bind(this.notas)} 
            notas={this.notas} 
          />

        </main>
  
      </section>
    );
  
  };
};

export default App;
