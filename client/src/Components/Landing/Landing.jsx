import { useNavigate } from "react-router-dom";
import puma from "../../Assets/ShoeLanding_Mesa de trabajo 1 copia.jpg";
import track from "../../Assets/land2.jpg";
import adidas from "../../Assets/land3.jpg";
import LogoNav from "../../Assets/LogoNav.png";
import style from "../Landing/Landing.module.css";
import { Galleria } from 'primereact/galleria';
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import Footer from "../Footer/Footer";


import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons


// Definir las imágenes para la galería
const images = [
    {
        itemImageSrc: puma,
        alt: 'puma',
        title: 'puma'
    },
    {
        itemImageSrc: track,
        alt: 'track',
        title: 'track'
    },
    {
        itemImageSrc: adidas,
        alt: 'adidas',
        title: 'adidas'
    },
];

const itemTemplate = (item) => {
    return (
        <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: 'auto'}} />
    );
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <header className={style.header}>
        <img src={LogoNav} alt="logo" className={style.logo} />
      </header>
      <div className={style.centeredDiv}>
        <h1 className={style.h1}>
          Bienvenido a TU tienda de calzado deportivo{" "}
        </h1>

        <div className={style.centradoButton}>
          <button onClick={() => navigate("/home")} className={style.button}>
            Comenzar
          </button>
        </div>
      </div>

      <div className={style.galleriaContainer}>
        <Galleria
          value={images}
          numVisible={5}
          circular
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators={false}
          showThumbnails={false} // No mostrar miniaturas
          item={itemTemplate} // Usa la plantilla para los elementos
          transitionInterval={3000} // Duración de cada transición en milisegundos (3 segundos en este caso)
          autoPlay // Activa el autoplay
        />
      </div>
      <BrandCarousel></BrandCarousel>
      <div>
  <Footer/>
</div>
    </div>
    
  );
}