import { mount } from '@vue/test-utils'
import WeatherWidget from '../components/WeatherWidget.vue'

describe('WeatherWidget', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(WeatherWidget)
  })

  test('renders weather widget', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('shows Toronto location', () => {
    expect(wrapper.find('.location-title').text()).toBe('Toronto, CA')
  })

  test('has refresh button', () => {
    expect(wrapper.find('.refresh-btn').exists()).toBe(true)
  })
})