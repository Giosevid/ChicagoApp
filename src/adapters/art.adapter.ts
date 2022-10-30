const artAdapter = ({data}: any) =>
  data?.map((art: any) => ({
    id: art.id,
    title: art.title,
    display: art.medium_display,
    image: art.image_id,
    isFavorite: false,
    link: art.api_link,
  }));

export default artAdapter;
