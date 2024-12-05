// WeatherWidget.spec.js
import { mount } from '@vue/test-utils'
import WeatherWidget from '../components/WeatherWidget.vue'

global.fetch = jest.fn()

describe('WeatherWidget', () => {
  let wrapper

  beforeEach(async () => {
    fetch.mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          main: {
            temp: 20,
            feels_like: 18,
            humidity: 65
          },
          weather: [{ description: 'clear sky' }]
        })
      })
    )
    wrapper = mount(WeatherWidget)
  })

  test('renders location title', () => {
    expect(wrapper.find('.location-title').text()).toBe('Toronto, CA')
  })

  test('displays temperature', async () => {
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.temperature').text()).toBe('20')
  })

  test('shows weather description', async () => {
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.weather-description').text()).toContain('clear sky')
  })

  test('refresh button exists', () => {
    expect(wrapper.find('.refresh-btn').exists()).toBe(true)
  })
})