import { VolumeItem, ComplementaryGuideItem, FaqItem } from '../types';

export const VOLUMES_DATA: VolumeItem[] = [
  {
    id: 'vol-1',
    volumeNumber: 1,
    title: 'O Mundo da Bíblia',
    subtitle: 'Geografia, Impérios e Regiões das Escrituras',
    phrase: 'Cidades, regiões, rios, montanhas e cenários bíblicos de forma visual.',
    description: 'Entenda onde os principais acontecimentos das Escrituras se passaram.',
    accentColor: '#1B4958',
    badge: 'Volume 1',
    imageSrc: 'https://i.imgur.com/oYbpctK.png',
    coverImageTheme: 'world',
    mapHighlights: ['Crescente Fértil', 'Império Babilônico, Persa e Romano', 'Topografia do Oriente Médio']
  },
  {
    id: 'vol-2',
    volumeNumber: 2,
    title: 'Os Patriarcas',
    subtitle: 'De Ur dos Caldeus ao Sinai e Entrada em Canaã',
    phrase: 'As jornadas de Abraão, Isaque, Jacó e José, do Êxodo ao caminho para Canaã.',
    description: 'Acompanhe os deslocamentos e acontecimentos que marcaram essa parte da história bíblica.',
    accentColor: '#8C4827',
    badge: 'Volume 2',
    imageSrc: 'https://i.imgur.com/GCPoAHE.png',
    coverImageTheme: 'patriarchs',
    mapHighlights: ['Rota de Abraão', 'Descida e Saída do Egito', 'Jornada no Deserto e Tabernáculo']
  },
  {
    id: 'vol-3',
    volumeNumber: 3,
    title: 'Os Caminhos de Jesus',
    subtitle: 'Os Lugares e Trajetos dos Quatro Evangelhos',
    phrase: 'Lugares, regiões e trajetos da vida e do ministério de Jesus.',
    description: 'Visualize onde seus principais acontecimentos e deslocamentos ocorreram.',
    accentColor: '#B08830',
    badge: 'Volume 3',
    imageSrc: 'https://i.imgur.com/CfnIevz.png',
    coverImageTheme: 'jesus',
    mapHighlights: ['Mar da Galileia e Cidades Circunvizinhas', 'Caminho por Samaria', 'Jerusalém na Paixão']
  },
  {
    id: 'vol-4',
    volumeNumber: 4,
    title: 'As Viagens de Paulo',
    subtitle: 'As Rotas Missionárias no Mundo Mediterrâneo',
    phrase: 'Rotas, cidades e viagens missionárias pelo mundo mediterrâneo.',
    description: 'Acompanhe visualmente a expansão do Evangelho e os caminhos percorridos por Paulo.',
    accentColor: '#2B5349',
    badge: 'Volume 4',
    imageSrc: 'https://i.imgur.com/j0qZp6v.png',
    coverImageTheme: 'paul',
    mapHighlights: ['1ª, 2ª e 3ª Viagens Missionárias', 'Viagem a Roma e Naufrágio em Malta', 'As Igrejas do Novo Testamento']
  }
];

export const INSIDE_SLIDES_DATA = [
  {
    id: 'slide-1',
    url: 'https://i.imgur.com/zlX0JJf.png',
    alt: 'Página por dentro do Atlas Bíblico Visual - Volume 2'
  },
  {
    id: 'slide-2',
    url: 'https://i.imgur.com/DZLqZdP.png',
    alt: 'Página ilustrada do Atlas Bíblico Visual'
  },
  {
    id: 'slide-3',
    url: 'https://i.imgur.com/qfEj819.png',
    alt: 'Mapa e contexto do mundo bíblico'
  },
  {
    id: 'slide-4',
    url: 'https://i.imgur.com/FesrOcp.png',
    alt: 'Rotas e acontecimentos das Escrituras'
  },
  {
    id: 'slide-5',
    url: 'https://i.imgur.com/Jzq702f.png',
    alt: 'Página por dentro do Atlas Bíblico Visual - Volume 1'
  },
  {
    id: 'slide-6',
    url: 'https://i.imgur.com/kK9to3m.png',
    alt: 'Página por dentro do Atlas Bíblico Visual - Volume 2'
  },
  {
    id: 'slide-7',
    url: 'https://i.imgur.com/mCGptPf.png',
    alt: 'Página por dentro do Atlas Bíblico Visual - Volume 4'
  },
  {
    id: 'slide-8',
    url: 'https://i.imgur.com/eeso4lO.png',
    alt: 'Página por dentro do Atlas Bíblico Visual - Volume 3'
  }
];

export const COMPLEMENTARY_GUIDES: ComplementaryGuideItem[] = [
  {
    id: 'guide-1',
    title: 'Guia Visual dos Personagens da Bíblia',
    description: 'Conheça os principais personagens, suas relações, contextos e acontecimentos.',
    theme: 'characters',
    accentColor: '#1F424D',
    iconName: 'Users',
    imageSrc: 'https://i.imgur.com/upYI4le.png'
  },
  {
    id: 'guide-2',
    title: 'Linha do Tempo Bíblica Visual',
    description: 'Veja o que veio antes, o que aconteceu depois e como os grandes períodos se conectam.',
    theme: 'timeline',
    accentColor: '#A37222',
    iconName: 'Clock',
    imageSrc: 'https://i.imgur.com/6Pmkeyc.png'
  },
  {
    id: 'guide-3',
    title: 'Guia Visual dos Profetas Bíblicos',
    description: 'Entenda quando viveram, para quem profetizaram e o contexto por trás de suas mensagens.',
    theme: 'prophets',
    accentColor: '#8C3E26',
    iconName: 'Scroll',
    imageSrc: 'https://i.imgur.com/JxlTGmS.png'
  },
  {
    id: 'guide-4',
    title: 'Reinos, Reis e Conflitos da Bíblia',
    description: 'Entenda quem governava, quem guerreava e como os grandes conflitos mudaram a história bíblica.',
    theme: 'kingdoms',
    accentColor: '#345243',
    iconName: 'Shield',
    imageSrc: 'https://i.imgur.com/T7yHAKD.png'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O Atlas é físico ou digital?',
    answer: 'O Atlas Bíblico Visual é um produto 100% digital.'
  },
  {
    id: 'faq-2',
    question: 'Como vou receber o material?',
    answer: 'Após a confirmação da compra, você receberá as instruções para acessar os arquivos digitais.'
  },
  {
    id: 'faq-3',
    question: 'Posso acessar pelo celular?',
    answer: 'Sim. Os arquivos podem ser consultados no celular, tablet ou computador.'
  },
  {
    id: 'faq-4',
    question: 'Posso imprimir?',
    answer: 'Sim. Você pode imprimir as páginas para seu uso pessoal.'
  },
  {
    id: 'faq-5',
    question: 'Preciso entender muito de Bíblia?',
    answer: 'Não. O material foi criado para funcionar como apoio visual tanto para quem está começando quanto para quem já estuda as Escrituras há mais tempo.'
  }
];

