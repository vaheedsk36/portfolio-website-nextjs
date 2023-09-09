import React from "react";
import {
  Card,
  CardBody,
  Text,
  Button,
  Image,
  Link,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ArticlesCard = (props) => {
  const { title, coverImage, slug, brief } = props.data;
  const articleUrl = `https://codersk36.hashnode.dev/${slug}`;
  return (
    <>
      <Card 
          backgroundColor= "blueTheme.card"
          width= "20rem"
          height= "30rem"
          margin= "0.5rem"
          boxShadow="0 10px 30px -15px blueTheme.navShadow"
      >
        <CardBody>
          <Image
            objectFit="contain"
            src={coverImage}
            alt="Chakra UI"
            width="18rem"
          />
          <Heading size="sm" my={3}>
            {title}
          </Heading>
          <Text fontSize="0.9rem">{brief.substring(0, 160)}...</Text>
          <Button mt={4} size="sm">
            <Link href={articleUrl} target="_blank">
              Read here
            </Link>
            <Icon ml={2} as={FaExternalLinkAlt}/>
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ArticlesCard;
