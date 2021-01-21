import React, {Component}  from 'react';
import './style.css';

class ListaDeCategorias extends Component {

  _handleEventoInput(event) {

    if(event.key === "Enter") {
      const valorCategoria = event.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, key) => {

            return <li className="lista-categorias_item" key={key} >{categoria}</li>

          })}

        </ul>
        <input 
          type="text" 
          className="lista-categorias_input" 
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    )
  }

  
}

export default ListaDeCategorias;