// src/components/SomeComponent.js

import React, { useEffect, useState } from 'react';
import { getTrafficData } from '../services/api';
import CircularProgress from '@mui/material/CircularProgress';

const SomeComponent = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrafficData = async () => {
      try {
        const data = await getTrafficData();
        setTrafficData(data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrafficData();
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        trafficData.map((item) => (
          <div key={item._id}>{item.data}</div>
        ))
      )}
    </div>
  );
};

export default SomeComponent;
