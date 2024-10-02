import axios from "axios";

export const fetchArticles = async (query, page) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      orientation: "landscape",
      per_page: 16,
      page: page,
    },
    headers: {
      Authorization: "Client-ID Yp3sVTN3Ytpow4IutzWGaqia3-qUV8btXkAoy5g_xxo",
    },
  });
  return data;
};
