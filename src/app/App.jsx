import { Routes, Route } from 'react-router-dom'
import '../assets/css/index.css'

import NotFoundPage from './routes/notFound/NotFoundPage'
import EmployeeForm from './routes/employeeForm/EmployeeForm'
import EnterpriseForm from './routes/enterpriseForm/EnterpriseForm'


export default function Page() {
	const pagesDirectory = {
		notFound: <NotFoundPage />,
		employeeForm: <EmployeeForm />,
		enterpriseForm: <EnterpriseForm />,
	}

	return (
		<div className="body">
			<Routes>
				<Route
					path="*"
					element={pagesDirectory.notFound}
				/>{/*  UI response for not valid path segment  */}
				<Route
					path="/registrar-empresa"
					element={pagesDirectory.enterpriseForm}
				/>
				<Route
					path="/registrar-empleado"
					element={pagesDirectory.employeeForm}
				/>
			</Routes>
		</div>
	)
}
