import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner.jsx";
import CraftCard from "../components/Card.jsx";
import { fetchArtworks } from "../state/product.action.js";
import "../App.css";

export function Index() {
  const dispatch = useDispatch();
  const { artworks } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchArtworks());

    return () => dispatch(fetchArtworks());
  }, [dispatch]);

  return (
    <div>
      <Banner />

      <div>
        <p style={{ textAlign: "center" }} className="text">
          {artworks.length} Craftwork {artworks.length > 1 && "s"} Available
        </p>
      </div>

      <ul className="cards-list">
        {artworks.map(({ fields }, idx) => {
          return (
            <li key={idx}>
              <CraftCard
                description={fields.description}
                name={fields.name}
                image={fields.image}
                price={fields.price}
                datePosted={fields.datePosted}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
