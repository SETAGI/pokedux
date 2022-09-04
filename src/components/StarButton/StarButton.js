import React from "react";
import { Button } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ( {isSelected, onClick} ) => {

    const Icon = isSelected ? StarFilled : StarOutlined;
    
    return(
        <Button 
            icon={<Icon/>}
            onClick={onClick}
        />
    )
}

export default StarButton