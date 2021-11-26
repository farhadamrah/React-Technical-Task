import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Modal from '../../../components/shared/Modal/Modal';
import FormItem from '../../../components/shared/Form/FormItem/FormItem';
import Input from '../../../components/shared/Form/Input/Input';
import Textarea from '../../../components/shared/Form/Textarea/Textarea';
import { addNewPostComment } from '../../../redux/actions/comments';

const AddCommentModal = props => {
    const { isAddCommentModalVisible, showAddCommentModal, hideAddCommentModal } = props;

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const { postId } = useParams();

    const onSubmit = async values => {
        await dispatch(addNewPostComment({ postId, values }));

        reset();
        hideAddCommentModal();
    };

    const onCloseModal = () => {
        reset();
        hideAddCommentModal();
    };

    return (
        <Modal
            name={'Add comment'}
            isVisible={isAddCommentModalVisible}
            showModal={showAddCommentModal}
            hideModal={hideAddCommentModal}
            onOk={handleSubmit(onSubmit)}
            onClose={onCloseModal}
        >
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <FormItem label={'Name'} hasValidationError={errors?.name} helpMessage={errors.name?.message}>
                    <Input type={'text'} {...register('name', { required: 'This field is required' })} />
                </FormItem>

                <FormItem label={'Email'} hasValidationError={errors?.name} helpMessage={errors.name?.message}>
                    <Input type={'email'} {...register('email', { required: 'This field is required' })} />
                </FormItem>

                <FormItem label={'Body'} hasValidationError={errors?.name} helpMessage={errors.name?.message}>
                    <Textarea {...register('body', { required: 'This field is required' })} />
                </FormItem>
            </form>
        </Modal>
    );
};

AddCommentModal.propTypes = {};

export default AddCommentModal;
