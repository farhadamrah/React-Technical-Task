import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Modal from '../../../components/shared/Modal/Modal';
import FormItem from '../../../components/shared/Form/FormItem/FormItem';
import Input from '../../../components/shared/Form/Input/Input';
import Textarea from '../../../components/shared/Form/Textarea/Textarea';
import { addNewUserPost } from '../../../redux/actions/posts';

const AddPostModal = props => {
    const { isAddPostModalVisible, showAddPostModal, hideAddPostModal } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const dispatch = useDispatch();

    const { userId } = useParams();

    const onSubmit = async values => {
        await dispatch(addNewUserPost({ userId, values }));

        reset();
        hideAddPostModal();
    };

    const onCloseModal = () => {
        reset();
        hideAddPostModal();
    };

    return (
        <Modal
            name={'Add post'}
            isVisible={isAddPostModalVisible}
            showModal={showAddPostModal}
            hideModal={hideAddPostModal}
            onOk={handleSubmit(onSubmit)}
            onClose={onCloseModal}
        >
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <FormItem label={'Title'} hasValidationError={errors?.title} helpMessage={errors.title?.message}>
                    <Input type={'text'} {...register('title', { required: 'This field is required' })} />
                </FormItem>

                <FormItem label={'Body'} hasValidationError={errors?.body} helpMessage={errors.body?.message}>
                    <Textarea {...register('body', { required: 'This field is required' })} />
                </FormItem>
            </form>
        </Modal>
    );
};

AddPostModal.propTypes = {};

export default AddPostModal;
