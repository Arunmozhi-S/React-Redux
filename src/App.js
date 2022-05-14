import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance size='small' label='Your Balance:' value='800.50'/>
      <DisplayBalances />
      <MainHeader title='History' type='h3' />
      <EntryLine description='income' value='$10.00' />
      <EntryLine description='expense' value='$10.00' isExpense />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
