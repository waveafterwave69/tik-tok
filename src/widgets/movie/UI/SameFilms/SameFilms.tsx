import FilmSwiper from '@/entitites/films/UI/FilmSwiper/FilmSwiper'
import type { Films } from '../../../../shared/types'
import styles from './SameFilms.module.css'
import { motion } from 'framer-motion'

interface SameFilmsProps {
    sameFilms: Films[] | undefined
}

const SameFilms: React.FC<SameFilmsProps> = ({ sameFilms }) => {
    return (
        <>
            <motion.section
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.same}
            >
                <div className="container">
                    <FilmSwiper
                        title="Похожие фильмы"
                        buttonFav={false}
                        films={sameFilms}
                    />
                </div>
            </motion.section>
        </>
    )
}

export default SameFilms
