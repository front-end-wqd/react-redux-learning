import React from 'react';
import './list.scss';
import { Button, Input, List } from 'antd';
import { connect } from 'react-redux';
import { inputChange, clickButton, deleteItem } from './store/actionCreate';

const {Item} = List;

const ListDemo = props => {
    let {
        inputValue,
        listArr,
        inputChange,
        clickButton,
        deleteItem,
    } = props;
    return (
        <div className="list">
            <Input
                value={inputValue}
                placeholder='请输入'
                style={{ width: 160, margin: 10 }}
                onChange={inputChange}
            >
            </Input>
            <Button
                type='primary'
                onClick={clickButton}
            >提交</Button>
            <List
                bordered
                style={{width: 160, marginLeft: 10}}
            >
                {listArr.length ? listArr.map((item, index) => (
                    <Item onClick={()=>deleteItem(index)} key={index}>{item}</Item>
                )) : null}
            </List>
        </div>
    );
}

const mapStateToProps = state => ({
    inputValue: state.input,
    listArr: state.arr,
});

const mapDispatchToProps = dispatch => ({
    inputChange: (param) => dispatch(inputChange(param)),
    clickButton: () => dispatch(clickButton()),
    deleteItem: (param) => dispatch(deleteItem(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDemo);