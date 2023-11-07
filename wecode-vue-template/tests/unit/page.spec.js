import { shallowMount } from '@vue/test-utils';
import Page from '@/components/Page.vue';

describe('Page.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'new Title';
    const wrapper = shallowMount(Page, {
      propsData: {
        title
      }
    });
    expect(wrapper.text()).toMatch(title);
  });
});
