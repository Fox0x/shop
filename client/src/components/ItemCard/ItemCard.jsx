import './ItemCard.css'
import StyledButton from "../UI/StyledButton/StyledButton";

const ItemCard = ({item, addItemToCart}) => {


    return (
        <div className={'card'}>
            <img className="round" src={item.image}
                 alt="." width="128px" height="128px"/>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="buttons">
                <StyledButton onClick={() => addItemToCart(item)} className="primary">
                    Купить {item.price} ₽
                </StyledButton>
            </div>
        </div>
    );
};

export default ItemCard;