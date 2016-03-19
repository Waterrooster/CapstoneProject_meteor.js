if (Meteor.isClient) {

Router.configure({
  layoutTemplate:'ApplicationLayout'
});

Router.route('/', function () {
  this.render('navigationBar',{
    to:"navBar"
  });
  this.render('heroContent',{
    to: "main"
  });
  this.render('sellingPoints',{
    to: "footer"
  });
});

Router.route('/collection', function(){
  this.render('navigationBar',{
    to:"navBar"
  });
  
});

}

if (Meteor.isServer) {

}
