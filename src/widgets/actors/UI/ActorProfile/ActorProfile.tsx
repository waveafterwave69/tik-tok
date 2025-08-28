import type { ActorProfilee } from '../../../../shared/types'
import { validateBirth } from '../../../../shared/helpers/helpers'
import styles from './ActorProfile.module.css'
import { motion } from 'motion/react'

interface ActorProfileProps {
    actorInfo: ActorProfilee
}

const ActorProfile: React.FC<ActorProfileProps> = ({ actorInfo }) => {
    return (
        <>
            <motion.section
                className={styles.info}
                initial={{ right: -100, opacity: 0 }}
                animate={{ right: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                }}
            >
                <div className={styles.info__row}>
                    <a href={actorInfo.webUrl} target="_blank">
                        <motion.img
                            src={actorInfo.posterUrl}
                            alt=""
                            className={styles.info__img}
                            whileHover={{
                                scale: 1.015,
                            }}
                        />
                    </a>
                    <div className={styles.info__content}>
                        <h2 className={styles.info__title}>
                            {actorInfo.nameRu}
                        </h2>
                        <p className={styles.info__prof}>
                            Профессия: {actorInfo.profession}
                        </p>
                        {actorInfo.age && (
                            <p className={styles.info__prof}>
                                Возраст: {actorInfo.age}
                            </p>
                        )}
                        {actorInfo.growth > 0 && (
                            <p className={styles.info__prof}>
                                Рост: {actorInfo.growth} см
                            </p>
                        )}
                        <p className={styles.info__prof}>
                            Дата рождения: {validateBirth(actorInfo.birthday)}
                        </p>
                        {actorInfo.birthplace && (
                            <p className={styles.info__prof}>
                                Место рождения: {actorInfo.birthplace}
                            </p>
                        )}
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default ActorProfile
