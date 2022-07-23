import { useEffect } from 'react'

import { IToastProp } from '../../interfase'
import './Toast.scss'



const Toast: React.FC<IToastProp> = ({ clearToast, name }) => {

    useEffect(() => {
        const idTimeOutToast = setTimeout(clearToast, 3000)


        return () => (
            clearTimeout(idTimeOutToast)
        )


    }, [name])

    return (

        <div className="toast">{name} добавлен в корзину</div>

    )
}

export default Toast