import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../redux/actions/users';
import { BUTTON_TYPES, ROUTES } from '../../config/constants';
import { hasArrData } from '../../utils/data';
import Button from '../../components/shared/Button/Button';
import Card from '../../components/shared/Card/Card';

const HomePage = props => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.usersData);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        hasArrData(users) && (
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-7 py-14'>
                {users.map(user => (
                    <Card
                        className={'flex flex-col justify-between h-80 sm:w-58 2xl:w-11/12 font-medium'}
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
        )
    );
};

export default HomePage;
