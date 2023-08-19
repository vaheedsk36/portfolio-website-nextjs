import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Image,
  Link,
  Heading,
} from "@chakra-ui/react";

const ArticlesCard = (props) => {
  const { title, coverImage, slug, brief } = props.data;
  const articleUrl = `https://codersk36.hashnode.dev/${slug}`;
  return (
    <>
      <Card>
        <CardBody>
          <Image objectFit="cover" src={coverImage} alt="Chakra UI" />
          <Heading size="md" my={3}>
            {title}
          </Heading>
          <Text>{brief}</Text>
          <Button my={4}>
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
