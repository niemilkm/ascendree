Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/leaf/new', {
  name: 'leaf.new'
});

// Router.route('/items/new', {
//   name: 'items.new'
// });

// Router.plugin('ensureSignedIn', {
//   only: ['dashboard']
// });
