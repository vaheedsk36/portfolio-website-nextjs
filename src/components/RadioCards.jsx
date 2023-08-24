import { Box, useRadio } from "@chakra-ui/react";

const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        color="black"
        borderColor="#1D5D9B"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          color: "red",
          borderColor: "red",
        }}
        px={3}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
