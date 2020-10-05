import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID gv1oUKcWSKzw6Y0DVIm42Uti2f_A13cETK-cpUoBZJ0",
  },
});
