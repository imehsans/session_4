import React from 'react'

const Message = (props) => {
	return (
		<div>
			<h3 className="text-center border-2 border-red-900 text-5xl px-5 py-3">
				{props.count}
			</h3>
		</div>
	)
}

export default Message
