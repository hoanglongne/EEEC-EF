function NumberCount(section, num, interval) {
	let section_counter = document.querySelector(section);
	let CounterObserver = new IntersectionObserver(
	(entries, observer) => {
		let [entry] = entries;
		if (!entry.isIntersecting) return;
		let valueDisplays = document.querySelectorAll(num);
		valueDisplays.forEach((valueDisplay) => {
			let startValue = 0;
			let endValue = parseInt(valueDisplay.getAttribute("data-val"));
			let duration = Math.floor(interval / endValue);
			let counter = setInterval(function () {
				startValue += 1;
				valueDisplay.textContent = startValue;
				if (startValue == endValue) {
					clearInterval(counter);
			}
	}, duration);
	});
		},
	{
		root: null,
	}
	);
	CounterObserver.observe(section_counter);	
}

NumberCount('#section_counter','.num', 1000)
NumberCount('#section_counter2','.num2', 3000)
NumberCount('#section_counter3','.num3', 5000)