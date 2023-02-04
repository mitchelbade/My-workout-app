import { useState } from 'react'

export const useHandleChange = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const handleChange = e => setState(e.target.value);

    return [state, handleChange];
};