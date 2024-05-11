import React, { useState, useEffect } from 'react';

function DateTime() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(timer); // Очистка ресурсов
	}, []);

	return (
		  <div className="date-time">
			  {time.toLocaleTimeString()} - {time.toLocaleDateString()}
		  </div>
	);
}

export default DateTime;
