import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  CloseButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { passwordImages, writingImages } from "../utils/images";

const Login = () => {

    const imagesInitialValue = passwordImages[0]

  const [images, setImages] = useState(imagesInitialValue);
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  const handleEmail = (e) => {
    setImages(
      e.target.value.length >= writingImages.length
        ? writingImages[writingImages.length - 1]
        : writingImages[e.target.value.length]
    );
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailBlur = ()=>{
    setImages(imagesInitialValue)
  }

  const handlePassword = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordFocus = () => {
    for (let i = 1; i < passwordImages.length - 1; i++) {
      setTimeout(() => {
        setImages(passwordImages[i]);
      }, i * 20);
    }
  };

  const handlePasswordBlur = () => {
    for (let i = 1; i < passwordImages.length - 1; i++) {
      setTimeout(() => {
        setImages(passwordImages[passwordImages.length - i]);
      }, i * 20);
    }
    handleEmail();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImages(imagesInitialValue);
    onOpen()
    console.log(formValues);
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <Box
      p={20}
      bg="white"
      borderRadius={15}
      display="grid"
      alignContent="center"
      justifyItems="center"
      gap={4}
    >
      <Box bg="#1d9bf0" p={2} borderRadius={100} w="120px">
        <Image src={images} alt="avatar" w="120px" />
      </Box>
      <Box>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            alignContent: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleEmail}
            onBlur={handleEmailBlur}
            w="300px"
          />
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handlePassword}
              onBlur={handlePasswordBlur}
              onFocus={handlePasswordFocus}
              pr={4}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.5rem"
                size="sm"
                onClick={() => {
                  handleClickShow();
                  if (show) {
                    handlePasswordBlur();
                  } else {
                    handlePasswordFocus();
                  }
                }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" colorScheme="twitter" color="white">
            Login
          </Button>
        </form>
        {isOpen && (
            <Alert status='success' mt={2}>
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
              You have successfully logged!
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf='flex-start'
              position='relative'
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Login;
