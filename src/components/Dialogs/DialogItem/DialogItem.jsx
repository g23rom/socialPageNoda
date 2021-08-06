import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = "dialogs/" + props.id;

    return (
        <NavLink to = {path} className = {s.NavLink} >

            <div className={s.dialogs + ' ' + s.active} >

                <div className={s.avaCover}>
                    <img src="https://i.pinimg.com/736x/7b/e8/08/7be80824e138982232492da7eb6de585--marie-claire-female-faces.jpg"></img>
                </div>

                <div className={s.avaName}>
                    {props.name}
                </div>

            </div>

        </NavLink>
    )
};

export default DialogItem;