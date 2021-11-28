import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = props => {
    const { name, showModal } = props;

    const { goBack } = useHistory();

    const { pathname } = useLocation();

    return (
        <div className='py-10 flex items-center justify-between relative'>
            <div className='flex items-center text-blue-800 font-medium cursor-pointer relative z-20' onClick={goBack}>
                <FontAwesomeIcon icon='arrow-left' size='3x' className='mr-2' />
                <span>Back</span>
            </div>

            <div className='text-2xl font-medium absolute text-center w-full z-10'>{name}</div>

            {pathname.length < 13 && (
                <FontAwesomeIcon
                    icon='plus-circle'
                    size='3x'
                    cursor='pointer'
                    className='text-blue-800 border-2 border-black rounded-full z-20'
                    onClick={showModal}
                />
            )}
        </div>
    );
};

Header.propTypes = {
    name: PropTypes.string,
    showModal: PropTypes.func,
};

export default Header;
