module.exports = function (Doorman) {
	const interstellafacts = [
		'Only Shep, Earl and Octave speak in the film. Shep sings "Digital Love"; Octave sings "One More Time" and appears to convey information in "Short Circuit"; Earl talks to Stella during "Crescendolls", but is unheard.',
		'Daft Punk themselves make a brief cameo appearance in the film during the Golden Record Awards scene (obviously, losing to The Crescendolls); as the candidates are being named, they appear in the audience with their robotic faces saying "Happy" and "?", and they appear in the nominations reel with said robotic faces saying "Peace" and a star emoticon, followed by "Great" and a broken heart emoticon once the winner is announced.',
		'When Octave enters the record company\'s building, the security guard is watching a soccer match between France and Japan, with the score being even 1-1. The score later changes to 2-1 as France scores. Both members of Daft Punk are French, and Matsumoto is Japanese.',
		'The last scene of the film contains a lot of Daft Punk merchandise. What can be seen are vinyl records of Homework, Discovery (with side D being played on the record player), Alive 1997, and a DVD copy of D.A.F.T.',
		'The song featured in the end credits is listed as "Aerodynamic (Daft Punk Remix)", though this version differs from the remix featured in Daft Club.',
		'There\'s no dialogue in the entire film.',
		'The names of the characters can be found in the extras on the DVD. The band member\'s names are Octave (keyboard), Stella (the female bass player), Arpegius (the blond guitar player), and Baryl (drums). The hero that comes to the band\'s rescue is named Shep. The villain is named The Earl of Darkwood.',
		'In Earl de Darkwood\'s backstory, the aliens shown captured and disguised as humans are Wolfgang Amadeus Mozart, Jimi Hendrix, Ella Fitzgerald, Janis Joplin, and Jimmy Page.',
		'As documented in the Discovery liner notes, "Harder, Better, Faster, Stronger" contains a sample of "Cola Bottle Baby" by Edwin Birdsong.'
	];
	return {
		commands: [
			'interstellafact'
		],
		'interstellafact': {
			usage: '!interstellafact',
			description: 'Gives you a fact about the movie Interstella 5555.',
			process: (msg, suffix, isEdit, cb) => {
				var randomnumber = Math.floor(Math.random() * (interstellafacts.length - 1 + 1)) + 1;
				cb({
					embed: {
						color: Doorman.Config.discord.defaultEmbedColor,
						title: 'Interstella 5555 Fact',
						description: interstellafacts[randomnumber]
					}
				}, msg);
			}
		}
	}
}