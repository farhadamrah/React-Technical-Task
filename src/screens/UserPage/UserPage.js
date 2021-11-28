import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import { getUser, removeUser } from '../../redux/actions/users';
import Header from '../../components/Header/Header';
import useModal from '../../hooks/useModal';
import AddPostModal from '../../components/AddPostModal/AddPostModal';

const UserDetails = lazy(() => import('../UserDetails/UserDetails'));
const PostDetails = lazy(() => import('../PostDetails/PostDetails'));

const UserPage = props => {
    const [isAddPostModalVisible, showAddPostModal, hideAddPostModal] = useModal();

    const dispatch = useDispatch();

    const { userId } = useParams();

    const user = useSelector(state => state.users.userData);

    useEffect(() => {
        dispatch(getUser(userId));

        return () => dispatch(removeUser());
    }, [userId]);

    return (
        <>
            <Header
                name={user.name}
                isVisible={isAddPostModalVisible}
                showModal={showAddPostModal}
                hideModal={hideAddPostModal}
            />

            <Switch>
                <Route exact path={ROUTES.userDetails.path} component={UserDetails} />
                <Route exact path={ROUTES.postDetails.path} component={PostDetails} />

                <Redirect to={ROUTES.userDetails.path} />
            </Switch>

            <AddPostModal
                isAddPostModalVisible={isAddPostModalVisible}
                showAddPostModal={showAddPostModal}
                hideAddPostModal={hideAddPostModal}
            />
        </>
    );
};

export default UserPage;
