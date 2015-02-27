'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript connected!");
	$('ul.testing').click(boxClick);

	$("a.thumbnail").click(function(){
		//console.log($('div[id]').attr('id')); first try
		//console.log($(this).children().html());
		
		var profname = $(this).children().attr('id');
		var profimg = $(this).children().html();
		console.log(profimg.substr('<img'.length));
		$(".modal-title").html(profname + '<img class="searchImg" ' + profimg);
		$("#goal-modal").modal('show');
		var todelete = this;
		$('#delete').click(function(){
			var decision = confirm("Delete this goal?");
			if(decision){
				$(todelete).remove();
			}
			$("#goal-modal").modal('hide');
		});
	});
	////////////////////////////////

	$("input#message.btn.btn-default").click(function(){
		$("#messageform").modal('show');
	});

	$("input#editprofilebtn.btn.btn-default").click(function(){
		$("#editprofile").modal('show');
	});

	$("input#addgoalbtn.btn.btn-default").click(function(){
		$("#addgoal-modal").modal('show');
	});

	$('#goalbtn').click(function(){
		var decision = confirm("Are you sure you want to add this goal?");
		if (!decision) {
			boxClick();
		};
	});
	$('#profbtn').click(function(){
		console.log('clicked');
	});

	$('#sendmsg').click(function(e) {
		var decision = confirm("Are you sure you want to send this message?");
		if(decision){
			console.log('clicked');

			var name = $('#new-project-form #name').val();
			var email = $('#new-project-form #email').val();
			var summary = $('#new-project-form #summary').val();
			var json = {
				'name': name,
				'email': email,
				'summary': summary
			};
			console.log(json);

			window.location.href = "mailto:so@doge.com?subject="+name+"&body="+summary;
			alert("Opening email client");
		}else{
			alert("Message canceled");
		}

	});

   function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }
	
} //don't delete

function boxClick(e){
	event.preventDefault();
}

