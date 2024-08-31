const { exec } = require('child_process');
const nmap = require('node-nmap'); // Example: Using Nmap

nmap.nmapLocation = "nmap"; // Assuming Nmap is installed

// Example function to run a vulnerability scan
const runVulnerabilityScan = (url) => {
  return new Promise((resolve, reject) => {
    const scan = new nmap.NmapScan(url);

    scan.on('complete', (data) => {
      resolve(data);
    });

    scan.on('error', (error) => {
      console.error('Vulnerability scan error:', error); // Log the error
      reject('Vulnerability scan failed'); // Return a more descriptive error message
    });

    scan.startScan();
  });
};

const runDeAnonymization = (url) => {
  return new Promise((resolve, reject) => {
    exec(`deanon-tool ${url}`, (error, stdout, stderr) => {
      if (error) {
        console.error('De-anonymization error:', error); // Log the error
        return reject('De-anonymization failed'); // Return a more descriptive error message
      }
      resolve(stdout);
    });
  });
};



module.exports = {
  runVulnerabilityScan,
  runDeAnonymization,
};
