// import { useState } from 'react'
import { authy } from '../../../../lib/utils/cloudFunctions'
import ClaimsFormUI from '../ui/ClaimsFormUI'

export default function AddAdminForm() {
	// const [userEmail, setUserEmail] = useState("")
	// const [userName, setUserName] = useState("")
	// const [pass, setPass] = useState(null)

	const signInController = async () => {
        try {
            await signInService(userEmail, pass)

        } catch(err) {
            console.log('error in 3rd layer of auth services', err)
        }
    }

	return (
		<>
			<ClaimsFormUI 
				onClickCallback={() => signInController()}
			/>
		</>
	)
}