import React, { useState, useEffect } from 'react';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SpeedometerMeter = ({ goal = 10000 }) => {
  const [visitors, setVisitors] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch("https://mitdevelop.com/kidsadmin/api/visitors");
        const data = await response.json();
        const totalVisitors = Number(data.total_visitors || 0);
        setVisitors(totalVisitors);

        // Calculate percentage as (visitors / goal) * 100
        const calcPercentage = (totalVisitors / goal) * 100;
        setPercentage(Math.min(calcPercentage, 100));  // Ensure it never exceeds 100%
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisitors();
  }, [goal]);

  return (
    <div className="floating-icons">
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2">
        <div className="proggress-views w-24 h-24">
          <CircularProgressbar
            value={percentage}
            text={`${percentage.toFixed(1)}%`}
            styles={buildStyles({
              pathColor: '#f57f17',
              textColor: '#111827',
              trailColor: '#7474743b',
              textSize: '18px',
              pathTransitionDuration: 0.5,
            })}
          />
        </div>
    
      </div>
    </div>
  );
};

export default SpeedometerMeter;
