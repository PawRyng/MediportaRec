import axios from "axios";
import { defer } from "react-router-dom";

export async function loader(perPage, page) {
  const tags = await axios
    .get(
      `https://api.stackexchange.com/2.3/tags?page=${parseInt(page)}&pagesize=${perPage}&order=desc&sort=popular&site=stackoverflow`
    )
    .catch((err) => {
      return { tags: err.response };
    });
  return defer({ tags });
}
