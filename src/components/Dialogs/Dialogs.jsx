import DialogItem from './DialogItem/DialogItem'
import DialogMessage from './DialogMessage/DialogMessage'
import s from './Dialogs.module.css'

let dialogsData =
    [
        { id: 1, name: 'Димыч' },
        { id: 2, name: 'Васич' },
        { id: 3, name: 'Даша' },
        { id: 4, name: 'Глаша' },
        { id: 5, name: 'Катя' },
        { id: 6, name: 'Маша' },
        { id: 7, name: 'Рома2222' }

    ]

let messageData =
    [
        { Messages: 'Первое сообщение', name: 'Димыч' },
        { Messages: 'Второе сообщение', name: 'Васич' },
        { Messages: 'Третье сообщение', name: 'Даша' },
        { Messages: 'В середине мая, у нас состоялся нелегкий', name: 'Глаша' }

    ]

const Dialogs = (props) => {



    return (



        <div className={s.blocks}>

            <div className={s.block + ' ' + s.items}>
                {dialogsData.map(el => (<DialogItem id={el.id} name={el.name} />))}
            </div>

            <div className={s.block}>
                { messageData.map(el => (<DialogMessage name={el.name} Messages={el.Messages} />))} 
            </div>

        </div>
    )
};

export default Dialogs;