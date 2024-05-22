import React, { useEffect } from 'react';
import { Container, Grid, Paper, Typography, Avatar, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import { useLocation } from "react-router-dom";

const EmployeeDetailPage = () => {
    const user = useLocation().state;
    //GrapgQL Queary
    // const YOUR_GRAPHQL_QUERY = `
    //   query Ship($shipId: ID!) {
    //     ship(id: $shipId) {
    //         year_built
    //         type
    //         status
    //         image
    //         id
    //         home_port
    //         active
    //         mmsi
    //         name
    //         position {
    //           longitude
    //           latitude
    //         }
    //         roles
    //         speed_kn
    //     }
    //   }
    // `;
    //API integration Effect 
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch(`https://spacex-production.up.railway.app/`, {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         query: YOUR_GRAPHQL_QUERY,
    //         variables: { shipId: uuid }, // Correctly include variables here
    //       }),
    //     });
  
    //     const result = await response.json();
    //     console.log(result);
    //   };
  
    //   fetchData();
    // }, [uuid]);
  
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
            <Avatar src={user.image} alt={user.name} style={{ width: '100px', height: '100px' }} />
            <div style={{ marginLeft: '20px' }}>
              <Typography variant="h4">{user.name}</Typography>
              <Typography variant="subtitle1">#{user.mmsi}</Typography>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Ship Attributes</Typography>
            <Divider />
            <List>
            <ListItem>
                <ListItemText primary="Name" secondary={user.name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ship MMSI" secondary={user.mmsi} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Home Port" secondary={user.home_port} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Type" secondary={user.type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Build Year" secondary={user.year_built} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Roles" secondary={user.roles} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Position Detail</Typography>
            <Divider />
            <List>
            <ListItem>
                <ListItemText primary="Latitude" secondary="1.2356478" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Longitude" secondary="2.3265417" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Speed" secondary="40 kl/h" />
              </ListItem>
            
            </List>
          </Paper>
          <Grid item xs={12} md={12} mt={3}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Capitan Detail</Typography>
            <Divider />
            <List>
            <ListItem>
                <ListItemText primary="Name" secondary="Mayur Jadhav" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary="example@gmail.com" />
              </ListItem>            
            </List>
          </Paper>
        </Grid>
        </Grid>
      
      </Grid>
    </Container>
  );
};

export default EmployeeDetailPage;
