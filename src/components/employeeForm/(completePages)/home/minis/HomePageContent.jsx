import { Link } from 'react-router-dom'
import '../styles/HomePageUI.css'

export default function HomePageContent() {
    const domain = window.location.origin
    return (
        <div className="Home__contentContainer">
            <div className="Home__content">
                <div className="Home__contentItemOne">
                    <div className="Home__UI__blur">
                        <div className="Home__UI__blurc">
                            <div>
                                <h1>Registrar empresa</h1>
                            </div>
                            <div>
                                <a href={`${domain}/registrar-empresa`} className="Home__btn">ir</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Home__contentItemTwo">
                    <div className="Home__UI__blur">
                        <div className="Home__UI__blurc">
                            <div>
                                <h1>Registrar encuesta de salud</h1>
                            </div>
                            <div>
                                <a href={`${domain}/registrar-empleado`} className="Home__btn">ir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}