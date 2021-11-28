import PropTypes from 'prop-types';
import classNames from 'classnames';

const cardStyle = 'border-2 p-4 border-gray-800';

const Card = props => {
    const { children, className, ...cardProps } = props;

    return (
        <div className={classNames(cardStyle, className)} {...cardProps}>
            {children}
        </div>
    );
};

Card.propTypes = {
    className: PropTypes.string,
};

export default Card;
