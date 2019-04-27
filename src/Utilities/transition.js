export default ({ property = 'all', length = '.25s', ease = 'ease' } = {}) => `
transition: ${property} ${length} ${ease};
`
