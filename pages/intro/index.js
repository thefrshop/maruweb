import React from 'react';

import pstyles from '../page.module.css';
import Ceo from './ceo';
import Maru from './maru';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={pstyles.Section}>
                <Ceo {...this.props} />
                <Maru {...this.props} />
            </div>
        );
    }
}
