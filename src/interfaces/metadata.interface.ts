interface MetadataTitle {
  default: string;
  template: string;
}

interface MetadataOpenGraph {
  title: string;
  description: string;
  locale: string;
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

export interface MetadataTranslations {
  title: MetadataTitle;
  description: string;
  keywords: string[];
  openGraph: MetadataOpenGraph;
  twitter: MetadataTwitter;
  alternates?: MetadataAlternates;
}
