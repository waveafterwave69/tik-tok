import styles from './NewFilms.module.css'
import React from 'react'
import { motion } from 'framer-motion'
import FilmSwiper from '@/entitites/films/UI/FilmSwiper/FilmSwiper'
import useGetNewFilms from '@/features/hooks/filmsHooks/useGetNewFilms'

const NewFilms: React.FC = () => {
    const { films } = useGetNewFilms()
    return (
        <>
            <motion.section
                initial={{ left: -100, opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.trends}
            >
                <FilmSwiper title="Новинки" films={films} buttonMore={true} />
            </motion.section>
        </>
    )
}

export default NewFilms
