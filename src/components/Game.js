import React from 'react';

import Board from "./Board";

import calculateWinner from "../helpers/board"

class Game extends React.Component {
    constructor(){
        super()
    
        this.state={
          history:[{
            squares:Array(9).fill(null),
          }],
          stepNumber:0,          
          xIsNext: true,
        }
    }


    handleClick(i){        
        const history = this.state.history.slice(0, this.state.stepNumber+1)
        const current = history[history.length-1]
        const squares = current.squares.slice()
    
        if(squares[i] || calculateWinner(squares))
          return
    
        squares[i] =this.state.xIsNext?"X":"O"

        this.setState({
          history: history.concat({
              squares:squares,
          }),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        })
      }

      jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2)===0,
        })
      }

    render() {
        const history = this.state.history.slice(0, this.state.stepNumber+1)
        console.log("history",history)
        const current = history[history.length-1]
        const squares = current.squares.slice()

        //status
        let status
        
        const winner = calculateWinner(squares)
    
        if(winner)
            status="Winner: "+winner
        else
            status = 'Next player: ' + (this.state.xIsNext?"X":"O")
        
        //Moves done
        const moves = history.map((step, move) => {
            const description = (move)?"Move #"+move:"Game Start."

            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpTo(move)}>{description}</a>
                </li>
            )
        })
        

      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={squares}
                onClick = {(i) => this.handleClick(i)}
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

export default Game;