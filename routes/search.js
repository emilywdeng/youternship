
/*
 * Connections page.
 */
/*
 var nodemailer = require('nodemailer');

 // create reusable transporter object using SMTP transport
 var transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
     user: 'unternshiphci@gmail.com',
     pass: 'hciproject'
   }
 });

 // NB! No need to recreate the transporter object. You can use
 // the same transporter object for all e-mails

 // setup e-mail data with unicode symbols
 var mailOptions = {
   from: 'Unternship HCI <foo@blurdybloop.com>', // sender address
   to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
   subject: 'Hello from Unternship', // Subject line
   text: 'Hello you wonderful person.', // plaintext body
   html: '<b>Hello you wonderful person.</b>' // html body
 };

 // send mail with defined transport object
 transporter.sendMail(mailOptions, function(error, info){
   if(error){
     console.log(error);
   }else{
     console.log('Message sent: ' + info.response);
   }
 });
*/
exports.view = function(req, res){
  res.render('search',{
  	 'mentor': [
      {
        'mentorName': 'Larry Page',
        'mentorImg': 'larrypage.jpg',
        'mentorMOOC': 'Search Engines',
        'mentorTeach': 'Search engine optimization, minimalist design, Java'
      },
      {
        'mentorName': 'Marissa Mayer',
        'mentorImg': 'marissa.jpg',
        'mentorMOOC': 'Product Management',
        'mentorTeach': 'HTML, CSS, Javascript'
      },
      {
        'mentorName': 'Pooja Sankar',
        'mentorImg': 'pooja.jpg',
        'mentorMOOC': 'Entrepreneurship',
        'mentorTeach': 'Management skills, Python'
      }
    ]
  });
}
