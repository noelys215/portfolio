import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';

const Work = () => (
	<Layout title="Gloria Fútbol">
		<Container maxW="3xl">
			<Title>
				Gloria Fútbol <Badge>2022</Badge>
			</Title>
			<P>A simple soccer/fùtbol app with live scores, charts, stats, and tables.</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Stack</Meta>
					<span>React | JavaScript | RTK Query | SportsAPI | Material UI</span>
				</ListItem>
				<ListItem>
					<Meta>Visit</Meta>
					<Link href="https://gloriafutbol.com/" target={'_blank'}>
						Gloría Fútbol
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Code</Meta>
					<Link href="https://github.com/noelys215/Gloria-Futbol" target={'_blank'}>
						GitHub - Gloría Fútbol
					</Link>
				</ListItem>
			</List>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>README</Center>
				</Heading>
				<Paragraph>
					Gloria Fútbol is a simple soccer live score app that tracks the top scores,
					stats, and records for some of the worlds most prestigious leagues.
					<br />
					<br />
					This app was made using ReactJS with React Router for the framework, Material UI
					for styling and Framer Motion for basic animations. With conditional rending and
					tinkering with the API I was able to style the app depending on the competition,
					league position and live stats.
					<br />
					<br />
					Features light/dark themes which is saved to localhost, and ability to check
					past scores for every league via calender.
					<br />
					<br />
					With this app, i experimented with RTK Query and its ability to fetch and cache
					data using simple, out of the box react hooks, making writing and handling data
					much easier than the traditional way, such as the fetch API.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Room for Improvements</Center>
				</Heading>
				<Paragraph>
					Gloria Fútbol was designed to fetch live score as it happens, however due to
					limited resources I was unable to make the application render/refresh scores
					automatically. In future updates this will be implemented, along with the
					ability to favorite teams,matches and competitions.
				</Paragraph>
			</Section>

			<WorkImage src="/images/works/gloria1.png" alt="gloria" />
			<WorkImage src="/images/works/gloria2.png" alt="gloria" />
			<WorkImage src="/images/works/gloria3.png" alt="gloria" />
			<WorkImage src="/images/works/gloria4.png" alt="gloria" />
		</Container>
	</Layout>
);

export default Work;
