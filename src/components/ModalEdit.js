import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({
  isOpen,
  description,
  value,
  isExpense,
  setIsOpen,
  setDescription,
  setValue,
  setIsExpense
  }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)} negative>Close</Button>
        <Button onClick={() => setIsOpen(false)} positive>Ok</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit