// components/ArrowButton.tsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{ direction: 'left' | 'right' }>`
  background: #ddd;
  border: none;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'left' ? 'left: -20px;' : 'right: -20px;')}
  z-index: 1;
`;

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return <Button direction={direction} onClick={onClick}>{direction === 'left' ? '<' : '>'}</Button>;
};

export default ArrowButton;
