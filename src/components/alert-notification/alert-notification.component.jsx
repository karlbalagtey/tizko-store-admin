import React, { useState } from 'react';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertNotification = ({ success, message, error }) => {
    const [openStatus, setOpenStatus] = useState(true);

    const handleCloseStatus = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenStatus(false);
    };

    return (
        <div>
            {success != null ? (
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={openStatus}
                    autoHideDuration={4000}
                    onClose={handleCloseStatus}
                    // eslint-disable-next-line
                    key={`${'bottom' + 'right'}`}
                >
                    <Alert onClose={handleCloseStatus} severity="success">
                        {success}
                    </Alert>
                </Snackbar>
            ) : null}

            {message != null ? (
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={openStatus}
                    onClose={handleCloseStatus}
                    // eslint-disable-next-line
                    key={`${'bottom' + 'right'}`}
                >
                    <Alert onClose={handleCloseStatus} severity="info">
                        {message}
                    </Alert>
                </Snackbar>
            ) : null}

            {error != null ? (
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={openStatus}
                    onClose={handleCloseStatus}
                    // eslint-disable-next-line
                    key={`${'top' + 'center'}`}
                >
                    <Alert onClose={handleCloseStatus} severity="error">
                        {error}
                    </Alert>
                </Snackbar>
            ) : null}
        </div>
    );
}

export default AlertNotification;