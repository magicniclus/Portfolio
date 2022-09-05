const initState = {
    isLoading: true,
    cursorDifference: false,
    projectIsOpen: false,
    color: "#EDEAE6",
    textColor: "#373634",
    mobilSize: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "homePageLoading":
            return{
                ...state,
                isLoading: false
            }

        case "cursorDifferenceOver":
            return{
                ...state,
                cursorDifference: true
            }  

        case "cursorDifferenceLeave":
            return{
                ...state,
                cursorDifference: false
            }    
            
        case "projectIsOpen":
            return{
                ...state,
                projectIsOpen: true
            }     
            
        case "projectIsClose":
            return{
                ...state,
                projectIsOpen: false
            } 

        case "changeColor":
            return{
                ...state,
                color: action.payload
            } 
            
        case "changeTextColor": 
            return{
                ...state,
                textColor: action.payload
            }
          
        case "updateScreenSize":
            return{
                ...state,
                mobilSize: action.payload
            }    

        default: return state
    }
}

export default reducer