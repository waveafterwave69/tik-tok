import styles from './Promo.module.css'
import PromoContent from '../../../../entitites/promo/UI/PromoContent/PromoContent'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import useGetRandomFilms from '@/features/hooks/filmsHooks/useGetRandomFilms'
import Spinner from '@/shared/UI/Spinner/Spinner'

const Promo: React.FC = () => {
    const { film } = useGetRandomFilms()

    return (
        <>
            {film ? (
                <section className={styles.promo}>
                    <motion.div
                        initial={{ left: -100, opacity: 0 }}
                        animate={{ left: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                        }}
                        className={styles.promo__row}
                    >
                        <Link to={`/movie/${film.kinopoiskId}`}>
                            <motion.img
                                whileHover={{
                                    scale: 1.02,
                                }}
                                src={film.posterUrl}
                                alt={film.nameOriginal}
                                className={styles.promo__bg}
                            />
                        </Link>
                        <PromoContent film={film} />
                    </motion.div>
                </section>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default Promo
