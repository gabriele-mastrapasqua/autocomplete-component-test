interface Props {
  className: string
  children: any
  onClick?: () => void
}

export const ListItem = ({...props}: Props) => {
  return (
    <li className={props.className} onClick={props.onClick}>
      {props.children}
    </li>
  )
}
