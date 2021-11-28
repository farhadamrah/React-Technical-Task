import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';

const Backdrop = props => {
    const { hideModal, isVisible } = props;

    return (
        <div
            className={`min-h-screen bg-black fixed top-0 left-0 w-screen z-30 duration-300 ease-in-out ${
                isVisible ? 'opacity-60 visible' : 'opacity-0 invisible'
            }`}
            onClick={hideModal}
        />
    );
};

const ModalOverlay = props => {
    const { children, name, isVisible, onClose, onOk, okText, closeText } = props;

    return (
        <div
            className={`w-full fixed top-1/4 z-30 duration-300 ease-in-out ${
                isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
            <div
                className={`mx-auto w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-white border-2 border-gray-800 transition-all duration-300 ease-in-out ${
                    isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className='border-b-2 border-gray-800 px-1 py-0.5 font-medium'>{name}</div>

                <div className='px-7 py-5 flex flex-col'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-bold mb-5'>{name}</h1>
                        {children}
                    </div>
                    <div className='self-end'>
                        <Button type={'primary'} className={'py-1 w-24 mr-5'} onClick={onClose}>
                            {closeText}
                        </Button>
                        <Button type={'primary'} className={'py-1 w-24 bg-blue-800 text-white'} onClick={onOk}>
                            {okText}
                        </Button>
                    </div>
                </div>
                <div className='border-t-2 border-gray-800 h-6' />
            </div>
        </div>
    );
};

const Modal = props => {
    const {
        children,
        name,
        hideModal,
        isVisible,
        onOk,
        onClose,
        buttonProps: { closeText = 'Cancel', okText = 'Save' } = {},
    } = props;

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop hideModal={hideModal} isVisible={isVisible} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    name={name}
                    children={children}
                    isVisible={isVisible}
                    onOk={onOk}
                    onClose={onClose}
                    okText={okText}
                    closeText={closeText}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    );
};

Modal.propTypes = {
    name: PropTypes.string,
    isVisible: PropTypes.bool,
    okText: PropTypes.string,
    closeText: PropTypes.string,
};

export default Modal;
