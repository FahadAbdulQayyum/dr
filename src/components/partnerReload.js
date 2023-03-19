import React, { useEffect, useState } from 'react'
import Partner from './partner'

const PartnerReload = () => {

    const [bool, setBool] = useState(false)
    useEffect(() => {
        // setBool(false)
        console.log('useEffect')
    }, [bool])
    setTimeout(() => {
        setBool(true)
        console.log('setTimeout')
    }, 1000);

    const PartnerRe = !bool ? <Partner /> : setBool(false)

    return (
        <div>
            {PartnerRe}
            {/* <Partner /> */}
        </div>
    )
}

export default PartnerReload
