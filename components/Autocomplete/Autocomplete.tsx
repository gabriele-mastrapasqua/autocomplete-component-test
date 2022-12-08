import '@/components/Autocomplete/style.css'
import {Entry} from '@/interfaces/Entry'
import {EntriesService} from '@/lib/services/EntriesService'
import {mod} from '@/lib/utils'
import {FormEvent, KeyboardEvent, useRef, useState} from 'react'
import {AutocompleteInput} from './AutocompleteInput'
import {AutocompleteList} from './AutocompleteList'

interface Props {
  label: string
  disabled: boolean
  onObjectSelected: (objectSelected: Entry) => void
}

export const Autocomplete = ({
  label = 'Search',
  disabled = false,
  ...props
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [entries, setEntries] = useState<Entry[]>([])
  const [entryIndex, setEntryIndex] = useState<number>(0)
  const [showList, setShowList] = useState<boolean>(false)

  // handle key down on input
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (entries.length > 0) {
        props.onObjectSelected(entries[entryIndex])
        if (inputRef.current) inputRef.current.value = entries[entryIndex].API
        setShowList(false)
      }
    }
    // handle arrow down for entry selection
    else if (event.key === 'ArrowDown') {
      event.preventDefault()

      if (entries.length > 0) {
        const newIndex = mod(entryIndex + 1, entries.length)
        setEntryIndex(newIndex)
      }
    }
    // handle arrow up for entry selection
    else if (event.key === 'ArrowUp') {
      event.preventDefault()

      if (entries.length > 0) {
        const newIndex = mod(entryIndex - 1, entries.length)
        setEntryIndex(newIndex)
      }
    }
  }

  const onInput = (event: FormEvent) => {
    event.preventDefault()

    if (inputRef?.current?.value && inputRef?.current?.value.length >= 3) {
      EntriesService.debouncedSearch(
        inputRef?.current?.value,
        (responseData: any) => {
          console.log('*** response from api', responseData)
          setShowList(true)
          setEntries(responseData.entries || []) // can be null on bad inputs
          if (responseData.entries && responseData.entries.length > 0) {
            setEntryIndex(0)
          }
        },
      )
    }
  }

  return (
    <div className="wrapper">
      {/** input text */}
      <AutocompleteInput
        inputref={inputRef}
        className={
          entries.length === 0 && inputRef.current?.value != ''
            ? 'danger'
            : 'primary'
        }
        label={label}
        disabled={disabled}
        minLen={3}
        autofocus={true}
        onKeyDown={onKeyDown}
        onInput={onInput}
        onClick={() => {
          setShowList(true)
          inputRef?.current?.focus()
        }}
        onClear={() => {
          setShowList(false)
          inputRef?.current?.focus()
        }}
      />

      {/** list results */}
      {inputRef &&
        inputRef.current &&
        inputRef.current.value !== '' &&
        showList && (
          <AutocompleteList
            index={entryIndex}
            items={entries}
            keyToShow="API"
            onClick={(entrySelected: Entry, index: number) => {
              props.onObjectSelected(entrySelected)
              if (inputRef?.current) inputRef.current.value = entrySelected.API
              setEntryIndex(index)
              setShowList(false)
            }}
          />
        )}
    </div>
  )
}
