import { Container } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
      calculateIncomeAndExpenses();
    }
  }, [isOpen]);

  useEffect(() => {
    calculateIncomeAndExpenses();    
  }, [entries]);

  function calculateIncomeAndExpenses() {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.forEach(entry => {
      if (entry.isExpense) {
        totalExpense += entry.value;
      } else {
        totalIncome += entry.value;
      }
    });
    let balance = totalIncome - totalExpense;
    setBalance(balance);
    setIncome(totalIncome);
    setExpenses(totalExpense);
  }

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    const index = entries.findIndex(entry => entry.id === id);
    const result = entries[index];
    setDescription(result.description);
    setValue(result.value);
    setIsExpense(result.isExpense);
    setEntryId(id);
    setIsOpen(true);
  }

  function addEntry() {
    const result = entries.concat({id: entries.length + 1, description, value, isExpense});
    setEntries(result);
    resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance size='small' label='Your Balance:' value={balance}/>
      <DisplayBalances income={income} expenses={expenses} />
      <MainHeader title='History' type='h3' />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm 
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        addEntry={addEntry}
      />
      <ModalEdit
        isOpen={isOpen}  
        description={description}
        value={value}
        isExpense={isExpense}
        setIsOpen={setIsOpen}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000.00,
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 300.00,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50.00,
    isExpense: true
  }
]