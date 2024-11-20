import './mainHeader.css'

export default function MainHeader() {
	return (
		<div className='MainHeader__navCtn'>
			<div className='MainHeader__navBody'>

				<span>
					<a href="/" className='MainHeader__a'>
						inicio
					</a>
				</span>
				{/*    navigation links   */}
				<span>
					<a href="/encuestas" className='MainHeader__a'>
						encuestas
					</a>
				</span>
				<span>
					<a href="/crear-encuestas" className='MainHeader__a'>
						iniciar encuesta
					</a>
				</span>
				<span>
					<a href="/signUp" className='MainHeader__a'>
						crear cuenta
					</a>
				</span>
				<span>
					<a href="/signIn" className='MainHeader__a'>
						iniciar sesión
					</a>
				</span>


			</div>
		</div>
	)
}
