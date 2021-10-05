import React from 'react';

const contents = [
  {
    content: 'High Order Functions',
    block: 8,
    status: 'Learned'
  },
  {
    content: 'Composicao de Componentes',
    block: 11,
    status: 'Learning',
  },
  {
    content: 'Composicao de Estados',
    block: 12,
    status: 'To Learn'
  },
  {
    content: 'Redux',
    block: 16,
    status: 'To Learn'
  },
];

class Content extends React.Component {
  render() {
    const newContents = contents.map(element => 
      <ol>
        <li>O conteúdo é {element.content}</li>
        <li>Status: {element.status}</li>
        <li>Bloco: {element.block}</li>
      </ol>
    )
    return newContents
  }
}

export default Content;