export interface VolumeItem {
  id: string;
  volumeNumber: number;
  title: string;
  subtitle: string;
  phrase: string;
  description: string;
  accentColor: string;
  badge: string;
  imageSrc?: string;
  fallbackSrc?: string;
  coverImageTheme?: 'world' | 'patriarchs' | 'jesus' | 'paul';
  mapHighlights?: string[];
}

export interface InsidePageItem {
  id: string;
  title: string;
  category: string;
  era: string;
  description: string;
  imageSrc: string;
  mapKey?: 'mundo_geral' | 'canaan' | 'jerusalem' | 'abraao' | 'exodo' | 'jesus_caminhos' | 'ultima_semana' | 'paulo_viagens';
  tags: string[];
}

export interface ComplementaryGuideItem {
  id: string;
  title: string;
  description: string;
  theme: 'characters' | 'timeline' | 'prophets' | 'kingdoms';
  accentColor: string;
  iconName: string;
  imageSrc: string;
  fallbackSrc?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

