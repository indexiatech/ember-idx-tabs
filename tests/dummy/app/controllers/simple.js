import Em from 'ember';
var set = Em.set;
var d = Em.debug;

export default Em.Controller.extend({
    tourSteps1: [
        {
            element: ".step1",
            title: "Title of my step",
            content: "Content of my step"
        },
        {
            element: ".step2",
            title: "Title of my step",
            content: "Content of my step"
        }
    ],

    actions: {
        start: function() {
            this.set('startTour1', true);
        },

        onShow: function() {
            d('on-show invoked');
        },

        onNext: function() {
            d('on-next invoked');
        },

        onPrev: function() {
            d('on-prev invoked');
        },

        onStart: function() {
            d('on-start invoked');
        },

        onEnd: function() {
            d('on-end invoked');
        }
    }
});