import { mount } from '@vue/test-utils'
import DateTime from '../components/DateTime.vue'

describe('DateTime', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = mount(DateTime)
  })

  test('renders datetime widget', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('shows clock display', () => {
    expect(wrapper.find('.digital-clock').exists()).toBe(true)
  })

  test('shows date section', () => {
    expect(wrapper.find('.date-details').exists()).toBe(true)
  })
})