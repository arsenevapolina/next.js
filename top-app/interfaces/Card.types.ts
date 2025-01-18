export interface Card {
  id: number;
  img: string;
  title: string;
  text: string;
  time: number;
  likes: number;
}

export const cardContent: Card[] = [
  {
    id: 1,
    img: "/card.png",
    title: "Как работать с CSS Grid",
    text: "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..",
    time: 3,
    likes: 4,
  },
];
