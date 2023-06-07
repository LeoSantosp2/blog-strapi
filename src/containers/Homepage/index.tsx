import { Header } from '@/components/Header';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';
import { MainContainer } from '@/components/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/Footer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.data.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover.data[0].attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
