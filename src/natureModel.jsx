const base = '/imgs';
const width = 1500;
const dir = 'big';

const model = [
  {
    name: 'Aurora',
    location: ' high-latitude regions (around the Arctic and Antarctic)',
    about: 'An aurora, also commonly known as the polar lights or Northern lights, is a natural light display in Earth\'s sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic). Auroras display dynamic patterns of brilliant lights that appear as curtains, rays, spirals, or dynamic flickers covering the entire sky.',
    imageLink: `https://raw.githubusercontent.com/Madhumitha2911/nature-gallery-images/main/${dir}/aurora.jpeg`,
    facts: ['The word "aurora" is derived from the name of the Roman goddess of the dawn, Aurora, who traveled from east to west announcing the coming of the sun.', 'Though it was Italian astronomer Galileo Galilei who coined the name "aurora borealis" in 1619 — after the Roman goddess of dawn, Aurora, and the Greek god of the north wind, Boreas — the earliest suspected record of the northern lights is in a 30,000-year-old cave painting in France(opens in new tab).'],
    route: 'aurora'
  },
  {
    name: 'Guanabara Bay',
    location: 'Southeast Brazil in the state of Rio de Janeiro',
    about: 'Guanabara Bay is 31 kilometers (19 mi) long and 28 kilometers (17 mi) wide at its maximum. Its 1.5 kilometers (0.93 mi) wide mouth is flanked at the eastern tip by the Pico do Papagaio (Parrot\s Peak) and the western tip by Pão de Açúcar (Sugar Loaf).',
    imageLink: `https://raw.githubusercontent.com/Madhumitha2911/nature-gallery-images/main/${dir}/guanabara-bay.jpg`,
    facts: ['The name Guanabara comes from the Tupi language, goanã-pará, from gwa "bay", plus nã "similar to" and ba\'ra "sea". Traditionally, it is also translated as "the bosom of sea".', 'Guanabara Bay\'s once rich and diversified ecosystem has suffered extensive damage in recent decades, particularly along its mangrove areas.'],
    route: 'guanabara-bay'
  },
  {
    name: 'Great Barrier Reef',
    location: 'Coral Sea, off the coast of Queensland, Australia',
    about: 'world\'s largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometers (1,400 mi) over an area of approximately 344,400 square kilometers (133,000 sq mi)',
    imageLink: `https://raw.githubusercontent.com/Madhumitha2911/nature-gallery-images/main/${dir}/great-barrier-reef.jpg`,
    facts: ['This reef structure is composed of and built by billions of tiny organisms, known as coral polyps. It supports a wide diversity of life and was selected as a World Heritage Site in 1981', 'A large part of the reef is protected by the Great Barrier Reef Marine Park, which helps to limit the impact of human use, such as fishing and tourism'],
    route: 'great-barrier-reef'
  },
  {
    name: 'Mount Everest',
    location: 'Mahalangur Himal sub-range of the Himalayas',
    about: 'Mount Everest (Nepali: सगरमाथा, romanized: Sagarmāthā; Tibetan: Chomolungma ཇོ་མོ་གླང་མ; Chinese: 珠穆朗玛峰; pinyin: Zhūmùlǎngmǎ Fēng) is Earth\'s highest mountain above sea level',
    imageLink: `https://raw.githubusercontent.com/Madhumitha2911/nature-gallery-images/main/${dir}/mount-everest.jpeg`,
    facts: ['Mount Everest attracts many climbers, including highly experienced mountaineers. There are two main climbing routes, one approaching the summit from the southeast in Nepal (known as the "standard route") and the other from the north in Tibet.', 'The first recorded efforts to reach Everest\'s summit were made by British mountaineers. As Nepal did not allow foreigners to enter the country at the time, the British made several attempts on the north ridge route from the Tibetan side'],
    route: 'mount-everest'
  },
  {
    name: 'Grand Canyon',
    location: 'Northern Arizona, encompasses Colorado River , United States',
    about: 'The Grand Canyon is a steep-sided canyon carved by the Colorado River',
    imageLink: `https://raw.githubusercontent.com/Madhumitha2911/nature-gallery-images/main/${dir}/grand-canyon.jpeg`,
    facts: ['The canyon and adjacent rim are contained within Grand Canyon National Park, the Kaibab National Forest, Grand Canyon–Parashant National Monument, the Hualapai Indian Reservation, the Havasupai Indian Reservation and the Navajo Nation.', 'President Theodore Roosevelt was a major proponent of the preservation of the Grand Canyon area and visited it on numerous occasions to hunt and enjoy the scenery.'],
    route: 'grand-canyon'
  },
  {
    name: 'Jeju Island',
    location: 'Korea Strait, southwest of South Jeolla Province, South Korea',
    about: 'Jeju Island is South Korea\'s largest island, covering an area of 1,833.2 km2 (707.8 sq mi), which is 1.83 percent of the total area of the country. It is also the most populous island in South Korea; in 2020, the resident registration population is about 670,000',
    imageLink: `https://github.com/Madhumitha2911/nature-gallery-images/blob/main/${dir}/jeju-island.jpeg?raw=true`,
    facts: ['The island lies in the Korea Strait, south of the Korean Peninsula, and South Jeolla Province. It is located 82.8 km (51.4 mi) off the nearest point on the peninsula.', 'Jeju is the only self-governing province in South Korea, meaning that the province is run by local inhabitants instead of politicians from the mainland.'],
    route: 'jeju-island'
  },
];

export default model;
