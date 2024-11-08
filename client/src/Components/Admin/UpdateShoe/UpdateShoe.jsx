import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { getAllShoes, updateShoe } from '../../../Redux/Actions';
import { Image } from 'primereact/image';
import mockBrands from '../../../mockDB/mockBrands';
import mockGenders from '../../../mockDB/mockGenders';
import mockSports from '../../../mockDB/mockSports';
import Swal from 'sweetalert2';
import styles from './UpdateShoe.module.css';
import { AutoComplete } from 'primereact/autocomplete';

export default function UpdateShoeForm() {
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

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const allShoes = useSelector(state => state.allShoes);
  const updateError = useSelector(state => state.updateError);

  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    gender: '',
    sport: '',
    image: null,
    description: '',
    stock: true,
    sizes: {},
    sizeIds: [], // Asegúrate de tener este campo si es necesario
    enable: true,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle');

  useEffect(() => {
    dispatch(getAllShoes());
  }, [dispatch]);

  useEffect(() => {
    if (updateError) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: updateError,
      });
    }
  }, [updateError]);

  const searchShoes = (event) => {
    const query = event.query.toLowerCase();
    const filteredShoes = allShoes.filter(shoe => 
      shoe.name.toLowerCase().includes(query)
    );
    setSuggestions(filteredShoes.map(shoe => shoe.name));
  };

  const handleSearch = (term = searchTerm) => {
    const foundShoe = allShoes.find(shoe =>
      shoe.name.toLowerCase() === term.toLowerCase()
    );
    if (foundShoe) {
      setSelectedShoe(foundShoe);
  
      const sizes = foundShoe.sizes.reduce((acc, size) => {
        acc[size.value] = size.shoesizes ? size.shoesizes.quantity : 0;
        return acc;
      }, {});
  
      setFormData({
        ...foundShoe,
        sizes: sizes,
        sizeIds: foundShoe.sizeIds || []
      });
    } else {
      setSelectedShoe(null);
      Swal.fire({
        icon: 'info',
        title: 'No encontrado',
        text: 'No se encontró ninguna zapatilla con ese nombre.',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSizeChange = (size, value) => {
    setFormData(prevData => ({
      ...prevData,
      sizes: {
        ...prevData.sizes,
        [size]: value
      }
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus('pending');
  
    // Formatear los datos antes de enviarlos
    const formattedData = {
      ...formData,
      sizes: Object.entries(formData.sizes).map(([size, quantity]) => ({
        id: sizeMapping[size],
        quantity: quantity
      })).filter(size => size.quantity > 0) // Solo enviar tamaños con cantidad > 0
    };
  
    console.log('Datos formateados a enviar:', formattedData);
  
    try {
      const updatedShoe = await dispatch(updateShoe(formattedData));
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Zapatilla actualizada con éxito.',
      }).then(() => {
        // Redirigir a la página de detalles después de cerrar el Swal
        navigate(`/detail/${updatedShoe.id}`);
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al actualizar la zapatilla.',
      });
    } finally {
      setUploadStatus('idle');
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.pField}>
        <h3>Editar</h3>
  <label htmlFor="search">Buscar zapatilla por nombre</label>
  <AutoComplete
    id="search"
    value={searchTerm}
    suggestions={suggestions}
    completeMethod={searchShoes}
    onChange={(e) => setSearchTerm(e.value)}
    onSelect={(e) => {
      setSearchTerm(e.value);
      handleSearch(e.value);
    }}
    placeholder="Nombre de la zapatilla"
    className={styles.searchInput}
  />
  <Button label="Buscar" onClick={() => handleSearch()} className={styles.searchButton} />
</div>

      <form onSubmit={handleSubmit}>
        {selectedShoe && (
          <>
            <div className={styles.imagePreview}>
              <Image src={selectedShoe.image} alt={selectedShoe.name} width="100%" />
            </div>

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
              <div className={styles.sizeFieldContainer}>
                {Object.keys(sizeMapping).map(size => (
                  <div key={size}>
                    <label>{size}</label>
                    <InputNumber
                      value={formData.sizes[size] || 0}
                      onValueChange={(e) => handleSizeChange(size, e.value)}
                      min={0}
                      className={styles.separated}
                    />
                  </div>
                ))}
              </div>
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
              <label htmlFor="enable">Habilitado</label>
              <Dropdown
                id="enable"
                name="enable"
                value={formData.enable}
                options={[
                  { label: 'Sí', value: true },
                  { label: 'No', value: false }
                ]}
                onChange={handleChange}
                placeholder="Selecciona si está habilitado"
                required
              />
            </div>
            <Button type="submit" className={styles.searchButton}>
              Guardar Cambios
            </Button>
            {uploadStatus === 'pending' && <p>Subiendo imagen...</p>}
          </>
        )}
      </form>
    </div>
  );
}