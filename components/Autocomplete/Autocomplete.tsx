import { useEffect, useRef, useState, KeyboardEvent, FormEvent } from "react";
import { Entry } from "@/interfaces/Entry";
import { EntriesService } from "@/lib/services/EntriesService";
import { mod } from "@/lib/utils";
import { AutocompleteList } from "./AutocompleteList";

interface Props {
  label: string;
  disabled: boolean;
  onObjectSelected: (objectSelected: Entry) => void;
}

export const Autocomplete = ({
  label = "Search",
  disabled = false,
  ...props
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [entryIndex, setEntryIndex] = useState<number>(0);

  // mount
  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      // autofocus on input if loaded
      inputElement.focus();

      //inputElement.addEventListener("keydown", handleKeyDown);
      //inputElement.addEventListener("input", handleInput);
      return () => {
        //inputElement.removeEventListener("keydown", handleKeyDown);
        //inputElement.removeEventListener("input", handleInput);
      };
    }
  }, []);

  // handle key down on input
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (entries.length > 0) props.onObjectSelected(entries[entryIndex]);
    }
    // handle arrow down for entry selection
    else if (event.key === "ArrowDown") {
      event.preventDefault();

      if (entries.length > 0) {
        const newIndex = mod(entryIndex + 1, entries.length);
        setEntryIndex(newIndex);
      }
    }
    // handle arrow up for entry selection
    else if (event.key === "ArrowUp") {
      event.preventDefault();

      if (entries.length > 0) {
        const newIndex = mod(entryIndex - 1, entries.length);
        setEntryIndex(newIndex);
      }
    }
  };

  const onInput = (event: FormEvent) => {
    event.preventDefault();

    if (inputRef?.current?.value && inputRef?.current?.value.length >= 3) {
      EntriesService.debouncedSearch(
        inputRef?.current?.value,
        (responseData: any) => {
          console.log("*** response from api", responseData);
          setEntries(responseData.entries || []); // can be null on bad inputs
          if (responseData.entries && responseData.entries.length > 0) {
            setEntryIndex(0);
          }
        }
      );
    }
  };

  return (
    <>
      {/** input text */}

      <label htmlFor="search">{label}</label>
      <input
        ref={inputRef}
        id="search"
        type="text"
        autoComplete="off"
        placeholder="Input a minimum of 3 characters to search..."
        disabled={disabled}
        onKeyDown={onKeyDown}
        onInput={onInput}
        {...props}
      />

      {inputRef &&
        inputRef?.current &&
        inputRef?.current?.value.length >= 3 &&
        entries.length === 0 && (
          <span className="error-message">No results found!</span>
        )}

        <button className="autocomplete-cancel-input" onClick={() => {
          if(inputRef?.current){
            inputRef.current.value = ''
          }
        }}>X</button>

      {/** list results */}
      <AutocompleteList
        index={entryIndex}
        items={entries}
        keyToShow="API"
        onClick={(entrySelected: Entry) =>
          props.onObjectSelected(entrySelected)
        }
      />
    </>
  );
};
