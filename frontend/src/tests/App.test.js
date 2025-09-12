import { mount } from '@vue/test-utils'
import HelloWorld from '../frontend/src/App.vue'

test('renders message', () => {
  const wrapper = mount(App, { props: { msg: 'pronto' } })
  expect(wrapper.text()).toContain('pronto')
})
