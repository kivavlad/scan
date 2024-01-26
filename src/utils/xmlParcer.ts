import { decode } from "html-entities";

const getFirstImageUrl = (decodedContent: any) => {
    const images = decodedContent.match(/<img src="(.*?)"/m);
    return images ? images[1] : null;
};
  
const decodeContent = (markup: any) => {
    return decode(markup);
};
  
const removeAllTags = (content: any) => {
    return content.replace(/<.*?>/g, ' ');
};
  
export const getContent = (markup: any) => {
    const decodedContent = decodeContent(markup);
    const bgUrl = getFirstImageUrl(decodedContent);
    const content = removeAllTags(decodedContent).slice(0, 600);
  
    return {
        bgUrl,
        content,
    };
};