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
      <h1>Pearson Wood Craft Auction </h1>

      <p className="text">
        You are at the best place to discover and collect classic items gathered
        from around the world.
      </p>

      <form onSubmit={handleSearch} className="banner-items">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
          placeholder="Find a craft work"
        />

        <button onClick={handleSearch} className={"hero-button"}>
          Find Craftwork
        </button>
      </form>
    </div>
  );
}

export default Banner;
