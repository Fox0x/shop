import './ItemCard.css'
import StyledButton from "../StyledButton/StyledButton";

const ItemCard = ({item, addToCart}) => {


    return (
        <div className={'card'}>
            <img className="round" src={item.itemImage}
                 alt="." width="128px" height="128px"/>
            <h3>{item.itemTitle}</h3>
            <p>{item.itemDescription}</p>
            <div className="buttons">
                <StyledButton onClick={() => addToCart(item)} className="primary">
                    Купить {item.itemPrice} ₽
                </StyledButton>
            </div>
        </div>
    );
};

export default ItemCard;