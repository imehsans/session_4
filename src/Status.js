import React from 'react'

const Status = (props) => {
	return (
		<h3 className="text-center border-2 border-red-900 text-5xl px-5 py-3">
			{props.status}
		</h3>
	)
}

export default Status
