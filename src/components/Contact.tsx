import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './Login_styles';

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.contactRoot}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.contactpaper}>
          <Typography component="h1" variant="h6" className={classes.info}>
            We are eager to hear from you. Get in touch with us today and let us know how can we be of service.
          </Typography>
          <Typography component="h1" variant="h6" className={classes.info}>
            123456789
          </Typography>
          <Typography variant="h6" color="textSecondary" className={classes.info}>
            <Link color="inherit" href="">
              info@wetravels.com
            </Link>
          </Typography>
          <Typography component="h1" variant="h5" className={classes.info}>
            Address:
          </Typography>
          <Typography component="h1" variant="h6" className={classes.info}>
            Shop 5 Behind XYZ, ABC Road WeTravels Mumbai(W)
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square className={classes.paper}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Contact Us
          </Typography>
          <Typography component="h1">We`&apos;`d love to hear from you.</Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.message}
                  variant="outlined"
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="message"
                  id="message"
                />
              </Grid>
            </Grid>
            <Button className={classes.submit} fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
