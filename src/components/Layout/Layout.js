import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { pageHasHeader } from '../../utils/route';
import Header from '../Header/Header';

const Layout = props => {
    // const { pathname } = useLocation();

    // const user = useSelector(state => state.users.userData);

    return (
        <div className='min-h-screen pl-8 pr-8'>
            {/*{pageHasHeader(pathname) && <Header name={user.name} addButton />}*/}
            {props.children}
        </div>
    );
};

Layout.propTypes = {};

export default Layout;
