import React, {useRef} from 'react'
import Button from './Button'
import ButtonLocal from './ButtonLocalFunc'
import {inputClass, buttonClass} from './css/style.js'

export const App = () => {
	const buttonRef = useRef();
	const myButtonRef = useRef();
	const localFuncRef = useRef();

	const buttonClickHandler = () => {
		buttonRef.current.focus();
	}

// Obtain component's reference and execute own function
	const myButtonClickHandler = () => {
		myButtonRef.current.focus();
	};

// Obtain conponent's reference and execute conponent's function
	const buttonLocalFuncHandler = () => {
		localFuncRef.current.changeButtonColor('bg-pink-300');
		localFuncRef.current.focusToMe();
	}

	return (
		<div className='m-2'>
			<div className='ml-5'>
				<input  ref={buttonRef} className={inputClass}/>
				<button onClick={buttonClickHandler} className={buttonClass}>html element</button>
			</div>
			<Button onClick={myButtonClickHandler} ref={myButtonRef}>React component</Button>
			<ButtonLocal onClick={buttonLocalFuncHandler} ref={localFuncRef}>Call Ref Func</ButtonLocal>
		</div>
	);
}
