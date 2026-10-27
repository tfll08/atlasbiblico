import { VolumeItem, ComplementaryGuideItem, FaqItem } from '../types';

export const VOLUMES_DATA: VolumeItem[] = [
  {
    id: 'vol-1',
    volumeNumber: 1,
    title: 'O Mundo da Bíblia',
    subtitle: 'Geografia, Impérios e Regiões das Escrituras',
    phrase: 'Encontre os lugares por trás dos relatos bíblicos.',
    description: 'Para localizar cidades, regiões, rios e montanhas enquanto você lê os relatos bíblicos.',
    accentColor: '#1B4958',
    badge: 'Volume 1',
    imageSrc: '/images/volumes/vol-1-cover.webp',
    fallbackSrc: 'https://i.imgur.com/oYbpctK.png',
    insideMapSrc: '/images/volumes/vol-1-map.webp',
    fallbackMapSrc: 'https://i.imgur.com/xszeYxL.png',
    coverImageTheme: 'world',
    mapHighlights: ['Crescente Fértil', 'Império Babilônico, Persa e Romano', 'Topografia do Oriente Médio']
  },
  {
    id: 'vol-2',
    volumeNumber: 2,
    title: 'Os Patriarcas',
    subtitle: 'De Ur dos Caldeus ao Sinai e Entrada em Canaã',
    phrase: 'Acompanhe as jornadas que marcaram a história dos patriarcas.',
    description: 'Para acompanhar visualmente as jornadas de Abraão, Isaque, Jacó e José.',
    accentColor: '#8C4827',
    badge: 'Volume 2',
    imageSrc: '/images/volumes/vol-2-cover.webp',
    fallbackSrc: 'https://i.imgur.com/GCPoAHE.png',
    insideMapSrc: '/images/volumes/vol-2-map.webp',
    fallbackMapSrc: 'https://i.imgur.com/jBpMsM3.png',
    coverImageTheme: 'patriarchs',
    mapHighlights: ['Rota de Abraão', 'Descida e Saída do Egito', 'Jornada no Deserto e Tabernáculo']
  },
  {
    id: 'vol-3',
    volumeNumber: 3,
    title: 'Os Caminhos de Jesus',
    subtitle: 'Os Lugares e Trajetos dos Quatro Evangelhos',
    phrase: 'Explore os lugares por onde Jesus passou.',
    description: 'Para visualizar as cidades e regiões por onde Jesus passou durante seu ministério.',
    accentColor: '#B08830',
    badge: 'Volume 3',
    imageSrc: '/images/volumes/vol-3-cover.webp',
    fallbackSrc: 'https://i.imgur.com/CfnIevz.png',
    insideMapSrc: '/images/volumes/vol-3-map.webp',
    fallbackMapSrc: 'https://i.imgur.com/MfLDu9A.png',
    coverImageTheme: 'jesus',
    mapHighlights: ['Mar da Galileia e Cidades Circunvizinhas', 'Caminho por Samaria', 'Jerusalém na Paixão']
  },
  {
    id: 'vol-4',
    volumeNumber: 4,
    title: 'As Viagens de Paulo',
    subtitle: 'As Rotas Missionárias no Mundo Mediterrâneo',
    phrase: 'Acompanhe as viagens missionárias de Paulo.',
    description: 'Para seguir as rotas missionárias de Paulo e entender como as cidades se conectavam.',
    accentColor: '#2B5349',
    badge: 'Volume 4',
    imageSrc: '/images/volumes/vol-4-cover.webp',
    fallbackSrc: 'https://i.imgur.com/j0qZp6v.png',
    insideMapSrc: '/images/volumes/vol-4-map.webp',
    fallbackMapSrc: 'https://i.imgur.com/0zrUyqe.png',
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
    url: 'https://i.imgur.com/0zrUyqe.png',
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
    imageSrc: '/images/bonus-1.webp',
    imageSrcSm: '/images/bonus-1-sm.webp',
    fallbackSrc: 'https://i.imgur.com/X0Ln8TE.png',
    fillCard: true,
    originalPrice: 'R$ 19,90'
  },
  {
    id: 'guide-2',
    title: 'Linha do Tempo Bíblica Visual',
    description: 'Veja a sequência dos acontecimentos e situe cada um em seu período.',
    theme: 'timeline',
    accentColor: '#A37222',
    iconName: 'Clock',
    imageSrc: '/images/bonus-2.webp',
    imageSrcSm: '/images/bonus-2-sm.webp',
    fallbackSrc: 'https://i.imgur.com/YMDrMLB.png',
    fillCard: true,
    originalPrice: 'R$ 19,90'
  },
  {
    id: 'guide-3',
    title: 'Guia Visual dos Profetas Bíblicos',
    description: 'Consulte quem foram os profetas, quando viveram e o contexto de suas mensagens.',
    theme: 'prophets',
    accentColor: '#8C3E26',
    iconName: 'Scroll',
    imageSrc: '/images/bonus-3.webp',
    imageSrcSm: '/images/bonus-3-sm.webp',
    fallbackSrc: 'https://i.imgur.com/cqMjDkR.png',
    fillCard: true,
    originalPrice: 'R$ 17,90'
  },
  {
    id: 'guide-4',
    title: 'Reinos, Reis e Conflitos da Bíblia',
    description: 'Entenda as relações entre governantes, reinos e conflitos bíblicos.',
    theme: 'kingdoms',
    accentColor: '#345243',
    iconName: 'Shield',
    imageSrc: '/images/bonus-4.webp',
    imageSrcSm: '/images/bonus-4-sm.webp',
    fallbackSrc: 'https://i.imgur.com/mBivgv8.png',
    fillCard: true,
    originalPrice: 'R$ 17,90'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O Atlas é físico ou digital?',
    answer: 'O Atlas é totalmente digital. Você recebe acesso aos quatro volumes e aos bônus na área de membros. Nenhum material físico é enviado.'
  },
  {
    id: 'faq-2',
    question: 'Preciso instalar algum aplicativo?',
    answer: 'Não. Você pode acessar pelo navegador do celular, tablet ou computador. Se preferir, adicione à tela inicial do celular para abrir como um aplicativo.'
  },
  {
    id: 'faq-3',
    question: 'Posso baixar e imprimir os materiais?',
    answer: 'Sim. Você pode baixar os arquivos e imprimir para seu uso pessoal. Os materiais baixados também podem ser consultados sem internet.'
  },
  {
    id: 'faq-4',
    question: 'Preciso conhecer muito a Bíblia ou seguir uma ordem?',
    answer: 'Não é necessário ter conhecimento avançado. Você pode escolher o volume relacionado à sua leitura e consultar os mapas no seu ritmo, sem seguir uma sequência obrigatória.'
  },
  {
    id: 'faq-5',
    question: 'Posso compartilhar os arquivos ou meu acesso?',
    answer: 'O acesso é individual. Os arquivos e os dados de entrada não podem ser compartilhados. Para indicar o Atlas a outra pessoa, envie o link de compra.'
  },
  {
    id: 'faq-6',
    question: 'E se o e-mail de acesso não chegar?',
    answer: 'Confira as pastas de spam e promoções. Se não encontrar as instruções após a confirmação do pagamento, entre em contato pelo e-mail suporte@projetoreino.com ou pelo whatsapp.'
  },
  {
    id: 'faq-7',
    question: 'O pagamento é único? O acesso é vitalício?',
    answer: 'Sim. Você paga uma única vez, sem mensalidade, e recebe acesso vitalício conforme as condições apresentadas nos Termos de Uso.'
  }
];

