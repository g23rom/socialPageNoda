import s from './DialogMessage.module.css'

const DialogMessage = (props) => {
    return (
    <div className = {s.DialogMessage}>
        <div className = {s.name}>
                {props.name}
        </div>

        <div className={s.avaCover}>
                <img src="https://i.pinimg.com/736x/7b/e8/08/7be80824e138982232492da7eb6de585--marie-claire-female-faces.jpg"></img>
        </div>

        <div className={s.message}>
                    {props.Messages}
            </div>
    </div>
    )
};

export default DialogMessage;