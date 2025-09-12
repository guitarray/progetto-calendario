import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

test('renders message', () => {
  const wrapper = mount(App, { props: { msg: 'pronto' } })
  expect(wrapper.text()).toContain('pronto')
})
