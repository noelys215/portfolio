import { Box, Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';

const Work = () => (
	<Layout title="Gloria Fútbol">
		<Container maxW="3xl">
			<Title>
				Atalanta A.C. <Badge>2022</Badge>
			</Title>
			<P>A semi-modern athletic clothing e-commerce store.</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Stack</Meta>
					<span>NextJs, JavaScript, TypeScript, Groq, Sanity.io,PayPal, Material UI</span>
				</ListItem>
				<ListItem>
					<Meta>Visit</Meta>
					<Link href="https://atalanta-three.vercel.app/" target={'_blank'}>
						Atalanta A.C.
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Code</Meta>
					<Link href="https://github.com/noelys215/atalanta" target={'_blank'}>
						GitHub - Atalanta A.C.
					</Link>
				</ListItem>
			</List>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>README</Center>
				</Heading>
				<Paragraph>
					Atalanta A.C. (Athletics Club) is an ambitious attempt to create a complete
					modern e-commerce clothing and accessory store for athletes; with user
					authentication.
					<br />
					<br />
					With the help of Sanity.io, a headless CMS/Content management system, I was able
					to easily create a backend to manage, fetch and update different pieces of
					clothing, shoes and accessories.
					<br />
					<br />
					Using React Context and form validation, users are able to create and manage
					their own account, and use this saved information (Cookies) to checkout via
					their debit/credit cards or PayPal account.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Room for Improvements</Center>
				</Heading>
				<Paragraph>
					This was my first attempt at creating a Next JS website and learning to use the
					Sanity.io platform, so the experience was rather new and raw. I noticed that
					SSR(Server Side Rendering) was not the optimal choice for fetching the data from
					the backend; which causes data to load slower than anticipated.
					<br />
					<br />
					In future updates, the website will be revamped using ISR (Incremental Static
					Regeneration) so data is readily available on build time, and only gets
					regenerated when the backend is updated; in the case of sales, price markdowns,
					and other content updates. As well as creating more reusable code and templates
					for products, to reduce the unneeded bloat.
				</Paragraph>
			</Section>

			<WorkImage src="/images/works/atalanta7.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta1.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta3.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta5.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta6.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta4.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta2.png" alt="atalanta" />
		</Container>
	</Layout>
);

export default Work;
