const electron = require('electron').remote;
const { socket } = require('peerio-icebear');

/*
  When we receive power event there can be 3 cases:

  - We are authenticated (or at least we think we are, hehe) so we send the message.
  - We are disconnected, so whatever, server doesn't care anymore about our connection state.
  - We are connected, but not authenticated yet, can't even send the message.
 */

function suspendHandler() {
    console.log('The system is going to sleep');
    if (!socket.authenticated) return;
    socket.send('/auth/push/enable')
        .catch(err => {
            console.error(err);
            console.log('Failed to enable push notifications on OS sleep.');
        });
}

function resumeHandler() {
    console.log('The system is going to resume');
    if (!socket.authenticated) return;
    socket.send('/auth/push/disable')
        .timeout(3000) // short timeout here will let us avoid long lags in connection that happen after sleep
        .catch(err => {
            console.error(err);
            console.log('Connection seems to be broken after OS resume, forcibly reconnecting to avoid lag.');
            socket.reset();
        });
}

function start() {
    electron.powerMonitor.on('suspend', suspendHandler);
    electron.powerMonitor.on('resume', resumeHandler);
}

function stop() {
    electron.powerMonitor.removeListener('suspend', suspendHandler);
    electron.powerMonitor.removeListener('resume', resumeHandler);
}

module.exports = { start, stop };
