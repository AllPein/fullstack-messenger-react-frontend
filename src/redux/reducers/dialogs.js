const initialState = {
    dialogs: [
        {
          text: "asd",
          username: "Sasha",
          time: "14:42",
          unRead: 2,
    
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        {
          text: "sssssss",
          username: "Kolya",
          time: "11:20",
          unRead: 0
        },
        
        {
          text: "fffffff",
          username: "Arthur",
          time: "14:42",
          unRead: 0
        },
        {
          text: "sssssssssssssss",
          username: "Lesha",
          time: "13:11",
          unRead: 11
        }
    
      ],
    
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case 'DIALOGS:SET_DATA':
            return {
                ...state,
                dialogs: payload,
                
            };
        default: 
            return state;
    }
}