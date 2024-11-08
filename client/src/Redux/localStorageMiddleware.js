
const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('userData', JSON.stringify(state.loggedUserData))
    return result;
};

export default localStorageMiddleware;
