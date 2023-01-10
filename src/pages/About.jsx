// import { FlapDisplay, Presets } from 'react-split-flap-effect'
import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import React, { useState, useEffect } from 'react';
export function About({ initialValue, value }) {
	const [currentValue, setCurrentValue] = useState(initialValue);
	const [previousValue, setPreviousValue] = useState(initialValue);
	const [animating, setAnimating] = useState(false);

	useEffect(() => {
		if (value !== currentValue)
		{
			setPreviousValue(currentValue);
			setCurrentValue(value);
			setAnimating(true);
		}
	}, [value, currentValue]);

	function handleAnimationEnd() {
		setAnimating(false);
	}

	const flapClasses = ['split-flap-flap'];
	if (animating)
	{
		flapClasses.push('split-flap-flap-animating');
	}

	return (
		<div className="split-flap-display">
			<div className={flapClasses.join(' ')} onAnimationEnd={handleAnimationEnd}>
				<span className="split-flap-previous-value">4hjgjh</span>
				<span className="split-flap-current-value">dfdddddd</span>
			</div>
		</div>
	);
}