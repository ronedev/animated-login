import React, { useState } from 'react'
import { Image, Box, Input, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { passwordImages, writingImages } from '../utils/images'

const Login = () => {

    const [images, setImages] = useState(passwordImages[0])
    const [show, setShow] = useState(false)
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleEmail = (e) => {
        setImages(e.target.value.length >= writingImages.length
            ? writingImages[writingImages.length - 1]
            : writingImages[e.target.value.length]
        )
        setFormValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
    }

    const handlePassword = (e) => {
        setFormValues(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
    }

    const handlePasswordFocus = ()=>{
        for(let i = 1; i < passwordImages.length - 1; i++){
            setTimeout(()=>{
                setImages(passwordImages[i])
            }, i * 20)
        }
    }

    const handlePasswordBlur = ()=>{
        for(let i = 1; i < passwordImages.length - 1; i++){
            setTimeout(()=>{
                setImages(passwordImages[passwordImages.length - i])
            }, i * 20)
        }
        handleEmail()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    const handleClickShow = () => {
        setShow(!show)
    }

    return (
        <Box w='35rem' h='50rem' bg='white' borderRadius={15} display='grid' alignContent='center' justifyItems='center' gap={4}>
            <Box bg='#1d9bf0' p={2} borderRadius={100} w='120px'>
                <Image src={images} alt='avatar' w='120px' />
            </Box>
            <Box >
                <form onSubmit={handleSubmit} style={{ display: 'grid', alignContent: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <Input type='email' name='email' placeholder='Enter your email' value={formValues.email} onChange={handleEmail} w='300px' />
                    <InputGroup>
                        <Input type={show ? 'text' : 'password'} name='password' placeholder='Enter your password' value={formValues.password} onChange={handlePassword} onBlur={handlePasswordBlur} onFocus={handlePasswordFocus} pr={4} />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.5rem' size='sm' onClick={()=>{
                                handleClickShow()
                                if(show){
                                    handlePasswordBlur()
                                }else{
                                    handlePasswordFocus()
                                }
                            }}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button type='submit' colorScheme='twitter' color='white'>Login</Button>
                </form>
            </Box>
        </Box>
    )
}

export default Login