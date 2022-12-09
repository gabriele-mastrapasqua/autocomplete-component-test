import {List} from '@/components/Autocomplete/List'
import {Entry} from '@/interfaces/Entry'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AutocompleteList',
  component: List,
} as ComponentMeta<typeof List>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = args => <List {...args} />

export const Empty = Template.bind({})
Empty.args = {
  selectedIndex: 0,
  items: [],
  renderItem: (item: Entry) => item.API,
}
export const TwoElements = Template.bind({})
TwoElements.args = {
  selectedIndex: 0,
  items: [{API: 'item 1'}, {API: 'item 2'}],
  renderItem: (item: Entry) => item.API,
}
export const TwoElementsHighlightTheSecondItem = Template.bind({})
TwoElementsHighlightTheSecondItem.args = {
  selectedIndex: 1,
  items: [{API: 'item 1'}, {API: 'item 2'}],
  renderItem: (item: Entry) => item.API,
}
