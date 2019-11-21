import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     handleClick() {
//         if (this.props.onClicked) {
//             this.props.onClicked()
//         }
//     }
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={this.handleClick.bind(this)}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClicked}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                onClicked={() => this.props.onClick(i)}
                value={this.props.sauqres[i]} />
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
    constructor() {
        super();
        this.state = {
            xIsNext: true,
            status: '',
            stepNum: 0,
            history: [{ sauqres: Array(9).fill('') }],
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNum + 1);
        const current = history[history.length - 1];
        if (current.sauqres[i] || calculateWinner(current.sauqres)) return; //当有玩家胜出时，或者某个 Square 已经被填充时
        var sauqres = current.sauqres.slice(); //创建副本
        sauqres[i] = this.state.xIsNext ? 'x' : 'o';
        this.setState({
            stepNum: history.length,
            history: history.concat({ sauqres }),
            xIsNext: !this.state.xIsNext
        })
    }
    jumpTo(i) {
        var bool = i % 2 === 0 ? true : false;
        this.setState({ xIsNext: bool, stepNum: i });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        var winner = calculateWinner(current.sauqres);

        const moves = this.state.history.map((step, index) => {
            const desc = index ? ('Go to move #' + index) : 'restart game';
            const desc2 = '';
            return (<li key={index}>
                <button onClick={() => this.jumpTo(index)}>{desc}</button>
            </li>)
        })

        let status;
        if (winner) {
            status = 'winner is ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        onClick={this.handleClick.bind(this)}
                        sauqres={current.sauqres}
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
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}