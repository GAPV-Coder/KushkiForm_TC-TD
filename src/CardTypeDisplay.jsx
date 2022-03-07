import React from "react";
import amexImg from "./images/amex";
import dinersImg from "./images/diners";
import mastercardImg from "./images/mastercard";
import visaImg from "./images/visa";
import "bootstrap/dist/css/bootstrap.min.css";

const cardsImages = {
	amex: amexImg,
	diners: dinersImg,
	mastercard: mastercardImg,
	visa: visaImg,
};

const CardTypeDisplay = ({ cards, selected }) => {
	return (
		<>
			<div className="d-inline-flex p-1 position-absolute top-2 start-2">
				{cards.map((card) => (
					<div
						className={`ml-1 mr-1${
							selected && card !== selected ? "opacity-25" : ""
						}`}
						key={card}
					>
						{cardsImages[card]}
					</div>
				))}
			</div>
		</>
	);
};

export default CardTypeDisplay;
