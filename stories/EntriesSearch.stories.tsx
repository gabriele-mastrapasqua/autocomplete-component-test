import {EntriesSearch} from '@/components/EntriesSearch'
import {Entry} from '@/interfaces/Entry'
import {ComponentMeta, ComponentStory} from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/EntriesSearch',
  component: EntriesSearch,
} as ComponentMeta<typeof EntriesSearch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EntriesSearch> = args => (
  <EntriesSearch {...args} />
)

export const Search = Template.bind({})
Search.args = {
  disabled: false,
  label: 'Search',
  onObjectSelected: (entry: Entry) => {
    console.log('*** entry selected', entry)
  },
}
