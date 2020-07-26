const INITIAL_STATE = {
    language: "javascript"
}

const changeLanguage = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_EDITOR_LANGUAGE":
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}

export default changeLanguage;