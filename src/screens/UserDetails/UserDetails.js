import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { deletePost, getUserPosts, removeUserPosts } from '../../redux/actions/posts';
import { getUser, removeUser } from '../../redux/actions/users';
import Card from '../../components/shared/Card/Card';
import { hasData } from '../../utils/data';
import AddPostModal from './AddPostModal/AddPostModal';
import Header from '../../components/Header/Header';
import useModal from '../../hooks/useModal';
import Spinner from '../../components/shared/Spinner/Spinner';
import { SPINNER_SIZES } from '../../config/constants';

const UserDetails = props => {
    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const { userId } = useParams();

    const user = useSelector(state => state.users.userData);
    const posts = useSelector(state => state.posts.postsData);

    const [isAddPostModalVisible, showAddPostModal, hideAddPostModal] = useModal();

    useEffect(() => {
        (async () => {
            await dispatch(getUser(userId));
            await dispatch(getUserPosts(userId));
        })();

        return () => {
            dispatch(removeUser());
            dispatch(removeUserPosts());
        };
    }, [userId]);

    const onDeletePostClick = id => {
        dispatch(deletePost({ id }));
    };

    return (
        <>
            {!hasData(posts) ? (
                <Spinner size={SPINNER_SIZES.medium} />
            ) : (
                <div>
                    <Header
                        name={user.name}
                        addButton
                        isVisible={isAddPostModalVisible}
                        showModal={showAddPostModal}
                        hideModal={hideAddPostModal}
                    />

                    {posts.map(post => (
                        <Card className={'flex items-center mb-2.5 relative'} key={post.title}>
                            <FontAwesomeIcon
                                icon='trash-alt'
                                className='text-blue-900 mr-3 cursor-pointer'
                                size='lg'
                                onClick={() => onDeletePostClick(post.id)}
                            />

                            <Link to={`${pathname}/${post.id}`} className='flex flex-auto items-center truncate'>
                                <span className='font-medium truncate pr-3'>{post.title}</span>
                                <FontAwesomeIcon
                                    icon='chevron-right'
                                    size='lg'
                                    className='text-blue-900 cursor-pointer absolute right-2'
                                />
                            </Link>
                        </Card>
                    ))}
                </div>
            )}

            <AddPostModal
                isAddPostModalVisible={isAddPostModalVisible}
                showAddPostModal={showAddPostModal}
                hideAddPostModal={hideAddPostModal}
            />
        </>
    );
};

UserDetails.propTypes = {};

export default UserDetails;
