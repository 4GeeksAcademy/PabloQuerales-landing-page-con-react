import React from "react";
import Card from "./card";

const GridCards = () => {
	return (
		<div className="container text-center ">
			<div className="row ">
				<div className="col d-flex mb-5 justify-content-center">
					<Card />
				</div>
				<div className="col d-flex mb-5 justify-content-center">
					<Card />
				</div>
				<div className="col d-flex mb-5 justify-content-center">
					<Card />
				</div>
				<div className="col d-flex mb-5 justify-content-center">
					<Card />
				</div>
			</div>
		</div>
	);
};
export default GridCards;
