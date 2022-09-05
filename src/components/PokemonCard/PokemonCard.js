import React from "react";
import { Card } from "antd";
import StarButton from "../StarButton/StarButton";
import { useDispatch } from "react-redux";
import { setPokemonSelected } from "../../redux/slices/dataSlice";

const { Meta } = Card;

const PokemonCard = ({name, image, id, abilities, favorite}) => {
    
    const habilitiesJoined = abilities.map( ability => ability.ability.name ).join(', ');
    const dispatch = useDispatch()
    
    const handleOnClick = () => {
        dispatch(setPokemonSelected(id))
    }

    return(
        <Card
            title={name}
            cover={<img alt='pokemon' src={image}/>}
            extra={<StarButton isSelected={favorite} onClick={handleOnClick}/>}
        >
            <Meta description={habilitiesJoined}/>
        </Card>
    )
}

export default PokemonCard