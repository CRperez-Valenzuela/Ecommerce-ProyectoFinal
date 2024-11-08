import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import styles from "./Footer.module.css";
import "primeicons/primeicons.css";

const Footer = () => {
  const logos = [
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724299013/styled_components-removebg-preview_asno7o.png",
      alt: "Styled Components",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724297428/socket-io_hjyxhr.png",
      alt: "Socket.io",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724299014/sequelize-removebg-preview_1_bw5ya0.png",
      alt: "Sequelize",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724299015/sendgrid-removebg-preview_kljqh0.png",
      alt: "SendGrid",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724299016/redux-removebg-preview_xyqwpn.png",
      alt: "Redux",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724299018/react-removebg-preview_x1brsu.png",
      alt: "React",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724297898/primereact_diot5y.png",
      alt: "PrimeReact",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724299019/docker-removebg-preview_jrp9ss.png",
      alt: "Docker",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724298784/cloudinary-removebg-preview_vlynpt.png",
      alt: "Cloudinary",
    },
    {
      url: "https://res.cloudinary.com/dbkg9dzwt/image/upload/v1724297424/axios_rwradg.png",
      alt: "Axios",
    },
  ];

  return (
    <div className={styles.footer}>
      <Card className={styles.card}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h5>Sobre la Aplicación</h5>
            <div className={styles.columnDivider}></div>
            <p>
              Esta aplicación está diseñada para ofrecer una experiencia de
              compra de zapatillas en línea intuitiva y eficiente. Utilizamos
              las últimas tecnologías para asegurar un rendimiento óptimo y una
              experiencia de usuario excepcional.
            </p>
          </div>

          <div>
            <h5 className={styles.techUsed}>Tecnologías Usadas</h5>
            <div className={styles.logosContainer}>
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.url}
                  alt={logo.alt}
                  className={styles.logo}
                />
              ))}
            </div>
          </div>

          <div className={`${styles.column} ${styles.linkedInColumn}`}>
            <h5>Conéctanos en LinkedIn</h5>
            <div className={styles.columnDivider}></div>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/daniel-ignacio-alvarez-767b9127a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <i className="pi pi-linkedin iconSpacing"></i>
                  Alvarez Daniel
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ciro-ricardo-p%C3%A9rez-valenzuela-9776b81a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <i className="pi pi-linkedin iconSpacing"></i>
                  Perez Ciro
                </a>
              </li>
              <li>
                <a
                  href="linkedin.com/in/gustavoquinteros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <i className="pi pi-linkedin iconSpacing"></i>
                  Quintero Gustavo
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/santiagovillagra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <i className="pi pi-linkedin iconSpacing"></i>
                  Villagra Santiago
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.textCenter}>
          <p>&copy; 2024 Shopsport. Derechos reservados.</p>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
