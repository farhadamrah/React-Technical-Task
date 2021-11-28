import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUserPost, removeUserPost } from '../../redux/actions/posts';
import useModal from '../../hooks/useModal';
import { hasObjData } from '../../utils/data';
import Comments from '../../components/Comments/Comments';
import AddCommentModal from '../../components/AddCommentModal/AddCommentModal';

const PostDetails = props => {
    const [isAddCommentModalVisible, showAddCommentModal, hideAddCommentModal] = useModal();

    const dispatch = useDispatch();

    const { postId } = useParams();

    const post = useSelector(state => state.posts.postData);

    useEffect(() => {
        dispatch(getUserPost(postId));

        return () => {
            dispatch(removeUserPost());
        };
    }, [postId]);

    return (
        hasObjData(post) && (
            <>
                <div>
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
        )
    );
};

export default PostDetails;
