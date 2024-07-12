'use client';

import Input from '@/components/Input';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [age, setAge] = useState({
		years: '- -',
		months: '- -',
		days: '- -',
	});
	const [errors, setErrors] = useState({
		day: false,
		month: false,
		year: false,
	});

	const validateInputs = (day, month, year) => {
		const today = new Date();
		const birthDate = new Date(year, month - 1, day);

		let valid = true;
		const newErrors = { day: false, month: false, year: false };

		if (!day || day < 1 || day > 31) {
			newErrors.day = true;
			valid = false;
		}
		if (!month || month < 1 || month > 12) {
			newErrors.month = true;
			valid = false;
		}
		if (!year || year > today.getFullYear()) {
			newErrors.year = true;
			valid = false;
		}
		if (birthDate > today) {
			newErrors.year = true;
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const calculateAge = () => {
		const day = document.getElementById('day').value;
		const month = document.getElementById('month').value;
		const year = document.getElementById('year').value;

		const today = new Date();
		const birthDate = new Date(year, month - 1, day);

		if (!validateInputs(day, month, year)) {
			return;
		}

		let ageYears = today.getFullYear() - birthDate.getFullYear();
		let ageMonths = today.getMonth() - birthDate.getMonth();
		let ageDays = today.getDay() - birthDate.getDay();

		if (ageDays < 0) {
			ageMonths--;
			const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
			ageDays =
				tempDate.getDate() - birthDate.getDate() + today.getDate();
		}

		if (ageMonths < 0) {
			ageYears--;
			ageMonths += 12;
		}

		if (ageYears < 0) {
			ageYears = 0;
		}

		console.log(today);
		setAge({ years: ageYears, months: ageMonths, days: ageDays });
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-4 py-[88px] md:p-24">
			<div className="bg-white max-h-[650px] max-w-[840px] h-full w-full px-6 py-12 md:p-14 rounded-3xl rounded-br-[100px] md:rounded-br-[200px]">
				<div className="flex gap-4">
					<Input
						name="day"
						type="text"
						label="Day"
						placeholder="DD"
						errorMsg="Must be a valid day"
						error={errors.day}
					/>
					<Input
						name="month"
						type="text"
						label="Month"
						placeholder="MM"
						errorMsg="Must be a valid month"
						error={errors.month}
					/>
					<Input
						name="year"
						type="text"
						label="Year"
						placeholder="YYYY"
						errorMsg="Must be in the past"
						error={errors.year}
					/>
				</div>
				<div className="flex items-center py-8 md:py-0">
					<hr className="w-full border-line" />
					<button
						className="bg-purple rounded-full p-[20px] md:px-[24px] md:p-y-[22px] hover:bg-darkGrey"
						onClick={calculateAge}
						type="button"
					>
						<Image
							src="arrowDown.svg"
							alt=""
							width={24}
							height={24}
							className="md:w-[44px] md:h-[44px]"
						/>
					</button>
				</div>
				<div className="font-extrabold italic text-[52px] md:text-[104px] leading-none">
					<p>
						<span className="text-purple">{age.years}</span> years
					</p>
					<p>
						<span className="text-purple">{age.months}</span> months
					</p>
					<p>
						<span className="text-purple">{age.days}</span> days
					</p>
				</div>
			</div>
		</main>
	);
}
