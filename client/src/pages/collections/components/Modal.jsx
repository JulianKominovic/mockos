import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

function CustomModal({
  visible,
  setVisible,
  onSubmit,
  title,
  children,
  onSubmitButton,
  submitButtonText,
  cancelButtonVariant,
  submitButtonVariant,
}) {
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
        onSubmit(data);
      }}
      as="form"
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          {title}
        </Text>
      </Modal.Header>
      <Modal.Body>
        {children || (
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            name="new_collection"
            placeholder="Nueva coleccion"
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          auto
          flat
          color={cancelButtonVariant || "error"}
          onClick={closeHandler}
        >
          Cerrar
        </Button>
        <Button
          auto
          color={submitButtonVariant}
          onClick={() => {
            onSubmitButton?.();
            closeHandler();
          }}
        >
          {submitButtonText || "Crear"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CustomModal;
