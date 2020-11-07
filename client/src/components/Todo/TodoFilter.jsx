import React from "react"

import { Select } from "antd"
import { PageHeader } from "antd"
import { NavLink } from "react-router-dom"
import { PlusOutlined } from "@ant-design/icons"

const { Option } = Select

const TodoFilter = ({ searchHandler, categoryHandler }) => {
    return (
        <div>
            <PageHeader
                className="todos"
                ghost={false}
                title="Todo list"
                extra={[
                    <input
                        onChange={(e) => searchHandler(e.target.value)}
                        placeholder="Search"
                        className="ant-input todo-search"
                        key="2"
                    />,
                    <NavLink
                        to="/create"
                        className="ant-btn ant-btn-primary"
                        key="3"
                    >
                        <PlusOutlined />
                    </NavLink>,
                    <Select
                        key="1"
                        defaultValue="all"
                        style={{ width: 120 }}
                        onChange={categoryHandler}
                    >
                        <Option value="all">All</Option>
                        <Option value="important">Important</Option>
                        <Option value="completed">Completed</Option>
                        <Option value="in-progress">In Progress</Option>
                    </Select>,
                ]}
            />
        </div>
    )
}

export default TodoFilter
