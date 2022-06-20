import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import loadingSVG from './common/loading.svg'
import { AppStoreType } from './bll/store';
import s from './HW10.module.css'
function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    console.log(loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 1000)
    };

    return (
        <div >
            <hr />
            Homeworks 10
            <hr />
            <div className={s.HW10}>
                {
                    loading
                        ? (<div >
                            <img src={loadingSVG} />
                        </div>
                        ) : (
                            <div >
                                <SuperButton onClick={setLoading}>Set loading...</SuperButton>
                            </div>
                        )
                }
            </div>
            <hr />
        </div >
    )
}

export default HW10
