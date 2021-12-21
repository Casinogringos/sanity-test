export default {
  widgets: [
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
                  buildHookId: '61c1da50194c0500660586dd',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-qawn6v5n',
                  apiId: 'e5c538c7-3966-4e7e-a6fc-ae6be6775ae4'
                },
                {
                  buildHookId: '61c1da50bcbea35dcf1d37d8',
                  title: 'Blog Website',
                  name: 'sanity-test-web-m592i5ub',
                  apiId: 'bbe1bc2b-b38d-4631-becf-a2b94895c653'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Casinogringos/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-m592i5ub.netlify.app', category: 'apps'}
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
