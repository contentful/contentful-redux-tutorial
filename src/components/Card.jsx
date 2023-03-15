import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";
import "../App.css";
import { ContentfulClient } from "../ContentfulApiClient";

const Card = ({ name, description, datePosted, price, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (image) {
        const Contentful = new ContentfulClient("woodcraftAuction");
        const data = await Contentful.getAsset(image?.sys.id);

        setImageUrl(`https:${data?.file?.url}`);
      }
    };
    fetchData();
  }, [image]);

  return (
    <div className="card">
      <div>
        <img alt={name} src={imageUrl} className="cover-image" />
      </div>

      <div>
        <div>
          <p className="title"> {name} </p>
          <div className="flex-row">
            <p> {price} </p>

            <p>
              {new Date(datePosted).toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
        </div>

        {documentToReactComponents(description)}
        <br />
        <div className="align-center">
          <button className="card-btn">Purchase {name}</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Card;
