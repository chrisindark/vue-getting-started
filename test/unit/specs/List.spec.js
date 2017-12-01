import Vue from 'vue';
import List from '@/components/List';

describe('List.vue', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(List);
    const vm = new Constructor().$mount();

    expect(vm.$el.textContent)
      .to.contain('play games');
  });

  it('adds a new item to list on click', () => {
    const Constructor = Vue.extend(List);
    const vm = new Constructor().$mount();

    vm.newItem = 'brush my teeth';
    const button = vm.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    // vm._watcher.run();

    expect(vm.$el.textContent).to.contain('brush my teeth');
    expect(vm.listItems).to.contain('brush my teeth');
  });
});
