import React, {useEffect, useState} from "react";
import { TextField, Button, Box } from "@mui/material"
import axios from "axios";

function Inicio(props){
    const  [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: '',
        password: ''
    })

    return (
        <>
          <nav>
  <div className="nav__logo">WDM&Co</div>
  <ul className="nav__enlaces">
    <li className="enlace"><a href="#">Inicio</a></li>
    <li className="enlace"><a href="#">Reservar</a></li>
    <li className="enlace"><a href="#">Blog</a></li>
    <li className="enlace"><a href="#">Contáctanos</a></li>
  </ul>
</nav>
<header className="seccion__contenedor encabezado__contenedor">
  <div className="contenedor__imagen__encabezado">
    <div className="contenido__encabezado">
      <h1>Disfruta de tus Vacaciones Soñadas</h1>
      <p>Reserva Hoteles, Vuelos y paquetes de estadía al precio más bajo.</p>
    </div>
    <div className="contenedor__reserva">
      <form>
        <div className="grupo__formulario">
          <div className="grupo__entrada">
            <input type="text" />
            <label>Ubicación</label>
          </div>
          <p>¿A dónde vas?</p>
        </div>
        <div className="grupo__formulario">
          <div className="grupo__entrada">
            <input type="text" />
            <label>Check Out</label>
          </div>
          <p>Agregar fecha</p>
        </div>
        <div className="grupo__formulario">
          <div className="grupo__entrada">
            <input type="text" />
            <label>Huéspedes</label>
          </div>
          <p>Agregar huéspedes</p>
        </div>
      </form>
      <button className="btn"><i className="ri-search-line"></i></button>
    </div>
  </div>
</header>
<section className="seccion__contenedor contenedor__populares">
  <h2 className="encabezado__seccion">Hoteles Populares</h2>
  <div className="grid__populares">

    {/* Estructura para hoteles */}
    <div className="tarjeta__popular">
      <img src="assets/hotel-1.jpg" alt="hotel popular" />
      <div className="contenido__popular">
        <div className="encabezado__tarjeta__popular">
          <h4>Hotel Emporio</h4>
          <h4>$748</h4>
        </div>
        <p>CDMX, México</p>
      </div>
    </div>
    {/* Estructura para hoteles */}

    <div className="tarjeta__popular">
      <img src="assets/hotel-2.jpg" alt="hotel popular" />
      <div className="contenido__popular">
        <div className="encabezado__tarjeta__popular">
          <h4>Holiday Inn Express</h4>
          <h4>$1600</h4>
        </div>
        <p>Veracruz, México</p>
      </div>
    </div>

    
  </div>
</section>
<section className="seccion__clientes">
  <div className="seccion__contenedor contenedor__clientes">
    <h2 className="encabezado__seccion">Lo que dicen nuestros clientes</h2>
    <div className="grid__clientes">
      <div className="tarjeta__cliente">
        <img src="assets/client-1.jpg" alt="cliente" />
        <p>El proceso de reserva fue impecable, y la confirmación fue instantánea. Recomiendo ampliamente WDM&Co para reservas de hoteles sin complicaciones.</p>
      </div>
      {/* Repite la estructura para otros testimonios */}
    </div>
  </div>
</section>
<section className="seccion__contenedor">
  <div className="contenedor__recompensa">
    <p>100+ códigos de descuento</p>
    <h4>Únete a nuestro programa de recompensas y descubre increíbles descuentos en tus reservas</h4>
    <button className="btn__recompensa">Únete a las recompensas</button>
  </div>
</section>
<footer className="pie__pagina">
  <div className="seccion__contenedor contenedor__pie__pagina">
    <div className="columna__pie">
      <h3>WDM&Co</h3>
      <p>
        WDM&Co es un sitio web líder en reservas de hoteles que ofrece una forma sencilla y conveniente de encontrar y reservar alojamientos en todo el mundo.
      </p>
      <p>
        Con una interfaz fácil de usar y una amplia selección de hoteles, WDM&Co busca proporcionar una experiencia sin estrés para los viajeros que buscan la estadía perfecta.
      </p>
    </div>
    {/* Repite la estructura para otras columnas del pie de página */}
  </div>
  <div className="barra__pie">
    Derechos de autor © 2023 Web Design Mastery. Todos los derechos reservados.
  </div>
</footer>
        </>
      )
}

export default Inicio