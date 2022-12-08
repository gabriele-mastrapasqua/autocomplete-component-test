import '@/components/Autocomplete/style.input.css'
import {FormEvent, KeyboardEvent, useEffect} from 'react'

interface Props {
  label: string
  className: 'primary' | 'danger'
  minLen: number
  disabled: boolean
  inputref?: any
  autofocus?: boolean
  onKeyDown?: (event: KeyboardEvent) => void
  onInput?: (event: FormEvent) => void
  onClick?: (event: any) => void
  onClear: () => void
}

export const AutocompleteInput = ({
  label = 'Search',
  className = 'primary',
  minLen = 3,
  autofocus = true,
  disabled = false,
  ...props
}: Props) => {
  // mount
  useEffect(() => {
    if (autofocus && props.inputref) {
      const inputElement = props.inputref.current
      if (inputElement) {
        // autofocus on input if loaded
        inputElement.focus()

        //inputElement.addEventListener("keydown", handleKeyDown);
        //inputElement.addEventListener("input", handleInput);
        return () => {
          //inputElement.removeEventListener("keydown", handleKeyDown);
          //inputElement.removeEventListener("input", handleInput);
        }
      }
    }
  }, [])

  return (
    <>
      {/** input text */}
      <input
        className="input"
        ref={props.inputref}
        id="search"
        type="text"
        autoComplete="off"
        placeholder={`Input a minimum of ${minLen} characters to search...`}
        disabled={disabled}
        {...props}
      />
      {/*props.inputRef &&
        props.inputRef?.current &&
        props.inputRef?.current?.value.length >= minLen &&
        className === 'danger' && (
          <span className="error-message">No results found!</span>
        )*/}
      <button
        disabled={disabled}
        className="cancel-input-button"
        onClick={() => {
          if (props.inputref?.current) {
            props.inputref.current.value = ''
            props.onClear()
          }
        }}
      >
        X
      </button>

      <fieldset aria-hidden="true" className="fieldset">
        <legend className="legend">
          <span>{label}</span>
        </legend>
      </fieldset>
    </>
  )
}
