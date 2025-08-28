import type { Films } from '../../types'
import styles from './ButtonLike.module.css'

import { motion } from 'motion/react'

interface ButtonLikeProps {
    handleFn: () => void
    imgSrc: string
    imgName: string
    isActive: string | Films[] | undefined
    hoverColor: string
}

const ButtonLike: React.FC<ButtonLikeProps> = ({
    handleFn,
    imgSrc,
    imgName,
    isActive,
    hoverColor,
}) => {
    return (
        <>
            <motion.div whileHover={{ scale: 1.1 }} className={styles.button}>
                <button onClick={handleFn}>
                    <img
                        src={imgSrc}
                        alt={imgName}
                        className={styles.button__img}
                        style={{
                            filter:
                                isActive && isActive?.length > 0
                                    ? `${hoverColor}`
                                    : 'none',
                        }}
                    />
                </button>
            </motion.div>
        </>
    )
}

export default ButtonLike
