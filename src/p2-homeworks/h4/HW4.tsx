import React, { ChangeEvent, useState } from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Error'

    const showAlert = () => {
        if (error) {
            alert('Введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr />
            Homeworks 4
            <hr />
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                // spanClassName={s.testSpanError}
                />
                <SuperInputText
                    className={s.blue}
                />
                <SuperButton>
                    Default
                </SuperButton>

                <SuperButton
                    red
                    onClick={showAlert}
                >
                    Delete
                </SuperButton>

                <SuperButton disabled>
                    Disabled
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Some text
                </SuperCheckbox>

                <SuperCheckbox checked={checked} onChange={testOnChange} />
            </div>
            <hr />
        </div>
    )
}

export default HW4
