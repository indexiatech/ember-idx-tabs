import Em from 'ember';
import IdxConfig from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-tabs',
  initialize: function() {
    var Config = Em.IdxConfig = Em.IdxConfig ? Em.IdxConfig : IdxConfig.create();

    var defaultConfig = Config.getConfig('default');
    if (!defaultConfig) {
        Config.addConfig('default');
        defaultConfig = Config.getConfig('default');
    }

    defaultConfig['tabs'] = {
        tabsTag: ['div'],
        tabTag: ['li'],
        tabListTag: ['ul'],
        tabsClasses: ['em-tabs'],
        tabClasses: ['em-tab'],
        tabListClasses: ['em-tab-list'],
        tabPanelClasses: ['em-tab-panel']
    }

    //Bootstrap
    var bsConfig = Config.getConfig('bs');
    if (!bsConfig) {
        Config.addConfig('bs');
        bsConfig = Config.getConfig('bs');
    }
    bsConfig['tabs'] = {
        tabTag: ['li'],
        tabListTag: ['ul'],
        tabListClasses: ['nav', 'nav-tabs'],
        tabPanelClasses: ['em-tab-panel'],
        tabSelectedClasses: ['active']        
    }
  }
};