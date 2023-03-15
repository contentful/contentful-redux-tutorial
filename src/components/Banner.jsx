import { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { fetchArtworks } from "../state/product.action";

function Banner() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();

    dispatch(fetchArtworks(searchText));
  }

  return (
    <div className="hero">
      <h1>Pearson Wood Craft Store </h1>

      <p className="text">
        You are at the best place to discover and collect classic items crafted
        from only the finest woods gathered from around the world.
      </p>

      <form onSubmit={handleSearch} className="banner-items">
        <div>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="searchbar"
            placeholder="Find a craft work"
          />
        </div>

        <div>
          <button onClick={handleSearch} className={"hero-button"}>
            Find Craftwork
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
