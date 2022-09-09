import { shallowMount } from '@vue/test-utils'
import registerPage from '@/components/registerPage.vue'

describe('HelloWorld.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(registerPage, {
        })
    })
    afterEach(() => {
        wrapper.unmount();
    })
    it('should check if component is rendered correctly', () => {
        expect(wrapper.vm).toBeTruthy();
    })
    it('Should call sucesspage when registration is done sucessfully!!', () => {
        wrapper.vm.navigateTo();
        expect(wrapper.vm.$router.push).toHaveBeenCalled();
    })
})
