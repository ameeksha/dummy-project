import React from 'react';
import logo from '../dashboard.jpg'

const Dashboard = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: 758 }}>
        </div>
    );
}

export default Dashboard;