import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex flex-col sm:flex-row gap-4 my-3">
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer ${
						selectedGender === "male" ? "selected" : ""
					}`}
				>
					<span className="label-text text-white">Male</span>
					<input
						type="checkbox"
						className="checkbox border-slate-100"
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer ${
						selectedGender === "female" ? "selected" : ""
					}`}
				>
					<span className="label-text text-white">Female</span>
					<input
						type="checkbox"
						className="checkbox border-slate-100"
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
