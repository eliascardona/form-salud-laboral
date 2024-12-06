const cf1 = process.env.NEXT_PUBLIC_CF_A_ONE
const cf2 = process.env.NEXT_PUBLIC_CF_A_TWO
import { auth } from "@/lib/sdk/firebase"
import { getIdToken } from "firebase/auth"

async function authyCallback(token="", arr=[""]) {
	if(arr.length == 0) {
		console.log("you must include a non-empty array")
	}

	const opts = {
		method: 'POST',
		headers: {
		Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: "json"
	}
	const options = {
		...opts,
		body: JSON.stringify(arr)
	}
	try {
		const r = await fetch(cf1, options)
		const j = await r.json()
		console.log(j)
	} catch (e) {
		console.log(ie)
	}
}


async function adminsCallback(token="") {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	}
	try {
		const r = await fetch(cf2, options)
		const j = await r.json()
		console.log(j)
	} catch (e) {
		console.log(ie)
	}
}


const authy = async (coursesArray=[""]) => {
	if (coursesArray.length > 0) {
		getIdToken(auth.currentUser, true)
		.then(async (userToken) => {
			await authyCallback(userToken, coursesArray)
			/* await adminsCallback(userToken) */
		})
	} else {
		console.log("pasaste como argumento un arreglo vacio")
	}
}


export { authy }