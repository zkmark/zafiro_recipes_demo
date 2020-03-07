jQuery(document).ready(function() {

	"use strict";

	/***********************************************
	Custom js here
	************************************************/

	// sticky hover fix in iOS //
	(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document);

	// Input group custom file customization //
	$(".input-group").each(function(){
		var $this = $(this),
			inputGroupFileInput = $this.find(".custom-file-input"),
			inputGroupFocusBg = $this.find(".input-focus-bg");

		inputGroupFileInput.blur(function() {
			inputGroupFocusBg.toggleClass("custom-file-focus-bg");
		});
	});

	$(".custom-file-input:disabled").parent(".custom-file").addClass("input-group-file-disabled");

	// Remove text "x" from close utility //
	$('.close > span').empty();

	// Info box hover settings //
	setTimeout(function(){
		$('.info-box-1').each(function(){
			var infoBoxOneBtn = $(this).find('.info-box-btn'),
				infoBoxOneBtnHeight = infoBoxOneBtn.height();

			infoBoxOneBtn.css("margin-bottom", -infoBoxOneBtnHeight);
		});
		$('.info-box-2').each(function(){
			var infoBoxTwoBtn = $(this).find('.info-box-btn'),
				infoBoxTwoBtnHeight = infoBoxTwoBtn.outerHeight();

			infoBoxTwoBtn.css("margin-bottom", -infoBoxTwoBtnHeight);
		});
		$('.info-box-3').each(function(){
			var infoBoxFourDesc = $(this).find('.info-box-desc'),
				infoBoxFourDescHeight = infoBoxFourDesc.height();

			infoBoxFourDesc.css("margin-bottom", -infoBoxFourDescHeight);
		});
	}, 400);


	//
	// Modal settings
	$('#exampleModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text('New message to ' + recipient)
		modal.find('.modal-body input').val(recipient)
	})


	// Popover and Tooltip settings
	$(function () {

		$('.popover-btn').popover()

		$('.popover-btn-dark').popover({
			template: '<div class="popover popover-dark" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		})

		$('.toast').toast('show')

		$('.tooltip-btn').tooltip()

		$('.tooltip-btn-light').tooltip({
			template: '<div class="tooltip tooltip-light" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
		})

	})

});