import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

function CreationModal({ visible, setVisible, onSubmit }) {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Modal
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));
        onSubmit(data.new_collection);
      }}
      as="form"
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Crear colección
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          name="new_collection"
          placeholder="Nueva coleccion"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Cerrar
        </Button>
        <Button auto onClick={closeHandler}>
          Crear
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CreationModal;
