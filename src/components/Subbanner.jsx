import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Segment, Icon, Button } from "semantic-ui-react";
import LogOut from './LogOut'


const Subbanner = () => {
  const history = useHistory()
  return (
    <Segment color="grey" inverted tertiary size="mini">
      <Grid columns={3} divided>
        <Grid.Row verticalAlign="middle">
          <Grid.Column textAlign="left">
            <Button 
              size="large" basic inverted
              onClick = {() =>history.push('/events')} >
                <Icon name="home" />
                Inicio
            </Button>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <LogOut />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Subbanner;
