export default {
  widgets: [
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
                  buildHookId: '5e5923e070eeda0174f8ea4c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aps3q4kb',
                  apiId: 'bdda0829-ee37-4a9c-937a-63a85f7d78ae'
                },
                {
                  buildHookId: '5e5923e088a936699f928871',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-275a6uz8',
                  apiId: 'fe1d0ecf-d8be-437c-8031-33b165b20ac9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joatra/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-275a6uz8.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
