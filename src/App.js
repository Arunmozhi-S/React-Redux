import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      <Header as='h1'>Budget</Header>

      <Statistic size='small'>
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>500.60</StatisticValue>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <StatisticLabel style={{textAlign:'left'}}>
                  Income:
                </StatisticLabel>
                <StatisticValue>1,045.50</StatisticValue>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <StatisticLabel style={{textAlign:'left'}}>
                  Expenses:
                </StatisticLabel>
                <StatisticValue>600.50</StatisticValue>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          {/* width is 16 for a grid row */}
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3}>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit'/>
              <Icon name='trash'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon='tags'
          width={12}
          label='Description'
          placeholder='New Shinny thing'
          />
          <Form.Input 
          icon='dollar' 
          width={4} 
          label='Value' 
          placeholder='100.00' 
          iconPosition='left'
          />
          <Button.Group style={{
            marginTop: 25
          }}>
            <Button>
              Cancel
            </Button>
            <Button.Or />
            <Button primary>OK</Button>
          </Button.Group>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
