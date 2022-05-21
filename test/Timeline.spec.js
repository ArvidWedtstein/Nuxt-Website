import { mount } from '@vue/test-utils'
import Timeline from '@/components/timeline.vue'

describe('Timeline', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Timeline)
    expect(wrapper.vm).toBeTruthy()
  })
})
