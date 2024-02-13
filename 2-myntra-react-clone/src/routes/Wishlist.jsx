import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";
const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = wishlistItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="wishlist-items-container">
            {finalItems.map((item) => (
              <WishlistItem item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Wishlist;
