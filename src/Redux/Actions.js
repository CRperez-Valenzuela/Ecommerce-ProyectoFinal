import {
  GET_ALL_SHOES,
  ORDER_AND_FILTER_ACTION,
  CREATE_SHOE,
  SEARCH_SHOES,
  LOGIN_USER,
  GET_SHOE_BY_ID,
  LOGOUT_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  TAKE_ITEM,
  DELETE_SHOE,
  ADD_WISH,
  REMOVE_WISH,
  UPDATE_SHOE,
  SET_USERS,
  SET_USERS_ERROR,
  UPDATE_USER_BAN_STATUS,
  DELETE_USER,
  USER_INFO_CHANGE,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  UPDATE_SHOE_FAIL,

  CREATE_ORDER

} from "./ActionsTypes";
import Swal from "sweetalert2";

import axios from "axios";

export function getAllShoes() {
  return function (dispatch) {
    axios("http://localhost:3000/api/shoes")
      .then(({ data }) => dispatch({ type: GET_ALL_SHOES, payload: data }))
      .catch((error) => {
        console.error("Network Error:", error);
      });
  };
}



export const createShoe = (shoeData) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", shoeData.image);
    formData.append("upload_preset", "wp5af07o"); // Tu upload preset
    formData.append("cloud_name", "dbkg9dzwt");   // Tu cloud name

    const uploadResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/dbkg9dzwt/image/upload",
      formData
    );

    const imageUrl = uploadResponse.data.secure_url;

    // Transforma el formato de sizes
    const transformedSizes = shoeData.sizes.map(size => ({
      id: size.size, // Cambia `size` por `id`
      quantity: size.quantity
    }));

    const newShoeData = {
      ...shoeData,
      image: imageUrl,
      sizes: transformedSizes // Usa el formato transformado
    };

    const response = await axios.post(
      "http://localhost:3000/api/shoes",
      newShoeData
    );

    dispatch({ type: CREATE_SHOE, payload: response.data });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error; // Re-lanza el error para que pueda ser manejado en el componente
  }
};






export function getShoeById(id) {
  return function (dispatch) {
    axios(`http://localhost:3000/api/shoes/id/${id}`)
      .then(({ data }) => {
        dispatch({ type: GET_SHOE_BY_ID, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching shoe data:", error);
      });
  };
}

export function orderAndFilterAction({ ordenQuePaso, filtrosQuePaso }) {
  return function (dispatch) {
    dispatch({
      type: ORDER_AND_FILTER_ACTION,
      payload: { ordenQuePaso, filtrosQuePaso },
    });
  };
}

export function searchShoes(shoeName) {
  return (dispatch, getState) => {
    const allShoes = getState().allShoes;
    const lowerCaseShoeName = shoeName.toLowerCase();

    const filteredShoes = allShoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(lowerCaseShoeName)
    );

    if (filteredShoes.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No se encontraron productos",
        text: `No hay productos que coincidan con "${shoeName}".`,
      });
    }

    dispatch({ type: SEARCH_SHOES, payload: filteredShoes });
  };
}

export const deleteShoe = (shoeId) => async (dispatch) => {
    try {
      console.log('Sending delete request for shoe ID:', shoeId);
      await axios.delete(`http://localhost:3000/api/shoes/${shoeId}`);
      dispatch({
        type: DELETE_SHOE,
        payload: shoeId
      });
    } catch (error) {
      console.error("Error deleting shoe:", error.response ? error.response.data : error.message);
    }
  };

export function loginUser(loggedUser) {
  return {
    type: LOGIN_USER,
    payload: loggedUser,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export const addToCart = (shoe) => {
  return {
    type: ADD_TO_CART,
    payload: shoe,
  };
};

export const removeFromCart = (shoe) => {
  return {
    type: REMOVE_FROM_CART,
    payload: shoe,
  };
};

export const takeItem = (item) => {
  return {
    type: TAKE_ITEM,
    payload: item,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}
export const addWish = (id) => {
  return function (dispatch) {
    axios(`http://localhost:3000/api/shoes/id/${id}`)
      .then(({ data }) => {
        dispatch({ type: ADD_WISH, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching shoe data:", error);
      });
  };
}


// export const addWish = (id, userId) => {
//   return async function (dispatch) {
//     try {
//       await axios.post(`https://e-commerse-fc.onrender.com/api/userwishlist`, {id, userId}) // ! POSIBLEMENTE SEA UN POST, VER QUE DEVUELVE
//       const {data} = await axios(`https://e-commerse-fc.onrender.com/api/users/${userId}`) //! VER COMO VIENE DATA, PARA MANDAR UN ARRAY
//       dispatch({ type: ADD_WISH, payload: data })
//     } catch (error) {
//       console.log(error.message)
//     }
//   };
// }

// export const removeWish = (id, userId) => {
//   return async function (dispatch) {
//     try {
//       await axios.delete(`https://e-commerse-fc.onrender.com/api/userwishlist`, {id, userId}) // ! VERIFICAR CUAL VA A SER LA RUTA, VER QUE DEVUELVE
//       const {data} = await axios(`https://e-commerse-fc.onrender.com/api/users/${userId}`) //! VER COMO VIENE DATA, PARA MANDAR UN ARRAY
//       dispatch({ type: REMOVE_WISH, payload: data })
//     } catch (error) {
//       console.log(error.message)
//     }
//   };
// }

export const removeWish = (id) => {
    return {
        type: REMOVE_WISH,
        payload: id
    }
}


// export const removeWish = (id, userId) => {
//   return async function (dispatch) {
//     try {
//       await axios.delete(`https://e-commerse-fc.onrender.com/api/userwishlist`, {id, userId}) // ! VERIFICAR CUAL VA A SER LA RUTA, VER QUE DEVUELVE
//       const {data} = await axios(`https://e-commerse-fc.onrender.com/api/users/${userId}`) //! VER COMO VIENE DATA, PARA MANDAR UN ARRAY
//       dispatch({ type: REMOVE_WISH, payload: data })
//     } catch (error) {
//       console.log(error.message)
//     }
//   };
// }

export const updateShoe = (shoeData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/${shoeData.id}`,
      shoeData
    );

    dispatch({ type: UPDATE_SHOE, payload: response.data });
    return response.data; // Asegúrate de devolver los datos actualizados
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};


export const getUsers = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3000/api/users');
    dispatch({
      type: SET_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    dispatch({
      type: SET_USERS_ERROR,
      payload: error.message,
    });
  }
};

export const updateUserBanStatus = (userId, banStatus) => async dispatch => {
  try {
    const response = await axios.put(`http://localhost:3000/api/users/${userId}`, { ban: banStatus });
    dispatch({
      type: UPDATE_USER_BAN_STATUS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error updating user ban status:', error);
    // Puedes manejar errores aquí si lo deseas
  }
};
export const deleteUser = (userId) => async (dispatch) => {
  try {
    // Enviar solicitud para eliminar el usuario
    await axios.delete(`http://localhost:3000/api/users/${userId}`);
    
    // Dispatch de la acción para actualizar el estado en Redux
    dispatch({
      type: DELETE_USER,
      payload: userId
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    dispatch({
      type: SET_USERS_ERROR,
      payload: error.message
    });
  }
};

export const userInfoChange = (userId, updatedData) => async(dispatch) =>{

  try {
    const response = await axios.put(`http://localhost:3000/api/users/${userId}`, updatedData)
    console.log(response)
    dispatch({
      type: USER_INFO_CHANGE,
      payload: response.data.users
    });
  } catch (error) {
    console.log(error.message)
  }
}

export const addAddress = (address) =>  async (dispatch) =>{
  try {
    const response = await axios.post(`http://localhost:3000/api/adresses/`, address)
    console.log(response.data)
    dispatch( {
      type: ADD_ADDRESS,
      payload: response.data.addresses
    })
  } catch (error) {
    console.log(error)
  }
  
}

export const deleteAddress = (indices) => async(dispatch) => {
  try {
    const {addressId, userId} = indices
    const response = await axios.delete(`http://localhost:3000/api/useraddresses/${addressId}`)
    console.log(response)
    const {data} = await axios(`http://localhost:3000/api/users/${userId}`)
    console.log(data)

    dispatch({
      type: DELETE_ADDRESS,
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const editAddress = (indices) => async(dispatch) => {

  try {  
    const {addressId, userId} = indices
    const response = await axios.put(`http://localhost:3001/api/useraddresses/${addressId}`)
    console.log(response)
    const {data} = await axios(`http://localhost:3000/api/users/${userId}`)
    console.log(data)
    
    dispatch({
      type: EDIT_ADDRESS,
      payload: data
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const createOrder = (order ) => {
  return {
    type: CREATE_ORDER,
    payload: order
  }
}