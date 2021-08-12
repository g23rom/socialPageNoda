import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogReducer';
import DialogItem from './DialogItem/DialogItem'
import DialogMessage from './DialogMessage/DialogMessage'
import s from './Dialogs.module.css'



const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogElements = state.messages.map(el =>(<DialogMessage name={el.name} Messages={el.Messages} />))
    let messageElement = state.dialogs.map(el => (<DialogItem id={el.id} name={el.name} />))
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    // debugger;
    return (
        <div className={s.blocks}>

            <div className={s.block + ' ' + s.items}>
                {messageElement}
            </div>

            <div className={s.block}>

                {dialogElements}

                <textarea value = {newMessageBody}
                onChange = {onNewMessageChange}
                placeholder = 'Введите ваше сообщение' 
                className={s.textarea}></textarea>

                <button onClick = {onSendMessageClick} className={s.btn}>Отправить сообщение</button>
            </div>

        </div>
    )
};

export default Dialogs;