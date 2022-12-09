import {ListItem} from '@/components/Autocomplete/ListItem'
import '@/components/Autocomplete/style.list.css'

interface Props {
  selectedIndex: number
  items: any[]
  renderItem: any
  onClick: (objectSelected: any, index: number) => void
}

export const List = ({selectedIndex = 0, ...props}: Props) => {
  return (
    <div className="list-wrapper">
      <ul className="list">
        {props.items.map((item, index) => (
          <ListItem
            key={index}
            className={
              (selectedIndex === index ? 'list-item-highlight' : '') +
              ' list-item '
            }
            onClick={() => {
              props.onClick(item, index)
            }}
          >
            {props.renderItem(item)}
          </ListItem>
        ))}

        {props.items.length === 0 && (
          <ListItem className="list-item list-item-not-found">
            no elements found!
          </ListItem>
        )}
      </ul>
    </div>
  )
}
