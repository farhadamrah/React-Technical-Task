import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BUTTON_TYPES } from '../../../config/constants';

const BUTTON_STYLES = {
    [BUTTON_TYPES.primary]: 'p-4 border-2 border-gray-800 font-medium',
    [BUTTON_TYPES.link]: 'text-blue-700 font-medium underline',
};

const Button = props => {
    const { children, className, type, ...buttonProps } = props;

    return (
        <button
            className={classNames(BUTTON_STYLES[type], className)}
            style={type === BUTTON_TYPES.primary ? { boxShadow: '2px 2px 1px black' } : null}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

export default Button;
