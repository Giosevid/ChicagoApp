export type ArtsProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  display: string;
};

export type DataArtProps = {
  data: ArtsProps[];
};

export type Arts = {
  pagination: object;
  data: ReadonlyArray<ArtsProps>;
};

export type RenderItemProps = {
  item: ArtsProps;
};
