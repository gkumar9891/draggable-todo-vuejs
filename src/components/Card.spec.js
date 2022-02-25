import { mount } from '@cypress/vue'
import Card from '../components/Card.vue'

it('renders a message', () => {
    const wrapper = mount(Card, {
    propsData: {
        title: 'Hello Cypress!',
        description: 'description hello world'
    },
    });

    console.log(wrapper);
})