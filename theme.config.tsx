import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span>Docs</span>,
    banner: {
        dismissible: true,
        text: "This is a beta version of the documentation. If you have any questions or suggestions, please contact us.",
    },
    footer: {
        text: "Powered by FAYStarNext",
    },
    darkMode: true,
    docsRepositoryBase: "https://github.com/FAYStarNext/docs.faystarnext.studio/tree/main/",
    chat: {
        icon: "💬",
        link: "https://discord.gg/8rxufdkeGY",
    },
    notFound: {
        content: 'This page could not be found.',
        labels: '404',
    },
    editLink: {
        text: 'Edit this page on GitHub',
    },
    project: {
        link: "https://github.com/FAYStarNext/bluelight.js",
        icon: "🚀",
    },
}

export default config