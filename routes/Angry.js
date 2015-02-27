
/*
 * GET angry page.
 */

exports.view = function(req, res){
  res.render('Angry',{
  	 'projects': [
      {
        'image': 'js_icon.PNG',
        'id': 'name1'
      },
      {
        'image': 'python_icon.PNG',
        'id': 'name2'
      },
      {
        'image': 'linux_icon.PNG',
        'id': 'name3'
      }
    ]
  });
}
