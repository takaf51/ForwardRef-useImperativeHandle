import React from 'react'
import {inputClass, buttonClass} from './css/style.js'

const Button = (props, ref) => {
	return (
		<div className='ml-5'>
			<input  ref={ref} className={inputClass}/>
			<button onClick={props.onClick} className={buttonClass}>
				{props.children}
			</button>
		</div>
	);
}

export default React.forwardRef(Button);