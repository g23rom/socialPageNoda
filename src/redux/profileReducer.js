const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    newPostText: 'newPostTextText'
    ,
    postData: [
        {id: 1, message: 'Привет это первое сообщение', likesCount: 12},
        {id: 2, message: 'Это второе сообщение здесь', likesCount: 11},
        {id: 3, message: 'Жаль сообщения не берутся из базы', likesCount: 110}
    ]
}

const profileReducer = (state = initialState, action) =>{
    // debugger;
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;