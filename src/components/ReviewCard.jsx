import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function ReviewCard({ items }) {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {items.reviewerName}
        </Typography>
        <Typography variant="h5" component="div">
          {items.reviewTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {items.reviewDate}
        </Typography>
        {items.reviewImage ? (
          <CardMedia
            component="img"
            height="200"
            width="200"
            image={`${process.env.REACT_APP_PUBLIC_FOLDER}${items.reviewImage}`}
            alt=""
          />
        ) : null}
        <Typography variant="body2">{items.reviewDesc}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
