import styles from './Family.module.css'
import { motion } from 'motion/react'
import bgImg from '../../../../img/family__bg.png'
import { Link } from 'react-router'
import { setTheme } from '../../../../entitites/category/model/categorySlice'
import { useAppDispatch } from '@/app/appStore'

const Family: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(setTheme('KIDS_ANIMATION_THEME'))
    }

    return (
        <>
            <section className={styles.family}>
                <div className="container">
                    <div className={styles.family__content}>
                        <h2 className={styles.family__title}>
                            Смотрите фильмы всей семьёй!
                        </h2>
                        <p className={styles.family__text}>
                            Погрузитесь в мир волшебства и приключений с нашей
                            коллекцией фильмов и мультфильмов, созданных
                            специально для самых маленьких зрителей! Откройте
                            для себя яркие истории, которые подарят незабываемые
                            моменты радости и сблизят всю семью.
                        </p>
                        <img
                            src={bgImg}
                            alt="кунгуфупанда"
                            className={styles.family__img}
                        />

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className={styles.family__button}
                        >
                            <Link
                                to="/movies"
                                onClick={handleClick}
                                className={styles.family__link}
                            >
                                Смотреть
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Family
