
Template.leftSidePanel.created = function() {
  this.filterTree = new ReactiveVar(true);
  this.filterBranch1 = new ReactiveVar(true);
  this.filterBranch2 = new ReactiveVar(true);
};

Template.leftSidePanel.rendered = function() {
  // $(".button-collapse").sideNav();
};

Template.leftSidePanel.helpers({

  filterTree: function() {
    return Template.instance().filterTree.get();
  },

  filterBranch1: function() {
    return Template.instance().filterBranch1.get();
  },

  filterBranch2: function() {
    return Template.instance().filterBranch2.get();
  },

});

Template.leftSidePanel.events({

  'click [name=filterTree]': function(e) {
    e.preventDefault();
    if (Template.instance().filterTree.get())
      Template.instance().filterTree.set(false);
    else
      Template.instance().filterTree.set(true);
  },

  'click [name=filterBranch1]': function(e) {
    e.preventDefault();
    if (Template.instance().filterBranch1.get())
      Template.instance().filterBranch1.set(false);
    else
      Template.instance().filterBranch1.set(true);
  },

  'click [name=filterBranch2]': function(e) {
    e.preventDefault();
    if (Template.instance().filterBranch2.get())
      Template.instance().filterBranch2.set(false);
    else
      Template.instance().filterBranch2.set(true);
  },

});
