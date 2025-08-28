import styles from './Spinner.module.css'

import download from '../../../img/download.svg'

const Spinner: React.FC = () => {
    return (
        <>
            <img src={download} className={styles.download} />
        </>
    )
}

export default Spinner
