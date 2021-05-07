const initialState = {
    searchResult: [],
}


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_RESULT':
            console.log(action);
            return { ...state, searchResult: action.searchResult };
        default:
            return state;
    }
}

export default SearchReducer