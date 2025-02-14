// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

import vercelStatic from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:4321",

    integrations: [
        starlight({
            title: "Sociatall",
            favicon: './src/assets/2.png',
            social: {
                linkedin: "https://www.linkedin.com/company/sociatall/",
                youtube: "https://www.youtube.com/playlist?list=PLQMCTrMu4c0S3R42OgxmJaGC7z43hw_1d",
                github: "https://github.com/danxcraig/sociatall-astro",
            },
            logo: {
                light: './src/assets/nav-logo-light.png',
                dark: './src/assets/nav-logo-dark.png',
                replacesTitle: true
              },
            sidebar: [
                {
                    label: "Overview",
                    items: [
                        "overview/challenge",
                        "overview/about",
                        "overview/help",
                    ],
                    collapsed: true,
                },
                {
                    label: "Research",
                    items: [
                        {
                            label: "Root Causes",
                            items: [
                                "market-research/root-causes/purpose",
                                "market-research/root-causes/socio-economic-factors",
                                "market-research/root-causes/technology-factors",
                                "market-research/root-causes/cultural-and-organisational-factors",
                                "market-research/root-causes/supplier-factors",

                            ],
                            collapsed: true,
                        },
                        {
                            label: "Charity Insights",
                            items: [
                                "market-research/characteristics/purpose",
                                "market-research/characteristics/characteristics",
                                "market-research/characteristics/geographics",
                                "market-research/characteristics/financials",
                                "market-research/characteristics/people",
                                "market-research/characteristics/maturity",
                                "market-research/characteristics/annex",
                                "market-research/archetypes/purpose",
                                {
                                    label: "Template",
                                    link: "market-research/archetypes/template",
                                    
                                },
                                {
                                    label: "Board of Trustees",
                                    link: "market-research/archetypes/trustees",
                                },
                                {
                                    label: "CEO",
                                    link: "market-research/archetypes/ceos",
                                },
                                "market-research/archetypes/leadership",
                                "market-research/archetypes/managers",
                                "market-research/archetypes/operators",
                                "market-research/archetypes/volunteers",
                            ],
                            collapsed: true,
                        },
                        {
                            label: "Supplier Insights",
                            items: [
                                "market-research/current-suppliers/hardware",
                                "market-research/current-suppliers/software",
                                "market-research/current-suppliers/services",
                            ],
                            collapsed: true,
                        },
                    ],
                    collapsed: true,
                    badge: { text: "< We are here", variant: "success" },
                },
                {
                    label: "Strategy",
                    items: [
                        "strategy/brief",
                        "strategy/philosophy",
                        "strategy/ideas",
                        "strategy/scorecards",
                        "strategy/structure",
                        "strategy/financing",
                        "strategy/regulation",
                        "strategy/people",
                        "strategy/product",
                        "strategy/partnerships",
                        "strategy/commercial",
                        "strategy/operations",
                    ],
                    collapsed: true,
                    badge: { text: "< Next up", variant: 'caution' },
                },
                {
                    label: "MVP",
                    items: ["build/build"],
                    collapsed: true,
                },
                {
                    label: "Go To Market",
                    items: ["go-to-market/gtm"],
                    collapsed: true,
                },
                {
                    label: "Evolution",
                    items: ["evolution/evolution"],
                    collapsed: true,
                },
            ],
        }),
        mdx(),
        svelte(),
    ],

    vite: {
        plugins: [tailwindcss()],
    },

    output: 'static',
    adapter: vercelStatic(
        {
            webAnalytics: {
                enabled: false
            },
            imageService: true,
        }
    ),
});
