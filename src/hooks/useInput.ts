import { SetStateAction, useState } from "react"

export const useInput = (startValue = '') => {
    const [value, setValue] = useState(startValue);
    
    const onChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setValue(e.target.value);
    };

    return {value, onChange};
}