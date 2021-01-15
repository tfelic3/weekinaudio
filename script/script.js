

let quotes = [
	{
		name: 'Nancy Pelosi',
		quote:
			'And we know that the President of the United States incited this insurrection, this armed rebellion against our common country. He must go. He is a clear and present danger to the nation that we all love.',
		imgPath: 'img/pelosioutline.png',
		audioPath: 'audio/pelosi-audio.mp3',
	},

	{
		name: 'Donald Trump',
		quote:
			"No true supporter of mine could ever harass or threaten their fellow Americans. If you do any of these things, you are not supporting our movement, you're attacking it and you're attacking our country. We cannot tolerate it.",
		imgPath: 'img/biden4x4.png',
		audioPath: 'audio/trump-audio.mp3',
	},
];

let audio1 = document.getElementById('pelosi-audio');

console.log(quotes);

let button = document.querySelector('button');
console.log(button);

let pelosiDiv = document.getElementById('pelosiimage');
let textBox = document.getElementById('textBox');

console.log(pelosiDiv);

$(button).on('click', function () {
    
   
    audio1.play();
    pelosiDiv.src = quotes[0].imgPath;
    textBox.innerHTML = " ' " + quotes[0].quote + " ' ";
   
});
/*
$(pelosiDiv).on('mouseout', function () {
	audio1.pause();
	pelosiDiv.src = 'img/pelosi.png';
});
*/
