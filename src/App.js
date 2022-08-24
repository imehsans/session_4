import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer_app'
import Header from './components/Header_app'
import Message from './Message'

function App() {
	const [count, setCount] = useState(0)
	const [status, setStatus] = useState(true)

	const updateStatus = () => {
		count % 2 ? setStatus(false) : setStatus(true)
		document.getElementById('ValueEO').innerHTML = status ? 'EVEN' : 'ODD'
		isPrime()
		return 0
	}

	const isPrime = () => {
		let isPrime = true
		if (count === 1) {
			document.getElementById('ValuePrime').innerHTML =
				'1 is neither prime nor composite number.'
		} else if (count > 1) {
			for (let i = 2; i < count; i++) {
				if (count % i == 0) {
					isPrime = false
					break
				}
			}

			if (isPrime) {
				document.getElementById(
					'ValuePrime'
				).innerHTML = `${count} is a prime number`
			} else {
				document.getElementById(
					'ValuePrime'
				).innerHTML = `${count} is a not prime number`
			}
		} else {
			console.log('The number is not a prime number.')
			document.getElementById('ValuePrime').innerHTML =
				'The number is not a prime number.'
		}
	}

	const increaseCount = () => {
		var counter = setCount(count + 1)
		updateStatus()
		return counter
	}

	const decreaseCount = () => {
		return count > 0 ? setCount(count - 1) : ''
	}

	const resetCount = () => {
		return setCount(0)
	}

	return (
		<div>
			<Header />
			<h1>
				Value is <span id="ValueEO"></span>
			</h1>
			<h1>
				Number is <span id="ValuePrime"></span>
			</h1>
			<div className="w-[200px] mx-auto">
				<Message count={count} />
				<div className="w-[200px] mx-auto">
					<div className="flex w-full justify-between">
						<div className="w-5/12 my-4 bg-blue">
							<button
								className="w-full py-2 scale-95 hover:scale-100 bg-red-900 text-yellow-100 text-2xl font-extrabold
							"
								onClick={() => increaseCount()}
							>
								+
							</button>
						</div>
						<div className="w-5/12 my-4 bg-blue">
							<button
								className="w-full py-2 scale-95 hover:scale-100  bg-lime-800 text-yellow-100 text-2xl font-extrabold
							"
								onClick={() => decreaseCount()}
							>
								-
							</button>
						</div>
					</div>
					<div className="w-full my-4 bg-blue">
						<button
							className="px-8 w-full mx-auto py-2  scale-95 hover:scale-100 bg-amber-600 text-violet-500 text-2xl font-extrabold
							"
							onClick={() => resetCount()}
						>
							Reset
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default App
