import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from 'primereact/fileupload';
import { createShoe } from "../../../Redux/Actions";
import mockBrands from "../../../mockDB/mockBrands";
import mockGenders from "../../../mockDB/mockGenders";
import mockSports from "../../../mockDB/mockSports";
import styles from "./Create.module.css";
import Swal from 'sweetalert2';

const sizeMapping = {
  '36': 1,
  '37': 2,
  '38': 3,
  '39': 4,
  '40': 5,
  '41': 6,
  '42': 7,
  '43': 8,
  '44': 9,
  '45': 10,
  '46': 11
};

export default function Create() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    gender: '',
    sport: '',
    image: null,
    description: '',
    stock: true,
    sizes: [],
    enable: true
  });
  const [uploadStatus, setUploadStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSizeChange = (e) => {
    const selectedSizes = e.value;
    const updatedSizes = selectedSizes.map((size) => ({
      size: sizeMapping[size],
      quantity: formData.sizes.find((s) => s.size === sizeMapping[size])?.quantity || 0
    }));
    setFormData({
      ...formData,
      sizes: updatedSizes
    });
  };

  const handleQuantityChange = (e, size) => {
    const quantity = parseInt(e.target.value, 10);
    const updatedSizes = formData.sizes.map((s) =>
      s.size === size ? { ...s, quantity } : s
    );
    setFormData({
      ...formData,
      sizes: updatedSizes
    });
  };

  
const handleSubmit = (e) => {
  e.preventDefault();
  setUploadStatus('pending');
console.log(formData)
  dispatch(createShoe(formData))
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El producto se ha creado correctamente.'
      }).then(() => {
        navigate("/home");  // Redirige al home después de la alerta de éxito
      });
    })
    .catch((error) => {
      console.error("Error al crear el producto:", error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al crear el producto. Intenta nuevamente.'
      });
    })
    .finally(() => {
      setUploadStatus('idle');
    });
};

  const handleImageUpload = (e) => {
    const file = e.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file
    }));
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.pField}>
          <label htmlFor="name">Nombre</label>
          <InputText
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="brand">Marca</label>
          <Dropdown
            id="brand"
            name="brand"
            value={formData.brand}
            options={mockBrands}
            onChange={handleChange}
            placeholder="Selecciona una marca"
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="price">Precio</label>
          <InputText
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="sizes">Talles</label>
          <MultiSelect
            id="sizes"
            name="sizes"
            value={formData.sizes.map((sizeObj) =>
              Object.keys(sizeMapping).find(
                (key) => sizeMapping[key] === sizeObj.size
              )
            )}
            options={Object.keys(sizeMapping)}
            onChange={handleSizeChange}
            placeholder="Selecciona tallas"
            required
          />
          {formData.sizes.map((sizeObj) => (
            <div key={sizeObj.size} className={styles.sizeQuantity}>
              <label htmlFor={`quantity-${sizeObj.size}`}>
                Cantidad para talle {Object.keys(sizeMapping).find(
                  (key) => sizeMapping[key] === sizeObj.size
                )}:
              </label>
              <InputText
                id={`quantity-${sizeObj.size}`}
                type="number"
                value={sizeObj.quantity}
                onChange={(e) => handleQuantityChange(e, sizeObj.size)}
                min="0"
                required
              />
            </div>
          ))}
        </div>
        <div className={styles.pField}>
          <label htmlFor="gender">Género</label>
          <Dropdown
            id="gender"
            name="gender"
            value={formData.gender}
            options={mockGenders}
            onChange={handleChange}
            placeholder="Selecciona un género"
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="sport">Deporte</label>
          <Dropdown
            id="sport"
            name="sport"
            value={formData.sport}
            options={mockSports}
            onChange={handleChange}
            placeholder="Selecciona un deporte"
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="image">Imagen</label>
          <FileUpload
            name="image"
            accept="image/*"
            maxFileSize={1000000}
            customUpload
            auto
            uploadHandler={handleImageUpload}
            chooseLabel="Seleccionar Imagen"
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="description">Descripción</label>
          <InputTextarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Añade la descripción..."
            rows={5}
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="stock">Stock</label>
          <Dropdown
            id="stock"
            name="stock"
            value={formData.stock}
            options={[
              { label: 'Sí', value: true },
              { label: 'No', value: false }
            ]}
            onChange={handleChange}
            placeholder="Selecciona stock"
            required
          />
        </div>
        <div className={styles.pField}>
          <label htmlFor="enable">Habilitar</label>
          <Dropdown
            id="enable"
            name="enable"
            value={formData.enable}
            options={[
              { label: 'Sí', value: true },
              { label: 'No', value: false }
            ]}
            onChange={handleChange}
            placeholder="Selecciona habilitar"
            required
          />
        </div>
        <Button type="submit" className={styles.pFieldButton}>
          Enviar formulario
        </Button>
        {uploadStatus === 'pending' && <p>Subiendo imagen...</p>}
      </form>
    </div>
  );
}
