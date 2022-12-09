import styles from '@/components/Autocomplete/Autocomplete.module.css'
import {List} from '@/components/Autocomplete/List'
import {mod} from '@/lib/utils'
import {useEffect, useState} from 'react'
import {TextInput} from './TextInput'

interface Props {
  label: string
  disabled: boolean
  renderItem: any
  items: any[]
  onChange: (text: string) => void
  onSelect: (objectSelected: any) => void
}

export const Autocomplete = ({
  label = 'Search',
  disabled = false,
  ...props
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [showList, setShowList] = useState<boolean>(false)
  const [textValue, setTextValue] = useState<string>('')

  useEffect(() => {
    if (props.items && props.items.length > 0) setShowList(true)
  }, [props.items])

  // handle key down
  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (props.items.length > 0) {
        props.onSelect(props.items[selectedIndex])
        //if (inputRef.current) inputRef.current.value = entries[entryIndex].API
        setShowList(false)
      }
    }
    // handle arrow down for entry selection
    else if (event.key === 'ArrowDown') {
      event.preventDefault()

      if (props.items.length > 0) {
        const newIndex = mod(selectedIndex + 1, props.items.length)
        setSelectedIndex(newIndex)
      }
    }
    // handle arrow up for entry selection
    else if (event.key === 'ArrowUp') {
      event.preventDefault()

      if (props.items.length > 0) {
        const newIndex = mod(selectedIndex - 1, props.items.length)
        setSelectedIndex(newIndex)
      }
    }
  }

  const onInput = (event: any) => {
    event.preventDefault()
    //console.log('*** on input ', event, event.target.value, props.onChange)

    if (event?.target?.value) {
      setTextValue(event.target.value)
      props.onChange(event.target.value as string)
    }
  }

  return (
    <div className={styles.wrapper}>
      <TextInput
        className={
          props.items.length === 0 && textValue != '' ? 'danger' : 'primary'
        }
        label={label}
        disabled={disabled}
        minLen={3}
        autofocus={true}
        onKeyDown={onKeyDown}
        onInput={onInput}
        onClick={() => {
          setShowList(true)
        }}
        onClear={() => {
          setTextValue('')
          setShowList(false)
        }}
      />

      {textValue !== '' && showList && (
        <List
          items={props.items}
          renderItem={props.renderItem}
          selectedIndex={selectedIndex}
          onClick={(entrySelected: any, index: number) => {
            props.onSelect(entrySelected)
            //if (inputRef?.current) inputRef.current.value = entrySelected.API
            setSelectedIndex(index)
            setShowList(false)
          }}
        />
      )}
    </div>
  )
}
