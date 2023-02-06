import { useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

export const useHandleChange = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const handleChange = e => setState(e.target.value);

    return [state, handleChange];
};

export const useBackgroundImage = () => {
    const lightBgImage = 'url(/images/background2.jpg)!important'
    const darkBgImage = 'url(/images/background.jpg)!important'
    return useColorModeValue(lightBgImage, darkBgImage)
}