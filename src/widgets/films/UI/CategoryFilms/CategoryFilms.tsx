import React from 'react'
import styles from './CategoryFilms.module.css'
import { motion } from 'framer-motion'
import FilmSwiper from '@/entitites/films/UI/FilmSwiper/FilmSwiper'
import useGetCategory from '@/features/hooks/categoryHooks/useGetCategory'

const CategoryFilms: React.FC = () => {
    const { films } = useGetCategory()

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
                    title="Категории"
                    tags={true}
                    films={films}
                    buttonMore={true}
                />
            </motion.section>
        </>
    )
}

export default CategoryFilms
