import { Locale } from '@/interfaces';

interface MetadataTitle {
  default: string;
  template: string;
}

interface MetadataOpenGraph {
  title: string;
  description: string;
  locale: Locale;
}

interface MetadataTwitter {
  title: string;
  description: string;
}

interface MetadataAlternates {
  canonical: string;
  languages: {
    'en-US': string;
    'es-ES': string;
  };
}

interface MetadataTranslations {
  title: MetadataTitle;
  description: string;
  keywords: string[];
  openGraph: MetadataOpenGraph;
  twitter: MetadataTwitter;
  alternates?: MetadataAlternates;
}
