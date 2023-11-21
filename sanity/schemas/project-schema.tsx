const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Постын гарчиг',
            type: 'string'
        },
        
        {
            name : 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
            }

            ]
        },
        {

            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            title: 'Огноо',
            name: 'date',
            type: 'datetime',
        },


        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: "block"}]
        },

        
    ]

};

export default project;