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
  post: PostData[];
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />

      <MainContainer>
        {post.map((response) => (
          <>
            <Heading key={response.data[0].attributes.slug}>
              {response.data[0].attributes.title}
            </Heading>

            <PostCover
              coverUrl={
                response.data[0].attributes.cover.data[0].attributes.formats
                  .large.url
              }
              alt={response.data[0].attributes.title}
            />

            <PostDetails
              author={response.data[0].attributes.author.data.attributes.name}
              category={response.data[0].attributes.author.data.attributes.name}
              date={response.data[0].attributes.createdAt}
            />

            <PostContainer
              key={response.data[0].id}
              content={response.content}
            />

            <Comments
              title={response.data[0].attributes.title}
              slug={response.data[0].attributes.slug}
            />
          </>
        ))}
      </MainContainer>

      <Footer />
    </>
  );
};
