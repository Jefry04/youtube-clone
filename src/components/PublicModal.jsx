import React from 'react';
import { Modal } from '@mantine/core';

const PublicModal = ({ opened, children, onClose, size, title }) => {
  return (
    <Modal opened={opened} onClose={onClose} size={size} title={title} centered>
      {children}
    </Modal>
  );
};

export default PublicModal;
