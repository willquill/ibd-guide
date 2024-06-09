import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    project: {
      link: 'https://github.com/willquill/ibd-guide'
    },
    footer: {
      text: (
        <span>
          MIT {new Date().getFullYear()} ©{' '}
          <a href="https://willcoquillette.com" target="_blank">
            Will Coquillette
          </a>
          .
        </span>
      )
    },
    head: () => {
      const { asPath, defaultLocale, locale } = useRouter()
      const { frontMatter } = useConfig()
      const url =
        'https://ibd-guide.com' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
   
      return (
        <>
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'IBD Guide'} />
          <meta
            property="og:description"
            content={frontMatter.description || 'Everything you need to know about IBD'}
          />
        </>
      )
    },
    logo: <span>IBD Guide</span>,
    navigation: {
      prev: false,
      next: false
    },
    sidebar: {
      defaultMenuCollapseLevel: 1
    },
    search: {
      placeholder: 'Search this site...'
    },
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – IBD Guide'
        }
      }
    }
}