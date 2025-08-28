import React, { lazy, Suspense } from 'react'
import styles from './NewsContent.module.css'
import { motion } from 'motion/react'
import download from '../../../../img/download.svg'
import type { News } from '../../../../shared/types'
import useGetNews from '@/features/hooks/newsHooks/useGetNews'

const LazyNewsItem = lazy(
    () => import('../../../../entitites/news/UI/NewsItem/NewsItem')
)

const NewsContent: React.FC = () => {
    const { news, isLoading } = useGetNews()

    return (
        <>
            <section className={styles.news}>
                <motion.h1
                    className={styles.news__title}
                    initial={{ top: -100, opacity: 0 }}
                    animate={{ top: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    Новости
                </motion.h1>
                {!isLoading ? (
                    <motion.ul
                        initial={{ left: -100, opacity: 0 }}
                        animate={{ left: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                        }}
                        className={styles.news__list}
                    >
                        {news &&
                            news.map((el: News) => (
                                <Suspense key={el.kinopoiskId}>
                                    <LazyNewsItem news={el} />
                                </Suspense>
                            ))}
                    </motion.ul>
                ) : (
                    <img
                        src={download}
                        className={styles.download}
                        alt="Loading..."
                    />
                )}
            </section>
        </>
    )
}

export default NewsContent
