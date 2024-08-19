import { useState } from "react"

export const useLocalStorage = (key, dVal) => {
    const [lsValue, setLsValue] = useState(() => {
        try {

            let val = localStorage.getItem(key)
            if (val) {
                return JSON.parse(val)
            } else {
                localStorage.setItem(key, JSON.stringify(dVal))
                return dVal;
            }

        } catch (error) {
            localStorage.setItem(key, JSON.stringify(dVal))
            return dVal;
        }
    })

    const setLs = (valOfFunc) => {
        let newVal;
        if (typeof valOfFunc === 'function') {
            newVal = valOfFunc(lsValue)
        } else {
            newVal = valOfFunc
        }
        localStorage.setItem(key, JSON.stringify(newVal))
        setLsValue(newVal)
    }

    return [lsValue, setLs]
}
