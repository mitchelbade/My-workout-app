import { useCallback } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { set } from 'lodash'

export const useHandleChange = (setValue) => {
    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setValue((prev) => ({ ...prev, [name]: value }))
    }, [setValue])
    
    return handleChange;
};

export const useHandleChangeNested = (setValue, arrayName, index) => {
    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        const newPath = `${arrayName}[${index}].${name}`
        setValue((prev) => {
            set(prev, newPath, value)
            return {...prev}
        })
    }, [setValue, arrayName, index])
    return handleChange;
};

export const useBackgroundImage = () => {
    const lightBgImage = 'url(/images/background2.jpg)!important'
    const darkBgImage = 'url(/images/background.jpg)!important'
    return useColorModeValue(lightBgImage, darkBgImage)
};