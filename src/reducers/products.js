export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT":
            return [...action.payload];
        case "ADD_PRODUCTS":
            return [...action.payload];
        case "DELETE_PRODUCTS":
            return [...action.payload];
        case "UPDATE_PRODUCTS":
            return [...action.payload];
        default:
            return state;
    }
};