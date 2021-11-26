import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../../config/constants';
import HomePage from '../../screens/HomePage/HomePage';
import UserDetails from '../../screens/UserDetails/UserDetails';
import PostDetails from '../../screens/PostDetails/PostDetails';
import Layout from '../Layout/Layout';
import UserPage from '../../screens/UserPage/UserPage';

const Routes = props => {
    return (
        <Layout>
            <Switch>
                <Route exact path={ROUTES.homePage.path} component={HomePage} />
                <Route exact path={ROUTES.userDetails.path} component={UserDetails} />
                <Route exact path={ROUTES.postDetails.path} component={PostDetails} />

                <Redirect from={'/'} to={ROUTES.homePage.path} />
            </Switch>
        </Layout>
    );
};

Routes.propTypes = {};

export default Routes;
