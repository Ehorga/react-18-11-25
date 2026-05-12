import React, { useState } from 'react';
import ChallangeForm from '../components/ChallengeForm/ChallangeForm';
import styles from "./pages.module.scss";
const ChallangePage = () => {
    const [challengData, setChallengData] = useState(null);
    return (
        <div className={styles.challenge}>
            <h1>Teen Creator Camp</h1>
            <section>
                <h2>Заявка на участь</h2>
                <ChallangeForm setChallengData= {setChallengData}/>
            </section>
            {challengData?<section><h2>Заявку прийнято</h2><p>{challengData.nickname}, ти в списку кандидатів</p></section>:
            <section>
                <h2>Порада</h2>
                <p>Напиши в мотивації щось конкретне: який контент хочеш створити, яку гру мрієш зібрати або який трек записати. Так заявка виглядатиме сильніше.</p>
            </section>}
        </div>
    );
}

export default ChallangePage;
