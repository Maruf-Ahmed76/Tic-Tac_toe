import React, {Component} from "react"
import Square from "./Square";
import Player from "./Players";

class Board extends Component{
    state = {
        squares : Array(9).fill(null),
        isOne : true,
        playerOne : "",
        playerTwo : ""
    }
    // Set player name
    setPlayer = (playerOne, playerTwo) => {
        this.setState({
            playerOne,
            playerTwo
        })
    }
    // Handle ease square clickk
    handleClick(i){
        const squares = this.state.squares.slice()
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.isOne ? "X" : "O";
        this.setState({
            squares,
            isOne : !this.state.isOne
        })
        
    }
    // Reset the game
    resetGame = () => {
        this.setState({
            squares : Array(9).fill(null),
            isOne : true
        })
    }
    render(){
        // Find winner
        const winner = calculateWinner(this.state.squares);
        let {isOne,playerOne,playerTwo} = this.state;

        let tryAgainBtn = this.state.squares.includes(null) ? 
            false 
        : true;

        // Set status
        let status;
        winner ?
            status = "Winner: " + (winner === "X" ? playerOne : winner==="O" ? playerTwo : winner) 
        :tryAgainBtn? 
            status = `${playerOne} : ${playerTwo}` 
        : status = "Next player: " + (isOne ? playerOne : playerTwo);

        // Try again button
        const tryAgain = winner || tryAgainBtn? 
            <div className="try-again" onClick={this.resetGame}>
                <button>Try again</button>
            </div>
        : null;

        // Home component
        const home = this.state.playerOne.length && this.state.playerTwo.length ? 
        <div className="board">
            <p className="status">{status}</p>
            <div className="board-row">
                <Square value={this.state.squares[0]}  onClick={() => this.handleClick(0)}/>
                <Square value={this.state.squares[1]}  onClick={() => this.handleClick(1)}/>
                <Square value={this.state.squares[2]}  onClick={() => this.handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={this.state.squares[3]}  onClick={() => this.handleClick(3)}/>
                <Square value={this.state.squares[4]}  onClick={() => this.handleClick(4)}/>
                <Square value={this.state.squares[5]}  onClick={() => this.handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={this.state.squares[6]}  onClick={() => this.handleClick(6)}/>
                <Square value={this.state.squares[7]}  onClick={() => this.handleClick(7)}/>
                <Square value={this.state.squares[8]}  onClick={() => this.handleClick(8)}/>
            </div>
            {
                tryAgain
            }
            
        </div> : <Player setPlayer={this.setPlayer}/>;
        // Return home
        return home;
        
    }
    
}

// Find winner function
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

export default Board;