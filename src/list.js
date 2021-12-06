import React, { Component } from 'react';
import './list.scss';
import { Button, Input, List } from 'antd';

const {Item} = List;

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="list">
                <Input
                    placeholder='请输入'
                    style={{ width: 160, margin: 10 }}
                >
                </Input>
                <Button
                    type='primary'
                >提交</Button>
                <List
                    bordered
                    style={{width: 160, margin: 10}}
                >
                    <Item>123</Item>
                </List>
            </div>
        );
    }
}

export default ListDemo;