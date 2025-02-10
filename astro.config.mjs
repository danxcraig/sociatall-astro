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
                        "overview/about",
                        "overview/challenge",
                        "overview/help",
                    ],
                    collapsed: true,
                },
                {
                    label: "Research",
                    items: [
                        {
                            label: "Root Cause Analysis",
                            items: [
                                "market-research/root-causes/economic-factors",
                                "market-research/root-causes/root-causes",
                                "market-research/root-causes/supplier-factors",
                            ],
                            collapsed: true,
                        },
                        {
                            label: "Charity Characteristics",
                            items: [
                                "market-research/characteristics/purpose",
                                "market-research/characteristics/characteristics",
                                "market-research/characteristics/geographics",
                                "market-research/characteristics/financials",
                                "market-research/characteristics/people",
                                "market-research/characteristics/maturity",
                                "market-research/characteristics/annex",
                            ],
                            collapsed: true,
                        },
                        {
                            label: "Persona Problems",
                            items: [
                                "market-research/personas/purpose",
                                {
                                    label: "Template",
                                    link: "market-research/personas/template",
                                    
                                },
                                {
                                    label: "Trustees",
                                    link: "market-research/personas/trustees",
                                },
                                {
                                    label: "CEOs",
                                    link: "market-research/personas/ceos",
                                },
                                "market-research/personas/leadership",
                                "market-research/personas/managers",
                                "market-research/personas/operators",
                                "market-research/personas/volunteers",
                            ],
                            collapsed: true,
                        },
                        {
                            label: "Current Suppliers",
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
