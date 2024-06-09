import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    logo: <span>IBD Guide</span>,
    project: {
      link: 'https://github.com/willquill/ibd-guide'
    },
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – IBD Guide'
        }
      }
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
    sidebar: {
      defaultMenuCollapseLevel: 1
    },
    search: {
      placeholder: 'Search this site...'
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
    }
}