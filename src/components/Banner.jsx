import React from 'react';
import { Grid, Image, Header, Icon, Segment } from "semantic-ui-react";
import psociales from '../img/psociales.png';

const BannerComponent = () => {
  return (
    <Segment color="purple">
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src="https://www.zapopan.gob.mx/wp-content/uploads/2011/06/Logo_DesarrolloCombate-1.png" />
          </Grid.Column>
          <Grid.Column>
            <Header>
              <br></br>
              <font color="#7C858C">
                <h2>Entrega de Beneficios Municipales  </h2>
                <Header.Subheader>
                  <font color="#7C858C"> <h3>Trabajando con corazón<Icon name="heart" size="small" /></h3></font>
                </Header.Subheader>
              </font>
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Image  src={psociales} size='small' wrapped />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
export default BannerComponent;