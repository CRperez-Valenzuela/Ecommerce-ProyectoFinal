
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css';  // Estilo del tema de PrimeReact
import 'primereact/resources/primereact.min.css';  // Estilo principal de PrimeReact
import 'primeicons/primeicons.css';  // Iconos de PrimeReact
import './BrandCarousel.module.css';  // Tu archivo de estilos personalizado
import nike from "../../Assets/nike.png"
import puma from "../../Assets/puma.png"
import under from "../../Assets/under.png"
import topper from "../../Assets/topper.png"
import adidas from "../../Assets/adidas.png"


const BrandCarousel = () => {
    const images = [
        { itemImageSrc: puma, alt: "puma" },
        { itemImageSrc: nike, alt: "nike" },
        { itemImageSrc:under, alt: "under" },
        { itemImageSrc:topper, alt: "topper" },
        { itemImageSrc:adidas, alt: "adidas" },
        { itemImageSrc: puma, alt: "puma" },
        { itemImageSrc: nike, alt: "nike" },
        { itemImageSrc:under, alt: "under" },
        { itemImageSrc:topper, alt: "topper" },
        { itemImageSrc:adidas, alt: "adidas" },
                            
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3,
            numScroll: 3
        },  
        {
            breakpoint: '560px',
            numVisible: 2,
            numScroll: 2
        }
    ];

    const productTemplate = (item) => {
        return (
            <div className="product-item">
                <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
            </div>
        );
    };

    return (
        <Carousel
            value={images}
            numVisible={5}  // Número de imágenes visibles en pantallas grandes
            numScroll={1}   // Número de imágenes que se desplazan al hacer scroll
            responsiveOptions={responsiveOptions}
            circular={true} // Hace que el carrusel sea circular
            autoplayInterval={3000} // Cambio automático cada 3 segundos
            itemTemplate={productTemplate}
            showIndicators={false} // Desactiva los indicadores
        />
    );
}
export default BrandCarousel;