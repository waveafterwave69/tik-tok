import styles from './MovieFacts.module.css'
import FactsItem from '../../../../entitites/films/UI/FactsItem/FactsItem'
import { useState } from 'react'
import type { FilmFactss } from '@/entitites/actor/model/types'
import type { Films } from '@/shared/types'

interface MovieFactsProps {
    film: Films | undefined
    filmFacts: FilmFactss[] | undefined
}

const MovieFacts: React.FC<MovieFactsProps> = ({ filmFacts, film }) => {
    const [max, setMax] = useState<number>(3)

    return (
        <>
            {filmFacts && (
                <div className={styles.facts}>
                    <div className="container">
                        <h2 className={styles.facts__title}>
                            Факты о фильме "{film?.nameRu}"
                        </h2>
                        <ul className={styles.facts__list}>
                            {filmFacts.map(({ text }, index) => (
                                <FactsItem
                                    key={index}
                                    text={text}
                                    index={index + 1}
                                    max={max}
                                />
                            ))}
                        </ul>
                        <div className={styles.buttons__row}>
                            <div className={styles.facts__btn}>
                                <button
                                    className={styles.facts__button}
                                    onClick={() => setMax(() => 3)}
                                    disabled={max == 3}
                                >
                                    Скрыть
                                </button>
                            </div>
                            <div className={styles.facts__btn}>
                                <button
                                    className={styles.facts__button}
                                    onClick={() => setMax((prev) => prev + 5)}
                                    disabled={max >= filmFacts.length}
                                >
                                    Больше
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieFacts
