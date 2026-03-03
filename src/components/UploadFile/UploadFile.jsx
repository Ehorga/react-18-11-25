import { useEffect, useState } from "react";
import styles from "./UploadFile.module.scss";
const UploadFile = () => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (isUploading === false) {
      return;
    }
    const idInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(idInterval);
          setIsLoaded(true);
          setIsUploading(false);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 300);
    return () => clearInterval(idInterval);
  }, [isUploading]);
  const startUpload = () => {
    setIsUploading(true);
    setProgress(0);
    setIsLoaded(false);
  };
  return (
    <article className={styles.upload}>
      <h2>Завантаження файлу</h2>
      <div className={styles.progressBar}>
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p>
      <button onClick={startUpload} disabled={isUploading}>
        {isUploading ? "Завантаження..." : "Завантажити файл"}
      </button>
      {isLoaded && <p>✅ Файл успішно завантажено</p>}
    </article>
  );
};

export default UploadFile;
