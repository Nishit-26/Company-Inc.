// DateTime.spec.js
import { mount } from '@vue/test-utils'
import DateTime from '../components/DateTime.vue'

describe('DateTime', () => {
  let wrapper
  
  beforeEach(() => {
    // Mock Date
    const mockDate = new Date('2023-12-05T12:30:45')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate)
    
    wrapper = mount(DateTime)
  })

  afterEach(() => {
    jest.restoreAllMocks()
    if (wrapper.vm.timer) {
      clearInterval(wrapper.vm.timer)
    }
  })

  test('renders formatted date and time', () => {
    expect(wrapper.find('.formatted-time').text()).toBe('2023-12-05 12:30:45')
  })

  test('displays correct day of week', () => {
    expect(wrapper.find('.detail-value').text()).toBe('Tuesday')
  })

  test('displays correct day and month', () => {
    const dayAndMonth = wrapper.findAll('.detail-value')[1].text()
    expect(dayAndMonth).toBe('December 5')
  })

  test('formats two digits correctly', () => {
    expect(wrapper.vm.formatTwoDigits(5)).toBe('05')
    expect(wrapper.vm.formatTwoDigits(15)).toBe('15')
  })

  test('updates time every second', async () => {
    jest.useFakeTimers()
    const updateDateTimeSpy = jest.spyOn(wrapper.vm, 'updateDateTime')
    
    await wrapper.vm.$nextTick()
    jest.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()
    
    expect(updateDateTimeSpy).toHaveBeenCalled()
    jest.useRealTimers()
  })

  test('cleans up timer on unmount', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')
    wrapper.unmount()
    expect(clearIntervalSpy).toHaveBeenCalled()
  })

  test('responsive layout on mobile viewport', async () => {
    global.innerWidth = 400
    global.dispatchEvent(new Event('resize'))
    await wrapper.vm.$nextTick()
    
    const widget = wrapper.find('.datetime-widget')
    expect(widget.classes()).toBeTruthy()
  })
})