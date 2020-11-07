import React, { useState } from "react"

import TodoList from "./TodoList"
import TodoFilter from "./TodoFilter"

import { Divider } from "antd"

const TodoContainer = () => {
    const [searchText, setSearchText] = useState(null)
    const [category, setCategory] = useState("all")

    return (
        <div>
            <TodoFilter
                searchHandler={setSearchText}
                categoryHandler={setCategory}
            />

            <Divider />

            <TodoList searchText={searchText} category={category} />
        </div>
    )
}

export default TodoContainer
