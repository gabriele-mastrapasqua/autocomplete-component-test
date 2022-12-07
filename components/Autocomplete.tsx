import { useEffect, useRef, useState } from "react";
import { APIResult } from "@/interfaces/APIResult";
import debounce from "@/libs/debounce";
import { EntriesService } from "@/libs/services/EntriesService";

interface Props {
  label: string;
  disabled: boolean;
  onObjectSelected: (objectSelected: APIResult) => void;
}

export const Autocomplete = ({
  label = "Search",
  disabled = false,
  ...props
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [entries, setEntries] = useState<APIResult[]>([]);

  // mount
  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      console.log("*** input new ref", inputElement);

      // autofocus on input if loaded on dom
      inputElement.focus();

      // setup event handlers in uncontrolled element
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          console.log("*** input enter key ");

          event.preventDefault();
          if (entries.length > 0) props.onObjectSelected(entries[0]);
        }
      };
      const handleInput = (event: any) => {
        event.preventDefault();

        //console.log('*** input event ', event, inputRef?.current?.value);
        if (inputRef?.current?.value && inputRef?.current?.value.length >= 3) {
          const res = EntriesService.debouncedSearch(inputRef?.current?.value, (responseData: any) => {
            console.log('*** response from api', responseData)
            setEntries(responseData.entries || []); // can be null on bad inputs
          })
          /*.then(
            (response) => {
             
            }
          );*/
        }
      };

      inputElement.addEventListener("keydown", handleKeyDown);
      inputElement.addEventListener("input", handleInput);
      //inputElement.addEventListener("change", handleChange);
      return () => {
        inputElement.removeEventListener("keydown", handleKeyDown);
        inputElement.removeEventListener("input", handleInput);
      };
    }
  }, []);

  return (
    <>
      {/** input text */}

      <label htmlFor="search">{label}</label>
      <input
        ref={inputRef}
        id="search"
        type="text"
        autoComplete="off"
        disabled={disabled}
        {...props}
      />
      <span>Error message</span>

      {/** list results */}
      <div>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>{entry.API}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
