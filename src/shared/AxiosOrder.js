import axios from "axios";
import { API } from "./Constant";

const instance = axios.create({
  baseURL: API,
});

export default instance;
