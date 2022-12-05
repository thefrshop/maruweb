import React from 'react';
import { Button } from 'antd';
import { randomInt } from 'crypto';

export default class test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 2,
        };
        this.a = 10;
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <h1>state: {data}</h1>
                <h1>variable: {this.a}</h1>
                <Button
                    onClick={() => {
                        this.setState({
                            data: Math.random(),
                        });
                    }}
                >
                    state 값 변경
                </Button>
                <Button
                    onClick={() => {
                        this.a = Math.random();
                    }}
                >
                    variable 값 변경
                </Button>
            </div>
        );
    }
}
// state: 변수 값이 바뀔 때 자동으로 리렌더링 시키기 위해서 사용
