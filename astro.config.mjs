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
                                "market-research/root-causes/market-factors",
                                "market-research/root-causes/charity-factors",
                                "market-research/root-causes/supplier-factors",

                            ],
                            collapsed: true,
                        },
                        {
                            label: "Charity Landscape",
                            items: [
                                "market-research/charity-landscape/purpose",
                                "market-research/charity-landscape/characteristics",
                                "market-research/charity-landscape/archetypes",
                            ],
                            collapsed: true,
                        },
                        {
                            label: "Supplier Landscape",
                            items: [
                                "market-research/supplier-landscape/purpose",
                                "market-research/supplier-landscape/funding",
                                "market-research/supplier-landscape/hardware",
                                "market-research/supplier-landscape/software",
                            ],
                            collapsed: true,
                        },
                        "market-research/research-sources"
                    ],
                    collapsed: true,
                    badge: { text: "< We are here", variant: "success" },
                },
                {
                    label: "Strategy",
                    items: [
                        "strategy/philosophy",
                        {
                            label: "Innovation Landscape",
                            items: [
                                "strategy/innovation-landscape/purpose",
                                "strategy/innovation-landscape/policy",
                                "strategy/innovation-landscape/finance",
                                "strategy/innovation-landscape/technology",
                                "strategy/innovation-landscape/service-delivery",
                                "strategy/innovation-landscape/organisation",
                            ],
                            collapsed: true,
                        },
                        "strategy/brief",
                        "strategy/opportunities",
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
