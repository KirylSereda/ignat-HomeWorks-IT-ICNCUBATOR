import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeTheme } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'dark-text', 'red', 'red-text', 'some', 'some-text'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.themePage.theme)

    const dispatch = useDispatch()

    const onChangeTheme = (theme: string) => {
        dispatch(changeTheme(theme))
    }

    return (
        <div className={s[theme]}>
            <div className={s[theme]}>
                Homeworks 12
            </div>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeTheme} />

            <hr />
        </div>
    );
}

export default HW12;
