import { Redirect, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ROUTES, SPINNER_SIZES } from '../../config/constants';
import Spinner from '../shared/Spinner/Spinner';

const HomePage = lazy(() => import('../../screens/HomePage/HomePage'));
const Layout = lazy(() => import('../Layout/Layout'));
const UserPage = lazy(() => import('../../screens/UserPage/UserPage'));

const Routes = props => {
    return (
        <Suspense fallback={<Spinner size={SPINNER_SIZES.medium} />}>
            <Layout>
                <Switch>
                    <Route exact path={ROUTES.homePage.path} component={HomePage} />
                    <Route path={ROUTES.userPage.path} component={UserPage} />
                    <Redirect to={ROUTES.homePage.path} />
                </Switch>
            </Layout>
        </Suspense>
    );
};

export default Routes;
