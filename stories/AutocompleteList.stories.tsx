import {AutocompleteList} from '@/components/Autocomplete/AutocompleteList'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AutocompleteList',
  component: AutocompleteList,
} as ComponentMeta<typeof AutocompleteList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AutocompleteList> = args => (
  <AutocompleteList {...args} />
)

export const Empty = Template.bind({})
Empty.args = {
  index: 0,
  items: [],
}
export const TwoElements = Template.bind({})
TwoElements.args = {
  index: 0,
  items: [{API: 'item 1'}, {API: 'item 2'}],
  keyToShow: 'API',
}
export const TwoElementsHighlightTheSecondItem = Template.bind({})
TwoElementsHighlightTheSecondItem.args = {
  index: 1,
  items: [{API: 'item 1'}, {API: 'item 2'}],
  keyToShow: 'API',
}
