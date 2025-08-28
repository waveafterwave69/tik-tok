import styles from './Header.module.css'
import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'
import logoImg from '../../../../img/logo.svg'
import profileImg from '../../../../img/profile.svg'
import searchImg from '../../../../img/search.svg'
import { useAppSelector, useAppDispatch } from '@/app/appStore'
import { switchForm } from '@/entitites/auth/model/loginSlice'
import { routesConfig } from '@/routes/routesConfig'
import type { IRoutes } from '@/shared/types'

const Header: React.FC = () => {
    const login = useAppSelector((state) => state.login)
    const dispatch = useAppDispatch()

    const openForm = () => {
        dispatch(switchForm())
    }

    return (
        <>
            <motion.header
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.header}
            >
                <div className={styles.header__row}>
                    <div className={styles.main__row}>
                        <Link to="/" className={styles.header__logo}>
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                src={logoImg}
                                alt="logo"
                            />
                        </Link>
                        <nav className={styles.header__nav}>
                            {routesConfig.map(
                                ({ url, text, isNav }: IRoutes) => (
                                    <div key={url}>
                                        {isNav && (
                                            <NavLink
                                                to={url}
                                                className={({ isActive }) =>
                                                    `${styles.nav__item} ${
                                                        isActive
                                                            ? styles.item__active
                                                            : ''
                                                    }`
                                                }
                                            >
                                                {text}
                                            </NavLink>
                                        )}
                                    </div>
                                )
                            )}
                        </nav>
                    </div>
                    <div className={styles.profile}>
                        <Link to="/movies" className={styles.profile__search}>
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                src={searchImg}
                                alt="search"
                                className={styles.profile__icon}
                            />
                        </Link>
                        {login.userProfile ? (
                            <Link
                                to="/profile"
                                className={styles.profile__open}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    src={profileImg}
                                    alt="profile"
                                    className={styles.profile__icon}
                                />
                            </Link>
                        ) : (
                            <button
                                onClick={openForm}
                                className={styles.profile__open}
                            >
                                <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    src={profileImg}
                                    alt="profile"
                                    className={styles.profile__icon}
                                />
                            </button>
                        )}
                    </div>
                </div>
            </motion.header>
        </>
    )
}

export default Header
