import { Link } from 'react-router'
import styles from './NewsPromo.module.css'
import { motion } from 'motion/react'

const NewsPromo: React.FC = () => {
    return (
        <>
            <motion.section
                className={styles.news}
                initial={{ left: -100, opacity: 0 }}
                animate={{ left: 0, opacity: 1 }}
                transition={{
                    duration: 0.4,
                }}
            >
                <div className="container">
                    <div className={styles.news__row}>
                        <div className={styles.news__column}>
                            <p
                                className={`${styles.news__title} ${styles.title__1}`}
                            >
                                самые интересные новости
                            </p>
                        </div>
                        <Link to="/news">
                            <motion.div
                                className={styles.news__button}
                                whileHover={{ scale: 1.05 }}
                            >
                                Читать новости
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default NewsPromo
