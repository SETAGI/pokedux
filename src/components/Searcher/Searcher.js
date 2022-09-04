import React from "react";
import { Input } from 'antd'
import './Searcher.css'

const { Search } = Input;

const Searcher = () => {
    return (
        <Search className="searcher"
            placeholder='Search'
        />
    )
}

export default Searcher