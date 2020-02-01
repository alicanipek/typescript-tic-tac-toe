import React from "react";
import "./index.css";

import Square from "./Square";

type BoardProp = {
	squares: Array<string>;
	winning: Array<Number>;
	onClick: (ev: React.MouseEvent<HTMLButtonElement>, i: number) => void;
};

type BoardState = {
	xIsNext: boolean;
};

class Board extends React.Component<BoardProp, BoardState> {
	renderSquare(i: number) {
		return (
			<Square
				key={i}
				isWinning={this.props.winning.includes(i)}
				value={this.props.squares[i]}
				onClick={e => this.props.onClick(e, i)}
			/>
		);
	}
	createBoard() {
		let board = [];
		let squareCount = 0;
		for (let row = 0; row < 3; row++) {
			let cols = [];
			for (let col = 0; col < 3; col++) {
				cols.push(this.renderSquare(squareCount));
				squareCount++;
			}
			board.push(
				<div className="board-row" key={row}>
					{cols}
				</div>
			);
		}
		return board;
	}

	render() {
		return <div>{this.createBoard()}</div>;
	}
}

export default Board;
