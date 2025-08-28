import React from 'react'
import styles from './Trends.module.css'
import { motion } from 'framer-motion'
import FilmSwiper from '@/entitites/films/UI/FilmSwiper/FilmSwiper'
import { useAppSelector } from '@/app/appStore'

const Trends: React.FC = () => {
    const data = useAppSelector((state) => state.data.data)

    return (
        <>
            <motion.section
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
                className={styles.trends}
            >
                <FilmSwiper
                    title="Лучшие фильмы"
                    films={data}
                    buttonMore={true}
                />
            </motion.section>
        </>
    )
}

export default Trends
