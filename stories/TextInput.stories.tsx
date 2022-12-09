import {TextInput} from '@/components/Autocomplete/TextInput'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AutocompleteInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = args => (
  <TextInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  disabled: false,
  label: 'Search',
  minLen: 3,
  autofocus: true,
  onClear: () => {},
}
export const Danger = Template.bind({})
Danger.args = {
  disabled: false,
  label: 'Error',
  minLen: 3,
  onClear: () => {},
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Search',
  onClear: () => {},
}
