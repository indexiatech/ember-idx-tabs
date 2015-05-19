import Em from 'ember';

export default Em.ArrayController.extend({
  needs: ['application'],
  model: Em.A([
    {route: 'gettingstarted', text: 'Getting Started'},
    {route: 'simple', text: 'Simple'},
    {route: 'styles', text: 'Styles'},
    {route: 'query_params', text: 'Query Params'},
    {route: 'controller_per_tab', text: 'Controller Per Tab'}
  ])
});