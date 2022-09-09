import { shallowMount } from '@vue/test-utils'
import loginComponent from '@/components/login.vue'

describe('HelloWorld.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(loginComponent, {
        })
    })
    afterEach(() => {
        wrapper.unmount();
    })
    it('should check if component is rendered correctly', () => {
        expect(wrapper.vm).toBeTruthy();
    })
})
