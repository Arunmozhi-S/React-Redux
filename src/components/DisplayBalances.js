import React from 'react'
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({income, expenses}) {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color='green' label='Income:' value={income}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color='red' label='Expenses:' value={expenses}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances