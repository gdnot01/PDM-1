export type CALProduct = {
  idCAL: string
  nameCAL: string
  priceCAL: number
  descriptionCAL: string
  imageCAL: string
  atributosCAL: CALAtributo[];
}

export type CALAtributo = {
  idCAL: string;
  rotuloCAL: string;
  valorCAL: string;
  raridadeCAL: string;
};

export const productsCAL: CALProduct[] = [
  {
    idCAL: "1",
    nameCAL: "Silly Cat",
    priceCAL: 49.90,
    descriptionCAL: "Avatar felino caótico e bem-humorado. Possui traços marcantes e alta raridade voltada para a cultura de memes da Web3.",
    imageCAL: "https://i.pinimg.com/736x/eb/e4/27/ebe427f8f29df29c005b04c398dd8b29.jpg",
    atributosCAL: [
      { idCAL: "1a", rotuloCAL: "CLASSE", valorCAL: "Meme Master", raridadeCAL: "15%" },
      { idCAL: "1b", rotuloCAL: "EXPRESSÃO", valorCAL: "Caótica", raridadeCAL: "8%" },
      { idCAL: "1c", rotuloCAL: "AURA", valorCAL: "Humor Vital", raridadeCAL: "22%" },
    ]
  },
  {
    idCAL: "2",
    nameCAL: "King Dogge",
    priceCAL: 69.90,
    descriptionCAL: "Canino da elite do metaverso. Com coroas ornamentadas e mantos reais de alta nobreza digital.",
    imageCAL: "https://i.pinimg.com/736x/12/3b/43/123b43673055ec87011b12c15e777861.jpg",
    atributosCAL: [
      { idCAL: "2a", rotuloCAL: "STATUS", valorCAL: "Realeza", raridadeCAL: "4%" },
      { idCAL: "2b", rotuloCAL: "CABEÇA", valorCAL: "Coroa Gold", raridadeCAL: "2%" },
      { idCAL: "2c", rotuloCAL: "MANTO", valorCAL: "Veludo Real", raridadeCAL: "10%" },
    ]
  },
  {
    idCAL: "3",
    nameCAL: "Ninja Monkey",
    priceCAL: 299.90,
    descriptionCAL: "Guerreiro silencioso das sombras equipado com trajes shinobi futuristas e pronto para combates no Cyberespaço.",
    imageCAL: "https://i.pinimg.com/1200x/eb/ce/7c/ebce7cceec8ad72be317b6240a572ced.jpg",
    atributosCAL: [
      { idCAL: "3a", rotuloCAL: "ESTILO", valorCAL: "Shinobi", raridadeCAL: "5%" },
      { idCAL: "3b", rotuloCAL: "ARMA", valorCAL: "Katana Cyber", raridadeCAL: "7%" },
      { idCAL: "3c", rotuloCAL: "ELEMENTO", valorCAL: "Sombra", raridadeCAL: "12%" },
    ]
  },
  {
    idCAL: "4",
    nameCAL: "Asian Alien",
    priceCAL: 99.90,
    descriptionCAL: "Viajante intergaláctico vestindo chapéu tradicional de palha e armadura ancestral de combate oriental, claramente um fã do oriente.",
    imageCAL: "https://i.pinimg.com/1200x/f5/00/64/f50064e8d2b0e816e5c1a80d8db2e4af.jpg",
    atributosCAL: [
      { idCAL: "4a", rotuloCAL: "ESPÉCIE", valorCAL: "Xeno-Alien", raridadeCAL: "9%" },
      { idCAL: "4b", rotuloCAL: "CHAPÉU", valorCAL: "Palha Ronin", raridadeCAL: "6%" },
      { idCAL: "4c", rotuloCAL: "ARMADURA", valorCAL: "Ósseo-Tech", raridadeCAL: "11%" },
    ]
  },
  {
    idCAL: "5",
    nameCAL: "Hacker Frog",
    priceCAL: 79.90,
    descriptionCAL: "Pepe Frog especialista em invasões inteligentes e visitante dos suburbíos digitais. Estudante mais fraco de informática da FMM",
    imageCAL: "https://i.pinimg.com/1200x/66/44/44/664444fef498c86e5a8b1e71f3f830a4.jpg",
    atributosCAL: [
      { idCAL: "5a", rotuloCAL: "FUNÇÃO", valorCAL: "Exploiter", raridadeCAL: "3%" },
      { idCAL: "5b", rotuloCAL: "EQUIP", valorCAL: "Óculos HUD", raridadeCAL: "14%" },
      { idCAL: "5c", rotuloCAL: "REDE", valorCAL: "Ethereum", raridadeCAL: "18%" },
    ]
  },
  {
    idCAL: "6",
    nameCAL: "Rick Skull",
    priceCAL: 109.90,
    descriptionCAL: "Cientista genial interdimensional na sua versão crânio. Equipado com seu clássico jaleco e aura de insanidade quântica.",
    imageCAL: "https://i.pinimg.com/736x/4e/d5/fe/4ed5fee0033ac602e447f12cf68a23b7.jpg",
    atributosCAL: [
      { idCAL: "6a", rotuloCAL: "CABEÇA", valorCAL: "Skull Quântico", raridadeCAL: "5%" },
      { idCAL: "6b", rotuloCAL: "ROUPA", valorCAL: "Jaleco Lab", raridadeCAL: "20%" },
      { idCAL: "6c", rotuloCAL: "UNIVERSO", valorCAL: "C-137", raridadeCAL: "1%" },
    ]
  },
  {
    idCAL: "7",
    nameCAL: "Doodle Ape",
    priceCAL: 89.90,
    descriptionCAL: "Primata desenhado no estilo doodle art urbano com contornos expressivos. Peça vibrante focada na estética street art.",
    imageCAL: "https://i.pinimg.com/736x/02/f2/30/02f230c7c916c97b0bb7791b6500226b.jpg",
    atributosCAL: [
      { idCAL: "7a", rotuloCAL: "ARTE", valorCAL: "Doodle Pop", raridadeCAL: "16%" },
      { idCAL: "7b", rotuloCAL: "TRAÇO", valorCAL: "Ink Urban", raridadeCAL: "25%" },
      { idCAL: "7c", rotuloCAL: "PALETA", valorCAL: "Vibrante", raridadeCAL: "10%" },
    ]
  },
  {
    idCAL: "8",
    nameCAL: "Shadow Wizard Money Gang",
    priceCAL: 67.67,
    descriptionCAL: "Mago místico das sombras envolvido em mantos roxos rituais. Mestre nas artes ocultas do mercado financeiro e feitiços virtuais.",
    imageCAL: "https://i.pinimg.com/736x/81/98/89/81988915a99b3a7d3bffd29a13b55318.jpg",
    atributosCAL: [
      { idCAL: "8a", rotuloCAL: "MAGIA", valorCAL: "Necromancia", raridadeCAL: "3%" },
      { idCAL: "8b", rotuloCAL: "VESTES", valorCAL: "Manto Roxo", raridadeCAL: "8%" },
      { idCAL: "8c", rotuloCAL: "FACÇÃO", valorCAL: "Money Gang", raridadeCAL: "2%" },
    ]
  },
]
