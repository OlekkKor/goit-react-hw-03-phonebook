import axios from "axios";


export const getElement = async  (query, page) => { 
   const {data} = await axios.get('https://pixabay.com/api/', {
        params: {
            q: query,
            page: page,
            key: '31496924-d8fd8818ff2a696d197ea85c0',
            image_type: 'photo',
            orientation: 'horizontal', 
            per_page: 12,
            safesearch: true,
        }
    })
    return data;
};