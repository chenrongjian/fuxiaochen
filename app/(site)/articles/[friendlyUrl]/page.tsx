import { type Metadata } from 'next';
import Link from 'next/link';

import { Badge, Container, Flex } from '@radix-ui/themes';

import { getArticleByFriendlyURLAction } from '@/app/_actions/article';
import { BytemdViewer } from '@/components/client';
import { PATHS, PLACEHOLDER_COVER } from '@/constants';

export async function generateMetadata({
  params,
}: {
  params: { friendlyUrl: string };
}): Promise<Metadata> {
  const article = await getArticleByFriendlyURLAction(params.friendlyUrl);
  const title = article?.title ?? '文章未找到';
  return {
    title,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: { friendlyUrl: string };
}) {
  const article = await getArticleByFriendlyURLAction(params.friendlyUrl);

  return (
    <Flex direction={'column'} gap={'8'} align={'center'}>
      <img
        className="w-[1500px] h-[500px] object-fill"
        src={article?.cover ?? PLACEHOLDER_COVER}
        alt={article?.title}
      />

      <Flex direction={'column'} gap={'8'} pb={'9'}>
        <Container size={'4'}>
          <BytemdViewer content={article?.content ?? ''} />

          <Flex wrap={'wrap'} gap={'4'}>
            {article?.tags?.map((tag) => (
              <Link key={tag.id} href={`${PATHS.SITE_TAGS}/${tag.friendlyUrl}`}>
                <Badge color="gray" size={'2'} className="!cursor-pointer">
                  {tag.name}
                </Badge>
              </Link>
            ))}
          </Flex>
        </Container>
      </Flex>
    </Flex>
  );
}