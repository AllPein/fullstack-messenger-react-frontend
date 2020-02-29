const initialState = {
    messages: [
        {
          text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
          user: {
            username: "Sasha",
            avatarColor: '#dd6688',
            email: 'sascha.panin2011@yandex.ru'
          },
          time: "14:42",
          isMe: false,
        },
        {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: true,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: true,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: true,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },
          {
            text: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
            user: {
              username: "Sasha",
              avatarColor: '#dd6688',
              email: 'sascha.panin2011@yandex.ru'
            },
            time: "14:42",
            isMe: false,
          },

     
    
      ],
    
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