import DialogItem from './DialogItem/DialogItem'
import DialogMessage from './DialogMessage/DialogMessage'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.blocks}>

            <div className={s.block + ' ' + s.items}>
                {props.dialogsData.map(el => (<DialogItem id={el.id} name={el.name} />))}
            </div>

            <div className={s.block}>
            
                { props.messageData.map(el => (<DialogMessage name={el.name} Messages={el.Messages} />))} 
            
                <textarea className = {s.textarea}></textarea> 
            
                <button className = {s.btn}>Отправить сообщение</button>
            </div>

        </div>
    )
};

export default Dialogs;