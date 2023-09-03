import { useToast } from "@chakra-ui/react";

const ShowToast = ({
  message,
  status,
  position = "bottom",
  duration = 9000,
  isClosable = true,
}) => {
  const toast = useToast();

  return toast({
    position,
    title: message,
    status,
    duration,
    isClosable,
  });
};

export default ShowToast;
