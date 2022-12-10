import styles from './List.module.css'
import {ListItem} from './ListItem'

interface Props {
  selectedIndex: number
  items: any[]
  renderItem: any
  onClick: (objectSelected: any, index: number) => void
}

export const List = ({selectedIndex = 0, ...props}: Props) => {
  return (
    <div className={styles.listWrapper}>
      <ul
        className={styles.list}
        data-cy="autocomplete-items-list"
        data-testid="autocomplete-items-list"
      >
        {props.items.map((item, index) => (
          <ListItem
            key={index}
            className={[
              selectedIndex === index ? styles.listItemHighlight : '',
              styles.listItem,
            ].join(' ')}
            onClick={() => {
              props.onClick(item, index)
            }}
          >
            {props.renderItem(item)}
          </ListItem>
        ))}

        {props.items.length === 0 && (
          <ListItem
            className={[styles.listItem, styles.listItemNotFound].join(' ')}
          >
            no elements found!
          </ListItem>
        )}
      </ul>
    </div>
  )
}
