import {Link} from 'react-router-dom'

function navbar() {
    return(
        <>
            <div className='titleNav'>
                <h1>VetGuardian</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="home">Inicio</Link>
                        <Link to="adopcion">Adoptar</Link>
                        <Link to="vacunas">Vacunacion</Link>
                        <Link to="reportes">Reportar</Link>
                        <Link to="seguimiento">Seguimiento</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}