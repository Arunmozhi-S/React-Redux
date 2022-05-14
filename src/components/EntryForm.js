import React from 'react'
import {Form, Segment, Checkbox} from 'semantic-ui-react';

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense
  }) {
  return (
    <>
      <Form.Group>
        <Form.Input 
        icon='tags'
        width={12}
        label='Description'
        placeholder='New Shinny thing'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input 
        icon='dollar' 
        width={4} 
        label='Value' 
        placeholder='100.00' 
        iconPosition='left'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox toggle 
        label='isExpense' 
        checked={isExpense} 
        onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </>
  )
}

export default EntryForm