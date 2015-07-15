Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/leaf/text/new', {
  name: 'leaf.text.new'
});

// Router.route('/items/new', {
//   name: 'items.new'
// });

Router.plugin('ensureSignedIn', {
  except: ['home', 'sign-in', 'sign-up']
});
