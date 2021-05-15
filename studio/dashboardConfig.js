export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '609fb54ee9f7ffcc104bf7b3',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-rbrqmfmc',
                  apiId: '43ca8bdd-ba84-4149-8bdb-1151173e5cde'
                },
                {
                  buildHookId: '609fb54e7b087dceb8b8a00b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-e48pi7u4',
                  apiId: 'b0e51c41-6dce-4963-8180-b4a368ec6f6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KingMabuza/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-e48pi7u4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
