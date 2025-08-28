import FilmSwiper from '@/entitites/films/UI/FilmSwiper/FilmSwiper'
import type { Films } from '../../../../shared/types'
import styles from './SequelPrequelFilm.module.css'
import { motion } from 'framer-motion'

interface SequelPrequelFilmProps {
    sequalPrequal: Films[] | undefined
}

const SequelPrequelFilm: React.FC<SequelPrequelFilmProps> = ({
    sequalPrequal,
}) => {
    return (
        <>
            <motion.section
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.film}
            >
                <div className="container">
                    <FilmSwiper
                        title="Сиквелы и Приквелы"
                        films={sequalPrequal}
                        buttonFav={false}
                    />
                </div>
            </motion.section>
        </>
    )
}

export default SequelPrequelFilm
