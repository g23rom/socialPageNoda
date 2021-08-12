const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: '82656' },
        { id: 2, name: 'Васич' },
        { id: 3, name: 'Даша' },
        { id: 4, name: 'Глаша' },
        { id: 5, name: 'Катя' },
        { id: 6, name: 'Маша' },
        { id: 7, name: 'Рома2222' }

    ], 
    messages: [
        { id: 1, Messages: 'Первое сообщение', name: 'Димыч' },
        { id: 2, Messages: 'Второе сообщение', name: 'Васич' },
        { id: 3, Messages: 'Третье сообщение', name: 'Даша' },
        { id: 4, Messages: 'В середине мая, у нас состоялся нелегкий', name: 'Глаша' }

    ],

    newMessageBody: ""
}

const dialogReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 5, Messages: body, name: 'Глаша' })
            return state;
        default:
            return state

    }
}

export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogReducer;