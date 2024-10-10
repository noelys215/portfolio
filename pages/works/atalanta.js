import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import { Slider } from '../../components/slider';

const imageArr = [
	{ src: '/images/works/running.gif', alt: 'atalanta' },
	{ src: '/images/works/createAccount.png', alt: 'atalanta' },
	{ src: '/images/works/confirmEmail.png', alt: 'atalanta' },
	{ src: '/images/works/emailVerified.png', alt: 'atalanta' },
	{ src: '/images/works/login.png', alt: 'atalanta' },
	{ src: '/images/works/shopping.png', alt: 'atalanta' },
	{ src: '/images/works/addCart.png', alt: 'atalanta' },
	{ src: '/images/works/payment.png', alt: 'atalanta' },
	{ src: '/images/works/orderPaid.png', alt: 'atalanta' },
	{ src: '/images/works/orderConfirm.png', alt: 'atalanta' },
];

const Work = () => (
	<Layout title="Atalanta A.C.">
		<Container maxW="3xl">
			<Title>
				Atalanta A.C. <Badge>2024</Badge>
			</Title>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Stack</Meta>
					<span>
						React | TypeScript | Vite | Material UI | Redux Toolkit | AWS | Stripe |
						Docker | Laravel
					</span>
				</ListItem>
				<ListItem>
					<Meta>Visit</Meta>
					<Link href="https://www.atalanta.world" target={'_blank'}>
						Atalanta A.C.
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Frontend Code</Meta>
					<Link
						href="https://github.com/noelys215/atalanta_frontend_ii/"
						target={'_blank'}>
						GitHub - Atalanta A.C. | Frontend
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Backend Code</Meta>
					<Link href="https://github.com/noelys215/atalanta_laravel" target={'_blank'}>
						GitHub - Atalanta A.C. | Backend
					</Link>
				</ListItem>
			</List>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Project Overview</Center>
				</Heading>
				<Paragraph>
					Atalanta A.C. is a sportswear platform offering cutting-edge products and a
					sleek, seamless shopping experience. It allows users to browse and purchase
					items, create accounts to track orders, or opt for guest checkout with order
					tracking via email. Built with React and Laravel, the application provides
					secure payments via Stripe and real-time order management.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Key Features</Center>
				</Heading>
				<Paragraph>
					<br />- Account Creation & Order Tracking: Users can create accounts or track
					orders via guest checkout using email.
					<br />- Secure Payments via Stripe: Ensures secure and seamless payment
					processing.
					<br />- Responsive Design: Fully responsive UI across all devices.
					<br />- Order Confirmation Emails: Automated emails provide users with order
					details.
					<br />- Cloud Hosting: Hosted on AWS, with assets managed through S3 and data
					stored in MySQL RDS.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Architecture</Center>
				</Heading>
				<Paragraph>
					The application’s frontend is built with React and TypeScript, powered by Vite
					for fast builds. The backend, built with Laravel, manages API endpoints and
					stores data in MySQL RDS, with assets handled by AWS S3. Deployed using Docker
					and AWS App Runner, the CI/CD pipeline ensures seamless updates via AWS ECR.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Screenshots</Center>
				</Heading>
				<Slider array={imageArr} />
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Future Enhancements</Center>
				</Heading>
				<Paragraph>
					Planned improvements include address auto-completion, enhanced CAPTCHA for
					security, analytics integration, SMS verification, and a redesign of product
					pages for a more luxurious aesthetic.
				</Paragraph>
			</Section>
		</Container>
	</Layout>
);

export default Work;
