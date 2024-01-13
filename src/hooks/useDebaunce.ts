import { SetStateAction, useRef, useState } from "react"

export const useInputDebaunce = (startValue: string, timeout: number, callBack: (arg: any) => void) => {
    const [value, setValue] = useState(startValue);
        
    const timer: {current: any} = useRef();

    const onChange = async (e: { target: { value: SetStateAction<string>; }; }) => {
        setValue(e.target.value)
        
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(async () => {
            callBack(e.target.value)
        }, timeout * 1000);

    }

    return { value, onChange }
}