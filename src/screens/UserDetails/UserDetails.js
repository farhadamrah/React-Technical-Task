import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { deletePost, getUserPosts, removeUserPosts } from '../../redux/actions/posts';
import { hasArrData } from '../../utils/data';
import Card from '../../components/shared/Card/Card';

const UserDetails = props => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const { pathname } = useLocation();

    const posts = useSelector(state => state.posts.postsData);

    useEffect(() => {
        dispatch(getUserPosts(userId));

        return () => {
            dispatch(removeUserPosts());
        };
    }, [userId]);

    const onDeletePostClick = id => dispatch(deletePost({ id }));

    return (
        hasArrData(posts) &&
        posts.map(post => (
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
        ))
    );
};

export default UserDetails;
