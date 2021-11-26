import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef } from 'react';

const textareaStyles = 'border-2 border-gray-800 w-full py-0.5 px-2';

const Textarea = forwardRef((props, ref) => {
    const { className, ...textareaProps } = props;

    return <textarea ref={ref} className={classNames(textareaStyles, className)} rows={6} {...textareaProps} />;
});

Textarea.propTypes = {};

export default Textarea;
