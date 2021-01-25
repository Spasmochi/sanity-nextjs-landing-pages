export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '600e6b71bbfca7eca779d41d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f7brh7gy',
                  apiId: 'c0e063cd-804a-4c7c-91d7-4cf7e4c3ce80'
                },
                {
                  buildHookId: '600e6b71bd7fe40c7b7ec812',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3nnhyemd',
                  apiId: '37972d5f-26bf-4988-9f4a-52f73cbde76a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Spasmochi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3nnhyemd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
