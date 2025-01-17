import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { Icon } from '../Icon';

const getSize = ({ small, large }) => {
  if (small) {
    return '1.25rem';
  }
  if (large) {
    return '1.75rem';
  }
  return '1.5rem';
};

const ActionButton = forwardRef(
  ({ icon, size = 'medium', color = 'default', children, ...props }, ref) => (
    <Button ref={ref} square size={size} type={color} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  )
);

ActionButton.displayName = 'ActionButton';

ActionButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ActionButton;
