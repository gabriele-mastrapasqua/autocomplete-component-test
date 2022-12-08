import '@/components/Autocomplete/style.list.css'

interface Props {
  index: number
  items: any[]
  keyToShow: string
  onClick: (objectSelected: any) => void
}

export const AutocompleteList = ({keyToShow = 'API', ...props}: Props) => {
  return (
    <div className="list-wrapper">
      <ul className="list">
        {props.items.map((item, index) => (
          <li
            key={index}
            className={
              (index === props.index ? 'list-item-highlight' : '') +
              ' list-item '
            }
            onClick={() => props.onClick(item)}
          >
            {item[keyToShow]}
          </li>
        ))}

        {props.items.length === 0 && <span>no elements found!</span>}
      </ul>
    </div>
  )
}
