import rerenderEntireTree from "../render";

let state = {
    profilePage:{
        newPostText: ''
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

    ],

    postData: [
        {id: 1, message: 'Привет это первое сообщение', likesCount: 12},
        {id: 2, message: 'Это второе сообщение здесь', likesCount: 11},
        {id: 3, message: 'Жаль сообщения не берутся из базы', likesCount: 110}
    ]
}

window.state = state.profilePage.newPostText;

export //update new temp message
let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  };

export 
let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.postData.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
};

export default state;