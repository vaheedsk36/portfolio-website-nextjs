import React from "react";
import {
  Card,
  CardBody,
  Text,
  Button,
  Image,
  Heading,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ArticlesCard = (props) => {
  const { data, setActiveCard, onOpen } = props;
  const { title, coverImage, slug, brief } = data;
  const articleUrl = `https://codersk36.hashnode.dev/${slug}`;
  return (
    <>
      <Card
        backgroundColor="blueTheme.card"
        width="20rem"
        height="28rem"
        margin="0.5rem"
        boxShadow="0 10px 30px -15px blueTheme.navShadow"
      >
        <CardBody>
          <Image
            objectFit="contain"
            src={coverImage.url}
            alt="Chakra UI"
            width="18rem"
          />
          <Heading size="sm" my={3}>
            {title}
          </Heading>
          <Box fontSize="0.9rem">
            {brief.substring(0, 100)}...
            <Text
              mx={3}
              display="inline"
              color="#068FFF"
              fontSize="0.9rem"
              cursor="pointer"
              _hover={{ color: "#4E4FEB" }}
              onClick={() => {
                setActiveCard(data)
                onOpen(true);
              }}
            >
              Read more
            </Text>
          </Box>
          <Button
            as="a"
            href={articleUrl}
            marginTop="1rem"
            size="sm"
            target="_blank"
          >
            Read here
            <Icon ml={2} as={FaExternalLinkAlt} />
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ArticlesCard;
