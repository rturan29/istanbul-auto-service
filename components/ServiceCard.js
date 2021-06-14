import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },

  subHeading: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  text: {},
}));

const ServiceCard = ({ icon, title, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer} {...rest}>
      {icon}

      <Typography className={classes.subHeading} component='div'>
        {title}
      </Typography>
    </div>
  );
};

export default ServiceCard;
