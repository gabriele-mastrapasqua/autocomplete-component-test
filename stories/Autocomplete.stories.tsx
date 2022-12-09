import {Autocomplete} from '@/components/Autocomplete/Autocomplete'
import {Entry} from '@/interfaces/Entry'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Autocomplete> = args => (
  <Autocomplete {...args} />
)

export const Enabled = Template.bind({})
Enabled.args = {
  disabled: false,
  label: 'Search',
  items: [{API: 'item 1'}, {API: 'item 2'}],
  renderItem: (item: Entry) => item.API,
  onChange: text => {
    console.log('*** change', text)
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Search disabled',
  items: [],
  renderItem: (item: Entry) => item.API,
}
