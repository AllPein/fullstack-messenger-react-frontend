const initialState = {
    messages: [],
    
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case 'MESSAGES:SET_DATA':
            return {
                ...state,
                messages: payload,
                
            };
        default: 
            return state;
    }
}