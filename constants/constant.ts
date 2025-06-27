export interface GhibliMovie {
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  director: string;
  producer: string;
  studio: string;
  releaseYear: number;
  runtime: number; // in minutes
  genre: string[];
  description: string;
  videoSrc: string;
  className: string;
}

export const ghibliMovies: GhibliMovie[] = [
  {
    title: "Spirited Away",
    originalTitle: "千と千尋の神隠し",
    originalTitleRomanised: "Sen to Chihiro no Kamikakushi",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    studio: "Studio Ghibli",
    releaseYear: 2001,
    runtime: 125,
    genre: ["Fantasy", "Adventure", "Coming-of-age"],
    description:
      "A young girl enters a mysterious spirit world and must find a way to save her parents and return home.",
    videoSrc: "/videos/spirit.mp4",
    className: "card",
  },
  {
    title: "My Neighbor Totoro",
    originalTitle: "となりのトトロ",
    originalTitleRomanised: "Tonari no Totoro",
    director: "Hayao Miyazaki",
    producer: "Toru Hara",
    studio: "Studio Ghibli",
    releaseYear: 1988,
    runtime: 86,
    genre: ["Fantasy", "Family"],
    description:
      "Two young sisters move to the countryside and encounter magical creatures, including the gentle forest spirit Totoro.",
    videoSrc: "/videos/totoro.mp4",
    className: "card",
  },
  {
    title: "Princess Mononoke",
    originalTitle: "もののけ姫",
    originalTitleRomanised: "Mononoke Hime",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    studio: "Studio Ghibli",
    releaseYear: 1997,
    runtime: 134,
    genre: ["Fantasy", "Adventure", "Drama"],
    description:
      "A young warrior becomes involved in a struggle between forest gods and humans who consume its resources.",
    videoSrc: "/videos/mononoke.mp4",
    className: "card",
  },
  {
    title: "Howl's Moving Castle",
    originalTitle: "ハウルの動く城",
    originalTitleRomanised: "Hauru no Ugoku Shiro",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    studio: "Studio Ghibli",
    releaseYear: 2004,
    runtime: 119,
    genre: ["Fantasy", "Romance", "Adventure"],
    description:
      "A young woman, cursed by a witch, seeks refuge in a magical moving castle owned by the mysterious wizard Howl.",
    videoSrc: "/videos/howls.mp4",

    className: "card",
  },
  // ...add more movies as needed
];
