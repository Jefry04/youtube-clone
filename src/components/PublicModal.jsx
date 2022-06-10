import React from 'react';
import { Modal } from '@mantine/core';

const PublicModal = ({ opened, children, onClose, size }) => {
  return (
    <Modal opened={opened} onClose={onClose} size={size} centered>
      {children}
    </Modal>
  );
};

export default PublicModal;
