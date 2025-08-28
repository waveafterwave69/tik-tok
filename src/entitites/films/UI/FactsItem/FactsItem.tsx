import styles from './FactsItem.module.css'
import { motion } from 'motion/react'

interface FactsItemProps {
    text: string
    index: number
    max: number
}

const FactsItem: React.FC<FactsItemProps> = ({ text, index, max }) => {
    return (
        <>
            {index <= max && (
                <motion.li className={styles.item} whileHover={{ scale: 1.03 }}>
                    <div
                        className={styles.item__text}
                        dangerouslySetInnerHTML={{
                            __html: `${index}. ${text}`,
                        }}
                    />
                </motion.li>
            )}
        </>
    )
}

export default FactsItem
