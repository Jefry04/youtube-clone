import React from 'react';
import { Modal } from '@mantine/core';

const PublicModal = ({ opened, children, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose} centered>
      {children}
    </Modal>
  );
};

export default PublicModal;
