// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://joseph-fajen.github.io',
  base: '/archon-cli-docs',
  integrations: [
    starlight({
      title: 'Archon CLI Docs',
      description: 'Pathway-based documentation for Archon CLI users',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/dynamous-community/remote-coding-agent',
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Getting Started',
          items: [
            { label: 'What is Archon?', slug: 'getting-started/what-is-archon' },
            { label: 'Prerequisites', slug: 'getting-started' },
            { label: 'Installation', slug: 'getting-started/install' },
            { label: 'First Workflow', slug: 'getting-started/first-workflow' },
          ],
        },
        {
          label: 'Pathways',
          items: [
            { label: 'Fix a GitHub Issue', slug: 'pathways/fix-github-issue' },
            { label: 'Build a Feature', slug: 'pathways/build-feature' },
            { label: 'Explore Code', slug: 'pathways/explore-code' },
          ],
        },
        {
          label: 'Concepts',
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'Recovery',
          autogenerate: { directory: 'recovery' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/joseph-fajen/archon-cli-docs/edit/main/',
      },
      lastUpdated: true,
    }),
  ],
});
