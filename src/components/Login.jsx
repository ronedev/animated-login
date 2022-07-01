import React from 'react'
import { Center, Image, Box } from '@chakra-ui/react'
import { passwordImages } from '../utils/images'

const Login = () => {
    return (
        <Center w='35rem' h='50rem' bg='white' borderRadius={15}>
            <Box bg='#1d9bf0' p={2} borderRadius={100}>
                <Image src={passwordImages[0]} alt='avatar' w='120px' />
            </Box>
        </Center>
    )
}

export default Login