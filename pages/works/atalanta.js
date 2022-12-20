import { Box, Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';

const Work = () => (
	<Layout title="Atalanta A.C.">
		<Container maxW="3xl">
			<Title>
				Atalanta A.C. <Badge>2022</Badge>
			</Title>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Stack</Meta>
					<span>
						NextJs | JavaScript | TypeScript | Node/Express | MongoDB/Atlas | PayPal
						<br /> Material UI | Redux Toolkit | Docker | AWS EC2
					</span>
				</ListItem>
				<ListItem>
					<Meta>Visit</Meta>
					<Link href="http://atalanta.world/" target={'_blank'}>
						Atalanta A.C.
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Frontend Code</Meta>
					<Link href="https://github.com/noelys215/atalanta_frontend" target={'_blank'}>
						GitHub - Atalanta A.C. | Frontend
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Backend Code</Meta>
					<Link href="https://github.com/noelys215/atalanta_backend" target={'_blank'}>
						GitHub - Atalanta A.C. | Backend
					</Link>
				</ListItem>
			</List>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>README</Center>
				</Heading>
				<Paragraph>
					Atalanta A.C. (Athletic Club) is an ambitious attempt to create a complete
					modern e-commerce clothing and accessory store for athletes; with user
					authentication.
					<br />
					<br />
					Backend:
					<br />
					- The backend is built on Node.js with the express framework connected to the
					MongoDB Atlas cloud which collects, registers and updates the data on users,
					products, and orders.
					<br />
					- This includes an admin protected route that can access sensitive information
					on users as well create/edit products, edit user info, and mark orders as
					shipped.
					<br />
					- Moreover, Using Cloudinary&apos;s SDK, images and videos are uploaded to its
					cloud servers, rather than being stored in the production code.
					<br />
					<br />
					Frontend:
					<br />
					- The frontend is built on Next.js, a React framework, using its various
					pre-rendering techniques to render the HTML in advance on a server, instead dof
					having it done on the client side, avoiding blank loading pages.
					<br />
					- The application uses ISR (Incremental Static Regeneration) so data is readily
					available on build time, and only gets regenerated when the backend is updated;
					in the case of sales, price markdowns, and other content updates.
					<br />- Redux Toolkit is used to handle state within the app as well as create
					synchronous and asynchronous actions to the express backend such as
					creating/placing orders, users, retrieving data and more.
					<br />
					<br />
					Hosting:
					<br />
					- The application practices the CI/CD method to deploy any changes to the AWS
					ec2 instance in the cloud.
					<br />
					- With Github Actions, the Dockerfile runs Next.js build script, and if the
					build completes without error, the script proceeds to run a docker build script
					in the AWS EC2 shell, which pulls the latest docker image and runs on the
					server.
					<br />- Redux Toolkit is used to handle state within the app as well as create
					synchronous and asynchronous actions to the express backend such as
					creating/placing orders, users, retrieving data and more.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Room for Improvements</Center>
				</Heading>
				<Paragraph>
					Atalanta is a learning project, used to learn and practice new technologies and
					concepts.
					<br />
					In future updates, the website will include SMS and Email confirmations, support
					chatbot,as well as a simpler checkout system.
					<br />
				</Paragraph>
			</Section>

			<WorkImage src="/images/works/atalanta1.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta3.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta5.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta6.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta4.png" alt="atalanta" />
			<WorkImage src="/images/works/atalanta2.png" alt="atalanta" />
			<WorkImage src="/images/works/product_edit.jpg" alt="atalanta" />
			<WorkImage src="/images/works/productslist.jpg" alt="atalanta" />
			<WorkImage src="/images/works/userslist.jpg" alt="atalanta" />
		</Container>
	</Layout>
);

export default Work;
