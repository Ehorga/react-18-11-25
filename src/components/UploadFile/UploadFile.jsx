
import { useState } from 'react';
import styles from "./UploadFile.module.scss"
const UploadFile = () => {
    const [progress, setProgress] = useState(0);
    return (
        <article className={styles.upload}>
            <h2>
               Завантаження файлу 
            </h2>
            <div className={styles.progressBar}>
                <div></div>
            </div>
            <p>{progress}%</p>
            <button>Завантажити файл</button>
            <p>✅ Файл успішно завантажено</p>
        </article>
    );
}

export default UploadFile;
