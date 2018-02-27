console.log("hello");

	// a user clicks a question
$('#toggle_h1').click(toggleAnswer_h1);
$('#toggle_h2').click(toggleAnswer_h2);
$('#toggle_h3').click(toggleAnswer_h3);

	// answer slides down

function toggleAnswer_h1() {
	event.preventDefault();
	$('#code_h1').slideToggle();
}
function toggleAnswer_h2() {
	event.preventDefault();
	$('#code_h2').slideToggle();
}
function toggleAnswer_h3() {
	event.preventDefault();
	$('#code_h3').slideToggle();
}


// hide all my answers
$('#code_h1').hide();
$('#code_h2').hide();
$('#code_h3').hide();


// every time 'aTag' is clicked - toggle visibility of hero_1 + hero_2 
// use example used in most recent CSS class

function togglehero (){
	event.preventDefault();
	console.log('togglestate');
	// $('#show-this-on-click').slideToggle();
	$('.hero_1').toggle();
	$('.hero_2').toggle();
}

$('.aTag_hero').click(togglehero);