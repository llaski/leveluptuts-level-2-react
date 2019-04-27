export const absolute = ({ y = 'top', x = 'right', val = '0' } = {}) => `
    position: absolute;
    ${y}: ${val};
    ${x}: ${val};
`
