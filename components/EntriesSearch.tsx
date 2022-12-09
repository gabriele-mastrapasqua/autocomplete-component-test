import {Autocomplete} from '@/components/Autocomplete/Autocomplete'
import '@/components/Autocomplete/style.css'
import {Entry} from '@/interfaces/Entry'
import {EntriesService} from '@/lib/services/EntriesService'
import {useState} from 'react'

interface Props {
  label: string
  disabled: boolean
  onObjectSelected: (objectSelected: Entry) => void
}

export const EntriesSearch = ({
  label = 'Search',
  disabled = false,
  ...props
}: Props) => {
  const [entries, setEntries] = useState<Entry[]>([])

  // handle text input from autocomplete
  const onChange = (text: string) => {
    if (text !== '' && text.length >= 3) {
      searchEntries({input: text}, (responseData?: any) => {
        console.log('*** response from api', responseData)
        setEntries(responseData.entries || []) // can be null on bad inputs
      })
    }
  }

  // handle on select of an object from autocomplete list
  const onSelect = (object: any) => {
    props.onObjectSelected(object as Entry)
  }

  // memo to memoize a throttled function that calls an API
  /*const searchEntries = useMemo(
    () => (request: {input: string}, callback: (responseData?: any) => void) => {
      EntriesService.debouncedSearch(request.input, (responseData: any) => {
        callback(responseData)
      })
    },
    [],
  )*/
  const searchEntries = (
    request: {input: string},
    callback: (responseData?: any) => void,
  ) => {
    EntriesService.debouncedSearch(request.input, (responseData: any) => {
      callback(responseData)
    })
  }

  return (
    <div className="wrapper">
      <Autocomplete
        label={label}
        disabled={disabled}
        onChange={onChange}
        onSelect={onSelect}
        items={entries}
        renderItem={(item: Entry) => <>{item.API}</>}
      />
    </div>
  )
}
