import { useState } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }) => {
  const [mountNode, setMountNode] = useState(document.body);
  return createPortal(children, mountNode);
};
