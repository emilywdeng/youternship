
/*
 * GET meetings page.
 */

exports.view = function(req, res){
  res.render('meetings',{
  	 'projects': [
      {
        'image': 'js_icon.PNG',
        'id': 'name1',
        'description': 'Welcome to your crash course to javascript! I recommend you check out some tutorials and come to me with any questions.'
      },
      {
        'image': 'python_icon.PNG',
        'id': 'name2',
        'description': 'Play around with string manipulation for a while. I want to see how you would reverse and capitalize a string on one line.'
      },
      {
        'image': 'linux_icon.PNG',
        'id': 'name3',
        'description': 'First thing to do is master installing applications. try sudo apt-get install cowsay to install a cute command line tool that has a cow say what you tell it to say.'
      }
    ]
  });
}
