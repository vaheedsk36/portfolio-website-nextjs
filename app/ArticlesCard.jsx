import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const ArticlesCard = ({ title, coverImage, slug }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="article image"
        src={coverImage}
      />
    }
    onClick={() => alert("working")}
  >
    <Meta title={title} description="www.instagram.com" />
  </Card>
);
export default ArticlesCard;
