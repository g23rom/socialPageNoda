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
        dialogsData: [
            { id: 1, name: '82656' },
            { id: 2, name: 'Васич' },
            { id: 3, name: 'Даша' },
            { id: 4, name: 'Глаша' },
            { id: 5, name: 'Катя' },
            { id: 6, name: 'Маша' },
            { id: 7, name: 'Рома2222' }
    
        ], 
        messageData: [
            { Messages: 'Первое сообщение', name: 'Димыч' },
            { Messages: 'Второе сообщение', name: 'Васич' },
            { Messages: 'Третье сообщение', name: 'Даша' },
            { Messages: 'В середине мая, у нас состоялся нелегкий', name: 'Глаша' }
    
        ]
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
        if(action.type  === 'ADD-POST'){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        //-----------------
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.state = store;

export default store;