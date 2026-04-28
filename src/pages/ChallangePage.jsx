import React from 'react';
import ChallangeForm from '../components/ChallengeForm/ChallangeForm';

const ChallangePage = () => {
    return (
        <div>
            <h1>Teen Creator Camp</h1>
            <section>
                <h2>Заявка на участь</h2>
                <ChallangeForm/>
            </section>
            <section>
                <h2>Порада</h2>
                <p>Напиши в мотивації щось конкретне: який контент хочеш створити, яку гру мрієш зібрати або який трек записати. Так заявка виглядатиме сильніше.</p>
            </section>
        </div>
    );
}

export default ChallangePage;
