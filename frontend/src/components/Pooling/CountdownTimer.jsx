import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ expiryTimestamp, isConfirmed }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(expiryTimestamp) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        if (isConfirmed) return;

        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    
    if (isConfirmed) {
         return <div className="text-xl font-bold text-green-800">Confirmed</div>;
    }

    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && interval !== 'seconds' && Object.keys(timerComponents).length === 0) {
            return;
        }
        timerComponents.push(
            <span key={interval}>
                {String(timeLeft[interval]).padStart(2, '0')}
            </span>
        );
    });

    return (
        <div className="text-2xl font-bold text-walmart-blue">
            {timerComponents.length ? timerComponents.reduce((prev, curr) => [prev, ' : ', curr]) : <span>Time's up!</span>}
        </div>
    );
};

export default CountdownTimer;