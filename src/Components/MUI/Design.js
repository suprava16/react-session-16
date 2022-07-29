import React from 'react'
import { Button, Grid, Card, CardContent, Typography, CardActions } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
function Design() {
  return (
    <div>
      {/* <Button variant='contained' color='secondary' endIcon={<SendIcon/>}>Register</Button> */}
      {/* <Grid container style={{border:"3px solid red"}}>
      <Grid item xs={12} md={6} lg={4} style={{border:"3px solid green"}}>
        col-1
      </Grid>
      <Grid item xs={12} md={6} lg={4} style={{border:"3px solid green"}}>
        col-2
      </Grid>
      <Grid item xs={12} md={6} lg={4} style={{border:"3px solid green"}}>
        col-3
      </Grid>
    </Grid> */}


      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="red" fontWeight={600} gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h1">
                Nextstacks
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="red" fontWeight={600} gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h1">
                Nextstacks
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="red" fontWeight={600} gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h1">
                Nextstacks
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="red" fontWeight={600} gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h1">
                Nextstacks
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}

export default Design