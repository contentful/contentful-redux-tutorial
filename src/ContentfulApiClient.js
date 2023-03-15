const CONTENTFUL_SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const CONTENTFUL_CDA_TOKEN = import.meta.env.VITE_CONTENTFUL_CDA_TOKEN;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_CDA_TOKEN) {
  throw new Error("Contentful credentials are missing!");
}

export class ContentfulClient {
  BASE_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master`;
  contentType = "";

  constructor(type) {
    this.contentType = type;
  }

  async makeRequest(url) {
    try {
      const res = await fetch(
        `${this.BASE_URL}/${url}&access_token=${CONTENTFUL_CDA_TOKEN}`
      );
      const json = await res.json();

      return json;
    } catch (e) {
      console.log(`Fetch Err: ${e}`);
    }
  }

  async getItems(searchText) {
    let url = `/entries?content_type=${this.contentType}`;

    if (searchText) {
      url += `&fields.name[match]=${searchText}`;
    }

    const { items } = await this.makeRequest(url);

    return items;
  }

  async getAsset(id) {
    const url = `assets/${id}?content_type=${this.contentType}`;

    const { fields } = await this.makeRequest(url);

    return fields;
  }
}
