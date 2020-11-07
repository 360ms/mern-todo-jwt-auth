import React from "react"

import { connect } from "react-redux"
import { InfoOutlined } from "@ant-design/icons"
import { Button, Checkbox, Col, List, Popconfirm, Row } from "antd"

import {
    setImportantTodo,
    completeTodo,
    deleteTodo,
} from "../../redux/actions/todoActions"

const TodoList = ({
    category,
    searchText,
    todos,
    setImportantTodo,
    completeTodo,
    deleteTodo,
}) => {
    let data = []

    if (todos) {
        switch (category) {
            case "all":
                data = todos
                break

            case "important":
                data = todos.filter((item) => item.important === true)
                break

            case "completed":
                data = todos.filter((item) => item.completed === true)
                break

            case "in-progress":
                data = todos.filter((item) => item.completed === false)
                break

            default:
                data = todos
                break
        }
    }

    return (
        todos && (
            <List
                bordered
                dataSource={
                    searchText
                        ? data.filter((item) =>
                              item.label
                                  .toLowerCase()
                                  .includes(searchText.toLowerCase())
                          )
                        : data
                }
                renderItem={(item) => (
                    <List.Item>
                        <Row className="w100 text-left">
                            <Col span={12}>
                                <Checkbox
                                    className="mr-1"
                                    checked={item.completed}
                                    onChange={completeTodo.bind(this, item._id)}
                                />
                                <span
                                    className={
                                        item.completed
                                            ? "completed-todo"
                                            : item.important
                                            ? "important-todo"
                                            : null
                                    }
                                >
                                    {item.label}
                                </span>
                            </Col>
                            <Col span={12} className="text-right">
                                <Button
                                    type="primary"
                                    className="mr-1"
                                    onClick={setImportantTodo.bind(
                                        this,
                                        item._id
                                    )}
                                >
                                    <InfoOutlined />
                                </Button>

                                <Popconfirm
                                    placement="left"
                                    title="Are you sure?"
                                    onConfirm={deleteTodo.bind(this, item._id)}
                                    okText="Delete"
                                    cancelText="Cancel"
                                >
                                    <Button
                                        type="text"
                                        className="delete-button"
                                    >
                                        Delete
                                    </Button>
                                </Popconfirm>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        )
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
})

export default connect(mapStateToProps, {
    setImportantTodo,
    completeTodo,
    deleteTodo,
})(TodoList)
