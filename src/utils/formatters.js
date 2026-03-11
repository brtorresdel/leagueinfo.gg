export const stripHtml = (text) => {
    if (!text) return "";
    return text.replace(/<[^>]*>/g, "");
}