import React from "react";
import "./list.scss";
import { Button, Input, List } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import { inputChange, clickButton, deleteItem } from "./store/actionCreate";
import { INPUT_CHANGE, CLICK_BUTTON, DELETE_ITEM } from "./store/action";

const { Item } = List;

const ListDemo = () => {
  const dispatch = useDispatch();
  const { input, arr } = useSelector((state) => state.listReducer);
  return (
    <div className="list">
      <Input
        value={input}
        placeholder="请输入"
        style={{ width: 160, margin: 10 }}
        onChange={(e) =>
          dispatch({
            type: INPUT_CHANGE,
            value: e.target.value,
          })
        }
      ></Input>
      <Button
        type="primary"
        onClick={() =>
          dispatch({
            type: CLICK_BUTTON,
          })
        }
      >
        提交
      </Button>
      <List bordered style={{ width: 160, marginLeft: 10 }}>
        {arr.length
          ? arr.map((item, index) => (
              <Item
                onClick={() =>
                  dispatch({
                    type: DELETE_ITEM,
                    value: index,
                  })
                }
                key={index}
              >
                {item}
              </Item>
            ))
          : null}
      </List>
    </div>
  );
};

export default ListDemo;
