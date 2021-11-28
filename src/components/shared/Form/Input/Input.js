import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef } from 'react';

const inputStyle = 'w-full border-2 border-gray-800 py-0.5 px-2';

const Input = forwardRef((props, ref) => {
    const { className, ...inputProps } = props;

    return <input ref={ref} className={classNames(inputStyle, className)} {...inputProps} />;
});

Input.propTypes = {
    className: PropTypes.string,
};

export default Input;
