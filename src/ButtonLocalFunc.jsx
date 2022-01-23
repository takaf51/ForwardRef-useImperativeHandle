import React, {useState, useRef, useImperativeHandle} from 'react'
import {inputClass, buttonClass} from './css/style.js'

const Button = (props, ref) => {
	const [color, setColor] = useState('')
	const localRef = useRef();

	useImperativeHandle(ref, () => ({
		changeButtonColor: (color) => setColor(color),
		focusToMe: () => localRef.current.focus(),
	}));


	return (
		<div className='ml-5'>
			<input  ref={localRef} className={inputClass}/>
			<button onClick={props.onClick} className={`${buttonClass} ${color}`}>{props.children}</button>
		</div>
	);
}

export default React.forwardRef(Button);