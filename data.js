//obrazki do galerii zdjęc, jak dodasz nowy obiekt to pojawi się kolejny obrazek
export const galleryData = [
	{
		img: 'images/img2.jpeg', //to jest ścieżka do obrazka
		descPL: '', // tu mozesz wpisywać opisy obrazków po polsku
		descEN: '', // tu mozesz wpisywać opisy obrazków po angielsku
	},
	{
		img: 'images/img3.jpeg',
		descPL: '',
		descEN: '',
	},

	{
		img: 'images/img_drink.jpg',
		alt: '',
		descPL: '',
		descEN: '',
	},
	{
		img: 'images/img6.jpg',
		descPL: '',
		descEN: '',
	},
	{
		img: 'images/img5.jpg',
		descPL: '',
		descEN: '',
	},
];
// teksty
export const texts = {
	pl: {
		mainTitle: 'The Landmark Supper Club', // tytuł na górze strony
		aboutTitle: 'The Landmark Supper Club', // tutuł w opisie na czerwonym tle
		aboutDesc:
			'Ogień, rytm i wspólne grillowanie w luźnej, nocnej atmosferze. Dbamy o świetny serwis i klimat, ale tutaj to Ty przejmujesz szczypce — bo największą frajdą jest grillowanie razem.', //opis na czerwonym tle
		conceptTitle: 'Wspólny ogień',
		conceptDesc:
			'Nie jesteśmy klasyczną restauracją. W centrum lokalu stoi duży grill, przy którym nasi goście sami przygotowują steki, sery, kiełbaski i to, na co akurat mają ochotę. Bez spiny, bez zadęcia — po prostu dobry vibe i jedzenie robione na własnych zasadach. Na klimatycznym Kazimierzu czekamy na Was codziennie aż do 2:00 w nocy. Gdy inne miejsca zwijają rolety, u nas dopiero zaczyna się najlepsza część wieczoru.',
		experienceTitle:
			'The Landmark Supper Club to luz, dobre drinki, zimne piwo, koncerty i wydarzenia na żywo — miejsce spotkań dla tych, którzy nie lubią kończyć nocy za wcześnie. Wpadajcie na ogień. Jesteśmy otwarci CODZIENNIE do 2:00 🙂',
		locationTitle: 'Lokalizacja',
		openingHoursTitle: 'Godziny otwarcia',
		menuTitle: 'Menu',
		reservations: 'Przyjmujemy rezerwacje dla większych grup.',
	},
	en: {
		mainTitle: 'The Landmark Supper Club',
		aboutTitle: 'The Landmark Supper Club',
		aboutDesc:
			'is a shared grill, shared table, and well-conducted evening. We take care of the rhythm, service, and atmosphere. You focus on the food and people',
		conceptTitle: 'Cook it yourself is the principle.',
		conceptDesc:
			'Everyone lends a hand and co-creates the flavor. We provide the space, proper fire, and high-quality ingredients. Cooking becomes part of the evening.',
		experienceTitle:
			'This format is for those who value good cuisine, attentive service, and shared time at one table.',
		locationTitle: 'Location',
		openingHoursTitle: 'Opening Hours',
		menuTitle: 'Menu',
		reservations: 'We accept reservations for larger groups.',
	},
};
//sekcja godzin otwarcia klubu
export const openingHours = {
	pl: ['Poniedziałek – Niedziela: &nbsp 18:00 – 02:00'],
	en: ['Monday – Sunday: 6:00 PM – 2:00 AM'],
};

//pobieranie zdjęć Menu w zależności od języka, jak chcesz dodać nowe zdjęcie to dołóż tutaj ścieżkę do zdjęcia, po przeciku i się pojawi kolejne zdjecie
export const menuImages = {
	pl: ['images/TLMSC MENU V2 PL.jpg'],
	en: ['images/TLMSC MENU V2 EN.jpg'],
};
