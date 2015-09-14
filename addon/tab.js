//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
var computed = Em.computed;

/**
 * `{{tab}}` component
 * Add a new tab
 *
 * @class Tab
 */
export default Em.Component.extend(WithConfigMixin, {
  setTagName: Em.on('init', function() {
    return this.set('tagName', this.get('config.tabs.tabTag') || 'div');
  }),

  /**
   * Bind the specified attributes to the DOM element
   *
   * @property attributeBindings
   * @type Array
   */
  attributeBindings: ['active'],
  classNameBindings: ['styleClasses', 'selectedClass'],
  
  styleClasses: computed(function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabClasses')) != null ? _ref.join(" ") : void 0;
  }),

  selectedClass: computed('selected', function() {
    var _ref;
    if (this.get('selected')) {
      return (_ref = this.get('config.tabs.tabSelectedClasses')) != null ? _ref.join(" ") : void 0;
    } else {
      return null;
    }
  }),

  /**
   * A reference to the {{#crossLink "Tabs"}}Tabs{{/crossLink}} instance.
   * 
   * @property tabs
   * @type Tabs
   */
  tabs: computed.alias('parentView.parentView'),

  /**
   * A reference to the {{#crossLink "TabList}}TabList{{/crossLink}} instance.
   *
   * @property tabList
   * @type TabList
   */
  tabList: computed.alias('parentView'),

  /**
   * true if this tab is currently selected.
   *
   * @property selected
   * @type Boolean
   */
  selected: computed('tabs.selected', function() {
    return this.get('tabs.selected') === this;
  }),

  active: computed('selected', function() {
    if (this.get('selected')) {
      return "true";
    } else {
      return null;
    }
  }),

  index: computed('tabList.tab_instances.[]', function() {
    return this.get('tabList.tab_instances').indexOf(this);
  }),

  /**
   * Select this tab.
   *
   * Bound to `click` event.
   *
   * @method select
   */
  select: Em.on('click', function() {
    return this.get('tabs').select(this);
  }),

  /**
   * Select this tab if it matches the {{#crossLink "Tabs/select:method"}}selected-idx{{/crossLink}} property set by the Tabs component.
   *
   * @method selectByTabsParam
   * @private
   */
  selectByTabsParam: Em.on('didInsertElement', Em.observer('tabs.selected-idx', function() {
    var idx;
    if ((this.get('tabs.selected') != null) === this) {
      return;
    }
    idx = parseInt(this.get('tabs.selected-idx', 10));
    if (idx === this.get('index')) {
      return this.select();
    }
  })),

  /**
   * Register this tab in the {{#crossLink "TabList"}}{{/crossLink}} component instance.
   *
   * @method register
   * @private
   */
  register: Em.on('didInsertElement', function() {
    return this.get('tabList').addTab(this);
  }),

  /**
   * Unregister this tab from the {{#crossLink "TabList"}}{{/crossLink}} component instance.
   *
   * @method unregister
   * @private
   */
  unregister: Em.on('willDestroyElement', function() {
    return this.get('tabList').removeTab(this);
  })
});