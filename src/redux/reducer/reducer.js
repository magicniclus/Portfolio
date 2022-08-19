const initState = {
    isLoading: true,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "homePageLoading":
            return{
                ...state,
                isLoading: false
            }

        default: return state
    }
}

export default reducer