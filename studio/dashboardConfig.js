export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '621c76640e28d00f39e9e001',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nps56v7y',
                  apiId: 'fd7b26fd-c8ad-444b-ae35-246f25b02487'
                },
                {
                  buildHookId: '621c7664aa679ac40e740ec9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qbfrcnqf',
                  apiId: 'a3c39c54-01c4-4487-b4f7-7b685f28c920'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RajaSultan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qbfrcnqf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
