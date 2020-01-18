import React from "react";
import "./index.css";

import Square from "./Square";

type BoardProp = {
	squares: Array<string>;
	onClick: (ev: React.MouseEvent<HTMLButtonElement>, i: number) => void;
};

type BoardState = {
	xIsNext: boolean;
};

class Board extends React.Component<BoardProp, BoardState> {
	renderSquare(i: number) {
		return (
			<Square
				value={this.props.squares[i]}
				onClick={e => this.props.onClick(e, i)}
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

export default Board;
