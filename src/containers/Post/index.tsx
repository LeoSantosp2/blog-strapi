import { Comments } from '@/comments';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostCover } from '@/components/PostCover';
import { PostContainer } from '@/components/postContainer';
import { PostDetails } from '@/components/postDetails';
import { PostData } from '@/domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  console.log(post);
  return (
    <>
      <Header />

      <MainContainer>
        {post.map((response) => (
          <>
            <Heading key={response.slug}>{response.title}</Heading>

            <PostCover
              coverUrl={response.cover.data[0].attributes.formats.large.url}
              alt={response.title}
            />

            <PostDetails
              author={response.author.data.attributes.name}
              category={response.catory}
              date={response.createdAt}
            />

            <PostContainer key={response.id} content={response.content} />

            <Comments title={response.title} slug={response.slug} />
          </>
        ))}
      </MainContainer>

      <Footer />
    </>
  );
};
