import { debounce } from "@/lib/utils";
import axios from "axios";
import config from "@/lib/config";

const DEBOUNCE_TIMEOUT = 500;

export class EntriesService {
  private static executeSearch(searchValue: string, callbackResponse: any) {
    console.log(
      "*** API search ",
      searchValue,
      `${config.ENTRIES_API_URL}?title=${searchValue.toLowerCase()}`
    );

    // API call

    axios
      .get(`${config.ENTRIES_API_URL}?title=${searchValue.toLowerCase()}`)
      .then((response) => {
        callbackResponse(response.data);
      })
      .catch((err) => callbackResponse(null));
  }

  // declare a debounced funciton to rate-limit calling this function on input changes
  public static debouncedSearch = debounce(
    EntriesService.executeSearch,
    DEBOUNCE_TIMEOUT
  );
}
