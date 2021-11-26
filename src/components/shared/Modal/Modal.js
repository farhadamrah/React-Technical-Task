import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Button from '../Button/Button';
import FormItem from '../Form/FormItem/FormItem';
import Input from '../Form/Input/Input';
import Textarea from '../Form/Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../../redux/actions/modal';

const Backdrop = props => {
    const { hideModal } = props;

    return <div className='min-h-screen bg-black opacity-60 fixed top-0 left-0 w-screen z-30' onClick={hideModal} />;
};

const ModalOverlay = props => {
    const { children, name, isVisible, hideModal, onClose, onOk, okText, cancelText } = props;

    return (
        <div className='w-full fixed top-1/4 z-30'>
            <div className='mx-auto  w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-white border-2 border-gray-800'>
                <div className='border-b-2 border-gray-800 px-1 py-0.5 font-medium'>{name}</div>

                <div className='px-7 py-5 flex flex-col'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-2xl font-bold mb-5'>{name}</h1>
                        {children}
                    </div>
                    <div className='self-end'>
                        <Button type={'primary'} className={'py-1 w-24 mr-5'} onClick={onClose}>
                            {cancelText}
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
        showModal,
        hideModal,
        isVisible,
        onOk,
        onClose,
        buttonProps: { cancelText = 'Cancel', okText = 'Save' } = {},
    } = props;

    return (
        isVisible && (
            <>
                {ReactDOM.createPortal(<Backdrop hideModal={hideModal} />, document.getElementById('backdrop-root'))}

                {ReactDOM.createPortal(
                    <ModalOverlay
                        name={name}
                        children={children}
                        showModal={showModal}
                        hideModal={hideModal}
                        onOk={onOk}
                        onClose={onClose}
                        okText={okText}
                        cancelText={cancelText}
                    />,
                    document.getElementById('overlay-root')
                )}
            </>
        )
    );
};

Modal.propTypes = {};

export default Modal;
