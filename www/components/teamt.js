jQuery(document).ready(function() 
{ 

	jQuery.ajaxSetup({
	    cache: false
	});

	$(".addnewassignment").click(function(e)
	{
		e.stopPropagation();
		e.preventDefault();
	
		var div = $(this).closest(".rowdata");
		var assign = $(".assignments",div);
		var options = div.data();
		var link = $(".schedule").data("addaction");
		jQuery.get(link, options, function(data) 
		{
			assign.append(data);
			$(".addnew input",div).focus();
		});
	});
	
});
	