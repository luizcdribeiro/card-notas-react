import React, {Component} from 'react';
import './style.css';
export class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = '';
    this.categoria = "Sem Categoria";
    this.state =  { categorias: []};

    this._novasCategorias = this._novasCategorias.bind(this);
  };

  componentDidMount() {

    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);

  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  };

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  
  };

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  
  }
  
  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return(
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>

        <select 
          className="form-cadastro_input" 
          onChange={this._handleMudancaCategoria.bind(this)}
        >

          <option>Sem Categoria</option>
          
          {this.state.categorias.map((categoria, key) => {
            return <option key={key}>{categoria}</option>
          })}

        </select>
        
        <input 
          type="text" 
          placeholder="Titulo" 
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />

        <textarea 
          placeholder="Escreva sua nota" 
          rows={15} 
          className="form-cadastro_input" 
          onChange={this._handleMudancaTexto.bind(this)}
        ></textarea>
        
        <button className="form-cadastro_input form-cadastro_submit" >Criar Nota</button>
      </form>
    );
  };
};

export default FormularioCadastro;