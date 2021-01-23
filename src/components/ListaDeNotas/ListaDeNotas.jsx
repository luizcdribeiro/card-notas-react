import React, { Component } from 'react';
import CardNota from '../CardNota';
import './style.css';

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="lista-notas">
        { this.props.notas.map((nota, key) => {
          return(
            <li className="lista-notas_item" key={key}>
              
              <CardNota 
                indice={key} 
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto} 
                categoria={nota.categoria} 
              />

            </li>
          );
        })}
      </ul>
    );
  };
};

export default ListaDeNotas;
