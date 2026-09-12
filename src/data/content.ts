import { VolumeItem, ComplementaryGuideItem, FaqItem } from '../types';

export const VOLUMES_DATA: VolumeItem[] = [
  {
    id: 'vol-1',
    volumeNumber: 1,
    title: 'O Mundo da Bíblia',
    subtitle: 'Geografia, Impérios e Regiões das Escrituras',
    phrase: 'Encontre os lugares por trás dos relatos bíblicos.',
    description: 'Consulte cidades, regiões, rios, montanhas e outros pontos importantes das Escrituras.',
    accentColor: '#1B4958',
    badge: 'Volume 1',
    imageSrc: 'https://i.imgur.com/oYbpctK.png',
    insideMapSrc: 'https://i.imgur.com/4bXSoPw.png',
    coverImageTheme: 'world',
    mapHighlights: ['Crescente Fértil', 'Império Babilônico, Persa e Romano', 'Topografia do Oriente Médio']
  },
  {
    id: 'vol-2',
    volumeNumber: 2,
    title: 'Os Patriarcas',
    subtitle: 'De Ur dos Caldeus ao Sinai e Entrada em Canaã',
    phrase: 'Acompanhe as jornadas que marcaram a história dos patriarcas.',
    description: 'Visualize os caminhos de Abraão, Isaque, Jacó e José e veja onde os principais acontecimentos se passaram.',
    accentColor: '#8C4827',
    badge: 'Volume 2',
    imageSrc: 'https://i.imgur.com/GCPoAHE.png',
    insideMapSrc: 'https://i.imgur.com/atlM0mG.png',
    coverImageTheme: 'patriarchs',
    mapHighlights: ['Rota de Abraão', 'Descida e Saída do Egito', 'Jornada no Deserto e Tabernáculo']
  },
  {
    id: 'vol-3',
    volumeNumber: 3,
    title: 'Os Caminhos de Jesus',
    subtitle: 'Os Lugares e Trajetos dos Quatro Evangelhos',
    phrase: 'Explore os lugares por onde Jesus passou.',
    description: 'Consulte cidades, regiões e trajetos relacionados à vida e ao ministério de Jesus.',
    accentColor: '#B08830',
    badge: 'Volume 3',
    imageSrc: 'https://i.imgur.com/CfnIevz.png',
    insideMapSrc: 'https://i.imgur.com/S8EgDFM.png',
    coverImageTheme: 'jesus',
    mapHighlights: ['Mar da Galileia e Cidades Circunvizinhas', 'Caminho por Samaria', 'Jerusalém na Paixão']
  },
  {
    id: 'vol-4',
    volumeNumber: 4,
    title: 'As Viagens de Paulo',
    subtitle: 'As Rotas Missionárias no Mundo Mediterrâneo',
    phrase: 'Acompanhe as viagens missionárias de Paulo.',
    description: 'Veja cidades, rotas e deslocamentos pelo mundo mediterrâneo durante a expansão do Evangelho.',
    accentColor: '#2B5349',
    badge: 'Volume 4',
    imageSrc: 'https://i.imgur.com/j0qZp6v.png',
    insideMapSrc: 'https://i.imgur.com/6OYfDT2.png',
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
    description: 'Consulte personagens, relações, acontecimentos e o papel de cada um nos relatos bíblicos.',
    theme: 'characters',
    accentColor: '#1F424D',
    iconName: 'Users',
    imageSrc: 'https://i.imgur.com/upYI4le.png',
    originalPrice: 'R$ 29,90'
  },
  {
    id: 'guide-2',
    title: 'Linha do Tempo Bíblica Visual',
    description: 'Veja rapidamente o que aconteceu antes, depois e em qual período cada acontecimento se encaixa.',
    theme: 'timeline',
    accentColor: '#A37222',
    iconName: 'Clock',
    imageSrc: 'https://i.imgur.com/6Pmkeyc.png',
    originalPrice: 'R$ 29,90'
  },
  {
    id: 'guide-3',
    title: 'Guia Visual dos Profetas Bíblicos',
    description: 'Consulte quem foram os profetas, quando viveram e o contexto de suas mensagens.',
    theme: 'prophets',
    accentColor: '#8C3E26',
    iconName: 'Scroll',
    imageSrc: 'https://i.imgur.com/JxlTGmS.png',
    originalPrice: 'R$ 27,90'
  },
  {
    id: 'guide-4',
    title: 'Reinos, Reis e Conflitos da Bíblia',
    description: 'Encontre reis, reinos, divisões e conflitos que ajudam a situar os acontecimentos bíblicos.',
    theme: 'kingdoms',
    accentColor: '#345243',
    iconName: 'Shield',
    imageSrc: 'https://i.imgur.com/T7yHAKD.png',
    originalPrice: 'R$ 27,90'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O Atlas é físico ou digital?',
    answer: 'O Atlas Bíblico Visual é 100% digital, disponibilizado pela área de membros.'
  },
  {
    id: 'faq-2',
    question: 'Como vou receber o material?',
    answer: 'Após a confirmação do pagamento, você recebe as instruções de acesso á área de membros no e-mail cadastrado na compra.'
  },
  {
    id: 'faq-3',
    question: 'Posso acessar pelo celular?',
    answer: 'Sim. Os arquivos podem ser consultados no celular, tablet ou computador.'
  },
  {
    id: 'faq-4',
    question: 'Posso imprimir?',
    answer: 'Sim. Você pode baixar e imprimir os materiais, se preferir estudar dessa forma.'
  },
  {
    id: 'faq-5',
    question: 'Preciso entender muito de Bíblia?',
    answer: 'Não. O material foi criado para funcionar como apoio visual tanto para quem está começando quanto para quem já estuda as Escrituras há mais tempo.'
  }
];

