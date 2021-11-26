import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUserPost, removeUserPost } from '../../redux/actions/posts';
import { hasData } from '../../utils/data';
import Comments from '../../components/Comments/Comments';
import Header from '../../components/Header/Header';
import { getUser, removeUser } from '../../redux/actions/users';
import useModal from '../../hooks/useModal';
import AddCommentModal from './AddCommentModal/AddCommentModal';
import Spinner from '../../components/shared/Spinner/Spinner';
import { SPINNER_SIZES } from '../../config/constants';

const PostDetails = props => {
    const dispatch = useDispatch();

    const { postId, userId } = useParams();

    const post = useSelector(state => state.posts.postData);
    const user = useSelector(state => state.users.userData);

    const [isAddCommentModalVisible, showAddCommentModal, hideAddCommentModal] = useModal();

    useEffect(() => {
        (async () => {
            await dispatch(getUserPost(postId));
            await dispatch(getUser(userId));
        })();

        return () => {
            dispatch(removeUserPost());
            dispatch(removeUser());
        };
    }, [postId, userId]);

    return !hasData(post) ? (
        <Spinner size={SPINNER_SIZES.medium} />
    ) : (
        <>
            <div>
                <Header name={user.name} />

                <h1 className='text-2xl lg:text-3xl font-bold text-center md:tracking-wide my-10'>{post.title}</h1>
                <p className='text-justify font-medium mb-12'>{post.body.toString().repeat(10)}</p>

                <Comments showModal={showAddCommentModal} />
            </div>

            <AddCommentModal
                isAddCommentModalVisible={isAddCommentModalVisible}
                showAddCommentModal={showAddCommentModal}
                hideAddCommentModal={hideAddCommentModal}
            />
        </>
    );
};

PostDetails.propTypes = {};

export default PostDetails;
