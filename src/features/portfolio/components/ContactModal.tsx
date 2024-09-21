"use client";
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
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { PiArrowUpRightFill } from "react-icons/pi";
import { useToast } from "@chakra-ui/react";

function ContactModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        //const data = await response.json();
        //onsole.error(data);
        toast({
          title: "Email send successfully!",
          description: "I will get back to you as soon as possible.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        reset();
        onClose();
      } else {
        console.error("Failed to send email.");
        toast({
          title: "Failed to send email.",
          description: "Please try again later.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
      setLoading(false);
    } catch (error: any) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 #mt-4 py-2 w-max border border-gray-950 hover:bg-gray-800 transition #duration-300"
      >
        <span className="font-semibold whitespace-nowrap">Get in touch</span>
        <PiArrowUpRightFill className="size-4" />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="relative bg-gray-800">
          <ModalHeader className="text-black"></ModalHeader>
          <ModalCloseButton
            //as={"button"}
            colorScheme="alphaBlack"
            color={"white"}
            backgroundColor={"gray.800"}
            _hover={{
              color: "gray.500",
              backgroundColor: "gray.800",
            }}
          />
          <ModalBody>
            <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
              <h2 className="flex items-center gap-3 text-2xl font-semibold">
                <span>Send me an email</span>
                <span className="text-3xl">👋</span>
              </h2>
              <p className="mt-6 text-gray-300">
                {`I'm always looking for new opportunities. If you'd like to get
                in touch, feel free to reach out.`}
              </p>

              <div>
                <FormControl isInvalid={!!errors?.name} className="mt-4">
                  <Input
                    placeholder="Enter you'r name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  <FormErrorMessage>
                    {!!errors?.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors?.email} className="mt-4">
                  <Input
                    placeholder="Enter you'r email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors?.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors?.message} className="mt-4">
                  <Textarea
                    placeholder="Enter you'r Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  <FormErrorMessage>
                    {errors?.message && errors.message.message}
                  </FormErrorMessage>
                </FormControl>
              </div>

              <Button
                className="!rounded-xl mt-4"
                type={"submit"}
                isLoading={loading}
              >
                Send Email
              </Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactModal;
