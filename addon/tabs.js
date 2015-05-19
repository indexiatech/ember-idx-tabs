//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

/**
 * `{{em-tabs}}` component.
 *
 * The top level component for rendering tabs and their panes.
 *
 * Simplest usage:
 *
 * ```handlebars
 * {{#em-tabs}}
 *    {{#em-tab-list}}
 *       {{#em-tab}}ral{{/em-tab}}
 *       {{#em-tab}}Security{{/em-tab}}
 *       {{#em-tab}}Advanced{{/em=tab}}
 *    {{em-tab-list}}
 * {{/em-tabs}}
 * ```
 *
 * @class Tabs
 * @public
 */
export default Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
  debug: false,
  classNameBindings: ['styleClasses'],
  styleClasses: Em.computed(function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabsClasses')) != null ? _ref.join(" ") : void 0;
  }),
  styleBindings: ['height'],

  /**
   * A list of tab panels
   *
   * @property panels
   * @private
   * @type Array
   */
  panels: void 0,

  /**
   * A {{#crossLink "TabList"}}{{/crossLink}} component instance.
   *
   * @property tabList
   * @type TabList
   */
  tabList: void 0,

  /**
   * The selected tab instance.
   *
   * @property selectedTab
   * @type Tab
   * @private
   * @see Tab
   *
   */
  selected: void 0,

  /**
   * The index of the selected tab
   *
   * @property 'selected-idx'
   * @type Number
   */
  'selected-idx': 0,

  /**
   * Select the given tab.
   *
   * @method select
   * @param {Object} a tab instance to select.
   * @see selectedTab
   * @see selected-idx
   */
  select: function(tab) {
    if (!tab) {
      return;
    }
    if (this.get('debug')) {
      Em.debug("Selecting tab: " + (tab.get('index')));
    }
    this.set('selected', tab);
    return this.set('selected-idx', tab.get('index'));
  },

  /**
   * Initialize the tab panels array
   *
   * @method initTabPanels
   */
  initTabPanels: Em.on('init', function() {
    return this.set('panels', Em.ArrayProxy.create({
      content: Em.A()
    }));
  }),

  /**
   * Set the specified `TabList` instance.
   *
   * @method setTabList
   * @private
   */
  setTabList: function(tabList) {
    return this.set('tabList', tabList);
  },

  /**
   * Add the given `TabPanel` instance to the tabs panels.
   *
   * @method addTabPanel
   * @param panel {Object} The `TabPanel` instance to add.
   */
  addTabPanel: function(panel) {
    return this.get('panels').addObject(panel);
  },

  /**
   * Remove the given `TabPanel` instance from the tabs panels.
   *
   * @method removeTabPanel.
   * @param panel {Object} The `TabPanel` instance to remove.
   */
  removeTabPanel: function(panel) {
    return this.get('panels').removeObject(panel);
  }
});
