import { API_URL } from '@/config/app-config';
import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return <Container src={`${coverUrl}`} alt={alt} />;
};
