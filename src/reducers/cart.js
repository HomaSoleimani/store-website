export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CART":
            return [...action.payload];
        case "DELETE_CART":
            return [...action.payload];
        case "UPDATE_CART":
            return [...action.payload];
        default:
            return state;
    }
};