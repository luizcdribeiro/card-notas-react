import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/index.css';
import './assets/App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    };
  };

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota ];
    const novoEstado = {
      notas: novoArrayNotas,
    }
    this.setState(novoEstado);
    
  };

  adicionarCategoria(nomeCategoria) {

    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias: novoArrayCategorias,}

    this.setState(novoEstado)

  } 
  
  deletarNota(index) {
    let arrayDeNotas = this.state.notas;

    arrayDeNotas.splice(index,1);
    this.setState({
      notas: arrayDeNotas,
    });
  }

  render() {

    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>

        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)} />
          <ListaDeNotas apagarNota={this.deletarNota.bind(this)} notas={this.state.notas} />
        </main>
  
      </section>
    );
  
  };
};

export default App;
