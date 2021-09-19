import React from "react";
import { Card } from "react-bootstrap";

function ActivityImages({ activity }) {
  return (
    <Card className="my-2 p-1 rounded">
      <Card.Img src={activity.image} variant="top" alt={activity.name} />
    </Card>
  );
}

export default ActivityImages;
