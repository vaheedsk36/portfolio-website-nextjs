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
import { FaLink } from "react-icons/fa6";

const ArticlesCard = (props) => {
  const { title, coverImage, slug, brief } = props.data;
  const articleUrl = `https://codersk36.hashnode.dev/${slug}`;
  return (
    <>
      <Card className="articles-card">
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
          <Button mt={4} size="sm" className="article-btn">
            <Icon mr={1} as={FaLink}/>
            <Link href={articleUrl} target="_blank">
              View here
            </Link>
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ArticlesCard;
