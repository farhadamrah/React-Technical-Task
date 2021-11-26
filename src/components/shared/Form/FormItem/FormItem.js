import PropTypes from 'prop-types';

const FormItem = props => {
    const { children, label, hasValidationError, helpMessage } = props;

    return (
        <div className='flex flex-col sm:flex-row justify-center mb-5'>
            <label className='font-medium text-lg w-2/12'>{label}</label>

            <div className='w-full'>
                {children}

                {hasValidationError && <p className='text-red-700'>{helpMessage}</p>}
            </div>
        </div>
    );
};

FormItem.propTypes = {};

export default FormItem;
