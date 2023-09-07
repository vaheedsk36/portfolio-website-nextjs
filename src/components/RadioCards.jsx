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
        color="#9E9FA5"
        borderColor="#9E9FA5"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          color:"social.instagram",
          borderColor: "social.instagram"
        }}
        px={3}
        py={1}
        mt={1}
        mr={1}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
