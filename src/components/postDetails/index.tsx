import { Date } from '../Date';
import { Container } from './styled';

export type PostDatailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDatailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} | {category}
    </Container>
  );
};
