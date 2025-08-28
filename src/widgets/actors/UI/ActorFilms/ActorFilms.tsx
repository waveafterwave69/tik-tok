import styles from './ActorFilms.module.css'
import { motion } from 'framer-motion'
// @ts-ignore
import 'swiper/css'
import type { Films } from '../../../../shared/types'
import ActorFilmItem from '../../../../entitites/actor/UI/ActorFilmItem/ActorFilmItem'

interface ActorFilmsProps {
    films: Films[]
}

const ActorFilms: React.FC<ActorFilmsProps> = ({ films }) => {
    return (
        <>
            <motion.section
                initial={{ left: -100, opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.actor}
            >
                <div className="container">
                    <h2 className={styles.actor__title}>
                        Фильмы с уастием актёра
                    </h2>
                    <ul className={styles.actor__list}>
                        {films &&
                            films.map((film: Films) => (
                                <ActorFilmItem
                                    key={film.kinopoiskId}
                                    film={film}
                                />
                            ))}
                    </ul>
                </div>
            </motion.section>
        </>
    )
}

export default ActorFilms
