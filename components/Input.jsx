import React from 'react';

const Input = ({ type, label, name, placeholder, errorMsg, error }) => {
	return (
		<div>
			<label
				htmlFor={name}
				className={`block text-xs md:text-sm tracking-[3.5px] uppercase font-bold text-grey mb-2 ${
					error ? 'text-red' : 'text-grey'
				}`}
			>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				className={`border border-line rounded-lg px-3 py-4 md:px-8 h-[54px] md:h-[72px] max-w-[88px] md:max-w-[160px] gap-4 md:gap-8 text-darkGrey text-[20px] md:text-[32px] font-bold hover:border-purple focus:border-purple focus:outline-none ${
					error ? 'border-red' : 'border-line'
				}`}
			/>
			{error && (
				<p className="text-red text-sm italic mt-1">{errorMsg}</p>
			)}
		</div>
	);
};

export default Input;
