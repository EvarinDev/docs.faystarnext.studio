import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span>Docs</span>,
    darkMode: true, 
    docsRepositoryBase: "https://github.com/FAYStarNext/docs.faystarnext.studio/tree/main/",
    notFound: {
        content: 'This page could not be found.',
        labels: '404',
    },
    editLink: {
        text: 'Edit this page on GitHub',
    },
    project: {
        link: "https://github.com/FAYStarNext/bluelight.js",
    },
    footer: {
        text: 'Docs',
    },
}

export default config