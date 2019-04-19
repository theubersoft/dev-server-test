if (Meteor.isServer) {
  Meteor.settings.public.home = process.env.HOME
  Meteor.settings.public.environment = process.env.NODE_ENV
}

setTimeout(() => {
  console.log(Meteor.settings.public)
}, 500)