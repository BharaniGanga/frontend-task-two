import { shallowMount } from '@vue/test-utils'
import successPage from '@/components/successPage.vue'

describe('HelloWorld.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(successPage, {
        })
    })
    afterEach(() => {
        wrapper.unmount();
    })
    it('should check if component is rendered correctly', () => {
        expect(wrapper.vm).toBeTruthy();
    })
})
