//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

var computed = Em.computed;

export default Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
  classNameBindings: ['styleClasses'],
  styleClasses: Em.computed(function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabPanelClasses')) != null ? _ref.join(" ") : void 0;
  }),
  styleBindings: ['height'],
  attributeBindings: ['selected'],

  /**
   * The ancestor `Tabs` component
   * @property tabs
   * @type Tabs
   */
  tabs: computed.alias('parentView'),

  /**
   * A reference to the {{#crossLink "TabList}}TabList{{/crossLink}} instance.
   *
   * @property tabList
   * @type TabList
   */
  tabList: computed.alias('parentView.tabList'),

  /**
   * A reference to the {{#crossLink "Tabs}}{{/crossLink}}'s panels property.
   *
   * @property panels 
   * @type Array
   */
  panels: computed.alias('parentView.panels'),

  /**
   * The tab that refer to this tab pane
   *
   * @property tab
   * @type Tab
   */
  tab: Em.computed('panels.length', 'tabList.tab_instances.[]', function() {
    var index, tabs;
    index = this.get('panels').indexOf(this);
    tabs = this.get('tabList.tab_instances');
    return tabs && tabs.objectAt(index);
  }),
  selected: Em.computed('tab', 'tab.selected', function() {
    return this.get('tab.selected');
  }),
  changeVisibility: Em.observer('selected', function() {
    return this.$().css('display', this.get('selected') ? "" : 'none');
  }),
  register: Em.on('didInsertElement', function() {
    return this.get('tabs').addTabPanel(this);
  }),
  unregister: Em.on('willDestroyElement', function() {
    return this.get('tabs').removeTabPanel(this);
  })
});
