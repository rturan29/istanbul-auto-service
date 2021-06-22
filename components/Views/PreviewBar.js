import React from "react";
import Link from "next/link";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  previewButton: {
    margin: "2rem 5rem 1rem",
  },
});

export default function PreviewBar() {
  const classes = useStyles();

  return (
    <div>
      <Link href="/api/preview-exit" passHref>
        <Button
          className={classes.previewButton}
          variant="contained"
          color="primary"
        >
          Exit Preview Mode
        </Button>
      </Link>
    </div>
  );
}
