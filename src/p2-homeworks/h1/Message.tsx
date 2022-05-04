import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.message}>
                <img className={s.img} alt={'avatar'} src={props.avatar} />
                <div className={s.angle}></div>
                <div className={s.message_content}>
                    <div className={s.message_name}>
                        {props.name}
                    </div>
                    <div className={s.message_info}>
                        <div className={s.message_text}>
                            {props.message}
                        </div>
                        <div className={s.message_time}>
                            {props.time}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
