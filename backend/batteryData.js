// This module handles battery data
// You can replace this with your own data source or database connection

// Sample battery information
const batteryInfo = {
    capacity: '3000 mAh',
    voltage: '3.7 V',
    chemistry: 'Lithium-ion'
};

// Function to get battery information
function getBatteryInfo() {
    return batteryInfo;
}

module.exports = { getBatteryInfo };
