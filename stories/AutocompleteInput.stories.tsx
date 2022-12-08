import {AutocompleteInput} from '@/components/Autocomplete/AutocompleteInput'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AutocompleteInput',
  component: AutocompleteInput,
} as ComponentMeta<typeof AutocompleteInput>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AutocompleteInput> = args => (
  <AutocompleteInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  disabled: false,
  label: 'Search',
  className: 'primary',
  minLen: 3,
  autofocus: true,
}
export const Danger = Template.bind({})
Danger.args = {
  disabled: false,
  label: 'Error',
  className: 'danger',
  minLen: 3,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Search',
  className: 'primary',
}
