import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
import CardTypeDisplay from "./CardTypeDisplay";
import { getCardTypeByValue } from "./utils/cardTypes";
// import InputMask from "react-input-mask";
import "./App.css";

const CreditCard = () => {
	const [number, SetNumber] = useState("");
	const [name, SetName] = useState("");
	const [month, SetMonth] = useState("");
	let [expiry, SetExpiry] = useState("");
	const [cvc, SetCvc] = useState("");
	const [focus, SetFocus] = useState("");

	const card = getCardTypeByValue("cardNumber");

	const handleDate = (e) => {
		SetMonth(e.target.value);
		SetExpiry(e.target.value);
	};
	const handleExpiry = (e) => {
		SetExpiry(month.concat(e.target.value));
	};

	return (
		<>
			{/* <div className="rccs__card backcolor"> */}

			{/* <div className="rccs__card rccs__card--unknown">
				<br />
				<Cards
					number={number}
					name={name}
					expiry={expiry}
					cvc={cvc}
					focused={focus}
				/>
			</div> */}

			<form className="card text-center mt-5 shadow p-3 mb-5 bg-body rounded">
				<h5 className="text-center mt-2">
					Deposita mendiante tarjeta de crédito
				</h5>
				<p className="text-center text-primary">
					Este depósito se verá reflejado de inmediato
				</p>
				<div className="row">
					<div className="col-sm-11">
						{/* <label for="name">Número de tarjeta</label> */}
						<CardTypeDisplay
							cards={["visa", "mastercard", "amex", "diners"]}
							selected={card && card.type}
						/>
						<input
							type="number"
							className="form-control"
							placeholder="Número de tarjeta"
							value={number}
							name="number"
							maxLength="16"
							pattern="[0-9]+"
							onChange={(e) => {
								SetNumber(e.target.value);
							}}
							onFocus={(e) => SetFocus(e.target.name)}
						/>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-sm-11">
						{/* <label for="name">Nombre del titular</label> */}
						<input
							type="text"
							className="form-control"
							placeholder="Nombre del titular"
							value={name}
							name="name"
							onChange={(e) => {
								SetName(e.target.value);
							}}
							onFocus={(e) => SetFocus(e.target.name)}
						></input>
					</div>
				</div>
				<br />
				<div className="row">
					<div
						className="col=sm-8"
						style={{
							...{ paddingRight: "12em" },
							...{ paddingLeft: "1em" },
						}}
					>
						{/* <label htmlFor="month">Fecha expiración</label> */}
					</div>
					{/* <div className="col=sm-4">
						<label for="cvv">CVV</label>
					</div> */}
				</div>

				<div className="row">
					<div className="col-sm-4 fs-6 mt-2">
						<select
							className="form-control"
							name="expiry"
							onChange={handleDate}
						>
							<option value=" ">MM</option>
							<option value="01">01</option>
							<option value="02">02</option>
							<option value="03">03</option>
							<option value="04">04</option>
							<option value="05">05</option>
							<option value="06">06</option>
							<option value="07">07</option>
							<option value="08">08</option>
							<option value="09">09</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
					</div>
					&nbsp;
					<div className="col-sm-3 mt-2">
						<select
							className="form-control fs-6"
							name="expiry"
							onChange={handleExpiry}
						>
							<option value=" ">YY</option>
							<option value="21">22</option>
							<option value="22">23</option>
							<option value="23">24</option>
							<option value="24">25</option>
							<option value="25">26</option>
							<option value="26">27</option>
							<option value="27">28</option>
							<option value="28">29</option>
							<option value="29">30</option>
							<option value="30">31</option>
						</select>
					</div>
					<div className="col-sm-4 fs-6 mt-2">
						<input
							type="number"
							name="cvc"
							maxLength="3"
							className=" form-control card"
							placeholder="CVV"
							value={cvc}
							pattern="\d*"
							onChange={(e) => {
								SetCvc(e.target.value);
							}}
							onFocus={(e) => SetFocus(e.target.name)}
						></input>
					</div>
				</div>
				<br />
				{/* <input
					type="submit"
					className="btn btn-success form-control"
					value="Pagar"
				/> */}
				<button
					type="submit"
					className="btn btn-success"
					// value="Pagar"
				>
					Pagar
				</button>
			</form>
		</>
	);
};

export default CreditCard;
