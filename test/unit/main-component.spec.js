import MainComponent from '../../app/components/main-component/main-component.vue';

describe('mainComponent', () => {
  describe('when load the test', () => {

    it('sets the correct default data', () => {
      expect(typeof MainComponent.data).toBe('function');
      const defaultData = MainComponent.data();
      expect(defaultData.message).toBe('I am the main component!!');
    })
  });
});