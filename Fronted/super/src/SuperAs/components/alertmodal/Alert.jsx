import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AlertD() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Submit
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody mt={"20px"}>
              Are you sure? You want to Submit your Responce..
            </AlertDialogBody>

            <AlertDialogFooter>
              <Flex gap="10px">
                <Button colorScheme="teal" onClick={onClose} ml={3}>
                                          <Link to="/success">
                                          OK
                                          </Link>   
                </Button>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
              </Flex>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertD;
