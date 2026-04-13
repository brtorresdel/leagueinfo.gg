export const getOptimizedImg = (url) => {
    if (!url) return '';

    const cleanUrl = url.replace(/^https?:\/\//, '');

    return `https://images.weserv.nl/?url=${cleanUrl}&output=webp&q=80&il`;
}

export const getLocalImg = (relativePath) => {
    if (!relativePath) return '';
    
    const baseUrl = import.meta.env.BASE_URL || '/';
    const pathWithoutLeadingSlash = relativePath.replace(/^\//, '');
    
    return `${baseUrl}${pathWithoutLeadingSlash}`;
}