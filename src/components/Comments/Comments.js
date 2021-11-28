import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostComments } from '../../redux/actions/comments';
import { hasObjData } from '../../utils/data';
import { BUTTON_TYPES } from '../../config/constants';
import Button from '../shared/Button/Button';
import Card from '../shared/Card/Card';

const Comments = props => {
    const { showModal } = props;

    const [commentsIsShown, setCommentsIsShown] = useState(false);

    const { postId } = useParams();

    const dispatch = useDispatch();

    const comments = useSelector(state => state.comments.commentsData);

    useEffect(() => {
        dispatch(getPostComments(postId));
    }, [postId]);

    const showComments = () => setCommentsIsShown(!commentsIsShown);

    return (
        <>
            <div className='flex justify-between my-5'>
                <Button type={BUTTON_TYPES.link} onClick={showComments}>
                    {commentsIsShown ? 'Hide comments' : 'Show comments'}
                </Button>

                {commentsIsShown && (
                    <Button type={BUTTON_TYPES.link} onClick={showModal}>
                        Add comment
                    </Button>
                )}
            </div>

            {commentsIsShown &&
                hasObjData(comments) &&
                comments.map(comment => (
                    <Card className={'mb-5'} key={comment.id}>
                        <div className='flex justify-between mb-5'>
                            <span className='font-bold'>{comment.name}</span>
                            <Button type={BUTTON_TYPES.link}>{comment.email}</Button>
                        </div>
                        <div className='font-medium leading-5'>{comment.body}</div>
                    </Card>
                ))}
        </>
    );
};

Comments.propTypes = {
    showModal: PropTypes.func,
};

export default Comments;
