import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Andrey',
    message: 'Hello how are you? I arrived in Minsk 5 hours ago. Can we meеt in 1 hour? Hello how are you? I arrived in Minsk 5 hours ago. Hello how are you? I arrived in Minsk 5 hours ago.',
    time: '22:00',
}

function HW1() {
    return (
        < >
            <hr />
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr />
        </>
    )
}

export default HW1
