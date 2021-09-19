import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ActivityImages({ activity }) {
  return (
    <Card className="my-2 p-1 rounded">
      {/* <Card.Img src={activity.image} variant="top" alt={activity.name} /> */}
      <LazyLoadImage
        effect="blur"
        src={activity.image}
        alt={activity.name}
        width="506"
        height="305"
      />
    </Card>
  );
}

export default ActivityImages;
