import iconCafe from '../assets/img/icono_cafe.svg';
import iconPostre from '../assets/img/icono_postre.svg';
import iconTe from '../assets/img/icono_te.svg';


const AboutMe = () => {
    return (
        <main className="container content-main text-center">
            <h2>
                <span>Conoce Más</span>
                Sobre Nosotros
            </h2>
            <p>
                Somos una cafetería que se dedica a la producción y venta de café de la mejor calidad.
                Nuestro café es cultivado en las mejores tierras de la región, lo que garantiza un sabor
                único y especial. Además, contamos con un equipo de baristas expertos que se encargan de
                preparar el café de la mejor manera, para que puedas disfrutar de una deliciosa taza en
                cualquier momento del día. Ven a visitarnos y descubre por qué somos la mejor opción para
                los amantes del café.
            </p>

            <section className="icons">
                <ul className="icons-list">
                    <li>
                        <img src={iconCafe} alt="icon-1" />
                        <p>Café</p>
                    </li>
                    <li>
                        <img src={iconPostre} alt="icon-2" />
                        <p>Postre</p>
                    </li>
                    <li>
                        <img src={iconTe} alt="icon-3" />
                        <p>Té</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default AboutMe