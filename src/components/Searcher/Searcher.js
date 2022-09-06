import React from "react";
import { Input } from 'antd'
import './Searcher.css'

const { Search } = Input;

const Searcher = ({ onChange }) => { 
    return (
        <Search className="searcher"
            placeholder='Search'
            onChange={onChange}
        />
    )
}

export default Searcher