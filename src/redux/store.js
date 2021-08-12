import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
    _state : {
        profilePage:{
            newPostText: 'newPostTextText'
            ,
            postData: [
                {id: 1, message: 'Привет это первое сообщение', likesCount: 12},
                {id: 2, message: 'Это второе сообщение здесь', likesCount: 11},
                {id: 3, message: 'Жаль сообщения не берутся из базы', likesCount: 110}
            ]
        },
        dialogPage: {
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
        },
        sidebar: {}
        
    },
    _callSubscriber() {
        console.log('State wos changed');
    },

    getState(){
        return this._state;
    },
    subscribe(obserer){
        this._callSubscriber = obserer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        
    }
}





window.state = store;
export default store;