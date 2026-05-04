import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const normalizedBaseUrl = siteConfig.baseUrl.endsWith('/')
      ? siteConfig.baseUrl
      : `${siteConfig.baseUrl}/`;

    window.location.replace(`${normalizedBaseUrl}docs/intro`);
  }, [siteConfig.baseUrl]);

  return null;
}
