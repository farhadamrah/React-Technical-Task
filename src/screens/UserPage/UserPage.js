import { Redirect, Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { ROUTES } from '../../config/constants';
import UserDetails from '../UserDetails/UserDetails';
import PostDetails from '../PostDetails/PostDetails';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser, removeUser } from '../../redux/actions/users';
import { getUserPosts, removeUserPosts } from '../../redux/actions/posts';

const UserPage = props => {
    const dispatch = useDispatch();

    const { userId } = useParams();

    useEffect(() => {
        dispatch(getUser(userId));
        dispatch(getUserPosts(userId));

        return () => {
            dispatch(removeUser());
            dispatch(removeUserPosts());
        };
    }, []);

    return (
        <Switch>
            <Route exact path={ROUTES.postDetails.path} component={PostDetails} />

            <Redirect to={ROUTES.userDetails.path} />
        </Switch>
    );
};

export default UserPage;
