import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
function formatDate(date) {
  return date.toLocaleDateString();
}

function Zone(props) {
  return (
    <div className="recomendados">
      <div className="recomendados-content">
      <h6 className="reomendados-title">{props.title}</h6>
      
      <Card 
        friendName={card.friendName}
        friendSpeciality={card.friendSpeciality}
        button={card.button}
        avatarUrl={card.avatarUrl}
      />

      </div>
    </div>
  );
}



function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

const zone = {
  title: "Recomendados",
  
};

const card = {
  friendName: "Julio Toloza",
  friendSpeciality: "editor",
  button: "Seguir",
  avatarUrl: "img/place-holder.jpg",
};

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

*/


/*
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
*/

function CardFollow(props) {
  return (
    <div className="recomendados-card">
        <img className="rounded-circle"
          src={props.data.avatarUrl}
          alt={props.data.name}
        />
        <div className="recomendados-card-body">
          <h6 className="recomendados-name">{props.data.name}</h6>
          <h6 className=" recomendados-speciality">{props.data.speciality}</h6>
          <button type="button" className="recomendados-btn">Seguir</button>
        </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="recomendados-card">
        <img className="rounded-circle"
          src={props.data.avatarUrl}
          alt={props.data.name}
        />
        <div className="recomendados-card-body">
          <h6 className="recomendados-name">{props.data.name}</h6>
          <h6 className=" recomendados-speciality">{props.data.speciality}</h6>
          <button type="button" className="recomendados-btn">Seguir</button>
        </div>
      </div>
  );
}

function HeaderArticle(props) {
  return(
    <div className="articulos-header">
      <div className="articulos-media">
        <img className="mr-0 rounded-circle"
              src={props.data.avatarUrl}
              alt={props.data.name}
            />
        <div className="articulos-media-body">
          <h6 className="articulos-name">{props.data.name}</h6>
          <h6 className=" articulos-speciality">{props.data.speciality}</h6>
        </div>
      </div>
      <span className="articulos-time-ago" >{props.timeAgo} ago</span>
    </div>
  );
};

function Article(props) {
  return(
    <div className="articulos-article">
      <HeaderArticle
        data={props.data}
        timeAgo={props.timeAgo}
        />

      <p className="articulos-cuerpo" >{props.text}</p>

      <FooterArticle
        numberSignatures={props.numberSignatures}
        numberComments={props.numberComments}
        />
    </div>
  );
};



function FooterArticle(props) {
  return(
    <div className="articulos-footer" >
      <span className="articulos-interaccions"><a href="#">{props.numberSignatures} firmas</a> - <a href="#">{props.numberComments} comentarios</a></span>
      <div className="articulos-signature" >
        <a href="#" class="articulos-signature-text" >Dejar firma</a>
        <a href="#" class="articulos-signature-icon"><i className="fas fa-share-alt"></i></a>
      </div>
    </div>
  );
};

function All(props) {
  return(
    <div className="all" >

    
      <CardFollow
        data={props.data}
      />,
            
      <Article
        data={props.data}
        timeAgo={props.timeAgo}
        text={props.text}
        numberSignatures={props.numberSignatures}
        numberComments={props.numberComments}
      />,
      
    </div>
  );
};

const user = {
  data: {
    name: "Julio Toloza",
    speciality: "editor",
    avatarUrl: "img/place-holder.jpg",
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}

const article = {
  datePublished: new Date(),
  timeAgo: "22 minutes" ,
  text: "En un ambiente integrado, optimizado y de alta capacidad tecnológica, los abogados y profesionales del Derecho acceden a soluciones legales integrales en un único software de gestión con las más importantes herramientas de trabajo de un abogado. Contenido editorial relevante, actualizaciones de notificaciones y a la posibilidad de gestionar toda la rutina profesional del estudio jurídico o del área legal de una organización con mayor visibilidad y de manera segura, confiable y estratégica.En un ambiente integrado, optimizado y de alta capacidad tecnológica, los abogados y profesionales del Derecho acceden a soluciones legales integrales en un único software de gestión con las más importantes herramientas de trabajo de un abogado.",
  numberSignatures: "7",
  numberComments: "4",
};

ReactDOM.render(
  
  <All
    data={user.data}
    timeAgo={article.timeAgo}
    text={article.text}
    numberSignatures={article.numberSignatures}
    numberComments={article.numberComments}
  />,
  document.getElementById('root')
);





/*

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={ () => this.props.onClick(i)}
        />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber +1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step %2) === 0,
    });
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start' ;

      return (
        <li key={move}>
          <button onClick={()=> this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner ;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,8],
    [2,4,6],
  ];
  for(let i=0; i < lines.length; i++) {
    const[a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

*/