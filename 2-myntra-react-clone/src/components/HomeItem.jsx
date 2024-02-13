import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { wishlistActions } from "../store/wishlistSlice";
import { FaRegHeart } from "react-icons/fa6";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const handelAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handelAddToWishlist = () => {
    dispatch(wishlistActions.addToWishlist(item.id));
  };
  const handelRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <div className="buttons-options">
          <button className="btn-remove-bag" onClick={handelRemoveFromBag}>
            Remove
          </button>
          <Link to="/bag">
            <button className="btn-remove-bag">
              Go To Bag <FaArrowRight className="arrow " />
            </button>
          </Link>
        </div>
      ) : (
        <div className="bag-buttons">
          <button className="btn-add-bag" onClick={handelAddToBag}>
            Add to Bag
          </button>

          <FaRegHeart className="wishlist" onClick={handelAddToWishlist} />
        </div>
      )}
    </div>
  );
};

export default HomeItem;
