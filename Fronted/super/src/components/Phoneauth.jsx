import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcIphone } from "react-icons/fc";
import firebaseConfig from "./firebaseconfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Phoneauth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const handlePhone = async () => {
    try {
      const auth = firebase.auth();
      await auth.signInWithPhoneNumber(phoneNumber);
      onClose();
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };

  return (
    <>
      <FcIphone onClick={onOpen} fontSize={"30px"} cursor={"pointer"} />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>SignIn with Phone</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Phone Number"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter m="auto">
            <Button onClick={handlePhone} colorScheme="blue" mr={3}>
              Get OTP
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Phoneauth;
