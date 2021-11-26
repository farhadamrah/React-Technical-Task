import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getUsers } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';
import { Link, Route, Switch } from 'react-router-dom';
import { BUTTON_TYPES, ROUTES, SPINNER_SIZES } from '../../config/constants';
import { hasData } from '../../utils/data';
import UserDetails from '../UserDetails/UserDetails';
import PostDetails from '../PostDetails/PostDetails';
import Spinner from '../../components/shared/Spinner/Spinner';

const HomePage = props => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.usersData);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            {!hasData(users) ? (
                <Spinner size={SPINNER_SIZES.medium} />
            ) : (
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-6 xl:gap-7 py-14'>
                    {users.map(user => (
                        <Card
                            className={'flex flex-col justify-between h-80 sm:w-58 xl:w-65 font-medium'}
                            key={user.id}
                        >
                            <div className='flex flex-col text-sm'>
                                <span className='font-bold mb-5'>{user.name}</span>

                                <div className='flex flex-col text-blue-600 mb-5 underline leading-4'>
                                    <span>{user.email}</span>
                                    <span>{user.phone}</span>
                                    <span>{user.website}</span>
                                </div>

                                <div className='flex flex-col leading-4'>
                                    <span>{user.company.name}</span>
                                    <span>{user.company.catchPhrase}</span>
                                    <span>{user.company.bs}</span>
                                </div>
                            </div>

                            <Link to={`${ROUTES.homePage.path}/user/${user.id}`}>
                                <Button type={BUTTON_TYPES.primary} className={'w-full'}>
                                    Details
                                </Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};

HomePage.propTypes = {};

export default HomePage;
