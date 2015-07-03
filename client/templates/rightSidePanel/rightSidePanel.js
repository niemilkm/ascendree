Template.rightSidePanel.rendered = function() {
  $(".button-collapse").sideNav({
    //menuWidth: 300,
    edge: 'right',
    closeOnClick: true
  });
};

Template.rightSidePanel.helpers({
  tree1: function()
  {
    return "tree1";
  }
});
