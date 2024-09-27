hexo.extend.generator.register('draft', function (locals) {
    return {
        path: 'draft.html',
        data: locals.posts,
        layout: 'draft'
    }
})
