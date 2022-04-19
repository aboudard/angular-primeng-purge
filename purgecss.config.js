module.exports = {
    css: [
        'dist/purge-app/*.css'
    ],
    content: [
        'dist/purge-app/index.html',
        'dist/purge-app/*.js'
    ],
    output: 'purge/',
    variables: false,
    safelist: {
        standard: [
        ],
        greedy: [
        ],
        deep: [
        ]
    },
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
}


