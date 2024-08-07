import React, { FC } from 'react';
import scss from './Style.module.scss';
import Image from 'next/image';
import elchocrud from '@/assets/projects/elchocrud.png';
import eco_movie from '@/assets/projects/eco-movie.png';
import wedevx_selenium from '@/assets/projects/wedevx-selenium.png';
import ortodont_group from '@/assets/projects/ortodont-group.png';
import amo_crm from '@/assets/projects/amo-crm.png';
import telegram_sms_bot from '@/assets/projects/telegram-sms-bot.png';
import devx_magazine from '@/assets/projects/devx-magazine.png';
import devx_iksu from '@/assets/projects/devx-iksu.png';
import my_diploma from '@/assets/projects/my-diploma.png';
import mogo from '@/assets/projects/mogo.png';
import devx_little from '@/assets/projects/devx-little.png';
import ojjo from '@/assets/projects/ojjo.png';
import css_animation from '@/assets/projects/css-animation.png';
import todo_list from '@/assets/projects/todo-list.png';
import { ArrowUpRightIcon, GithubIcon } from '@/components/svgs';
import { FormattedMessage } from 'react-intl';

interface projectsTypes {
	title: string;
	description: any;
	stack: Array<string>;
	codeLink: string;
	demoLink: string;
	image: any;
}

const ProjectPage: FC = () => {
	const projects: projectsTypes[] = [
		{
			title: 'Mar4ik Crud ❤️‍🔥',
			description: "The Mar4ik project was created specifically for those who are just starting to delve into the IT world, especially in Frontend and Mobile Development. This project is a fully functional backend with flexible capabilities for creating tables and a complete database. Users can create their own endpoints and data tables.",
			stack: [
				'NextJS',
				'TypeScript',
				'ReduxToolkit',
				'RestAPI',
				"Figma"
			],
			codeLink: '',
			demoLink: '',
			image: elchocrud
		},
		{
			title: 'Mar4ik Movie 🐬',
			description: "Mar4ikMovie - a unique website providing fascinating information about movies and TV shows. Here you can discover all the necessary details about your favorite films, actors, directors, ratings, and much more.",
			stack: ['NextJS', 'TypeScript', 'ReduxToolkit', 'RestAPI'],
			codeLink: '',
			demoLink: "",
			image: eco_movie
		},
		{
			title: 'Jordan 🐬',
			description: "Jordan - an innovative platform dedicated to providing comprehensive information about Jordan. Here, you can explore detailed insights into Jordan's rich history, culture, landmarks, and attractions. Whether you're interested in ancient ruins like Petra, the vibrant culture of Amman, or the stunning landscapes of Wadi Rum, Jordan offers a wealth of knowledge to help you plan your visit and immerse yourself in this remarkable country.",
			stack: ['NextJS', 'TypeScript', 'Material UI'],
			codeLink: '',
			demoLink: '',
			image: wedevx_selenium
		},
		{
			title: 'Doctors Group 🪙',
			description: "Doctor - your reliable source of information on health and medical services. Our platform provides up-to-date and accurate details about various diseases, treatment methods, medical procedures, and preventive measures. Here, you can find advice from qualified specialists, recommendations for choosing doctors, and the latest news and research in the field of medicine. Doctor will help you stay informed about important health aspects and improve your quality of life.",
			stack: ['NextJS', 'TypeScript', 'SCSS', 'RestAPI'],
			codeLink: '',
			demoLink: '',
			image: ortodont_group
		},
		{
			title: 'ANIME SITE🐬',
			description: "Anime - your ultimate destination for discovering and exploring the world of anime. Our platform offers comprehensive information on your favorite anime series, characters, genres, and creators. Whether you’re a long-time fan or new to anime, you can find detailed reviews, episode guides, and the latest news about upcoming releases. Dive into the vibrant world of anime with Anime and stay updated on all things related to this captivating art form.",
			stack: [
				'Fastify',
				'TypeScript',
				'Supabase',
				'Prisma',
				'AmoCRM',
				'RestAPI'
			],
			codeLink: '',
			demoLink: '',
			image: amo_crm
		},
		{
			title: 'XB Shop🐬',
			description: "XB Shop - your ideal online store for convenient shopping. We offer a wide range of products, including electronics, clothing, accessories, and much more to meet all your needs. XB Shop guarantees high-quality products, competitive prices, and excellent customer service. Our user-friendly interface and secure payment system make the shopping process fast and enjoyable. Discover perfect items and enjoy shopping with XB Shop.",
			stack: ['Express', 'TypeScript', 'Figma', 'RestAPI', ],
			codeLink: '',
			demoLink:
				'',
			image: telegram_sms_bot
		},
		{
			title: 'Apple Shop 🐬',
			description: "Apple - your source for information on Apple products and services. Our platform provides detailed reviews and guides on the latest devices, including iPhone, iPad, MacBook, and other innovative Apple products. Discover new features, software updates, and get tips for optimizing your device usage. Apple helps you stay up-to-date with all the latest innovations and find the best solutions for your tech needs. ",
			stack: ['React', 'SCSS', 'Firebase', 'RestAPI', "Apple"],
			codeLink: '',
			demoLink: '',
			image: devx_magazine
		},
		{
			title: 'Alpha version | DevX IKSU 🐬',
			description: <FormattedMessage id="page.project.text.devx_iksu" />,
			stack: ['React', 'TypeScript', 'SCSS', 'Firebase'],
			codeLink: '',
			demoLink: '',
			image: devx_iksu
		}
		// {
		// 	title: 'Diploma project 🪙',
		// 	description: <FormattedMessage id="page.project.text.diploma_project" />,
		// 	stack: ['React', 'SCSS', 'Bootstrap'],
		// 	codeLink: 'https://github.com/Elkhan2003/Elcho911-Diploma',
		// 	demoLink: 'https://elcho911-diploma.netlify.app/',
		// 	image: my_diploma
		// }
		// {
		// 	title: "ToDo List 🪙",
		// 	description: <FormattedMessage id="page.project.text.todo_list" />,
		// 	stack: ["React", "SCSS", "NodeJS", "MongoDB"],
		// 	codeLink: "https://github.com/Elkhan2003/MongoDB-ToDoList",
		// 	demoLink: "https://todo-mongo911.netlify.app/",
		// 	image: todo_list
		// },
		// {
		// 	title: '2020 | Mogo 🤫',
		// 	description: <FormattedMessage id="page.project.text.intern" />,
		// 	stack: ['HTML', 'SCSS', 'JavaScript'],
		// 	codeLink: 'https://github.com/Elkhan2003/Mogo',
		// 	demoLink: 'https://elkhan2003.github.io/Mogo/',
		// 	image: mogo
		// },
		// {
		// 	title: '2020 |  First little Site 🤫',
		// 	description: <FormattedMessage id="page.project.text.intern" />,
		// 	stack: ['HTML', 'SCSS', 'JavaScript'],
		// 	codeLink: 'https://github.com/Elkhan2003/DevX',
		// 	demoLink: 'https://elkhan2003.github.io/DevX/',
		// 	image: devx_little
		// },
		// {
		// 	title: "2020 |  OJJO 🤫",
		// 	description: <FormattedMessage id="page.project.text.intern" />,
		// 	stack: ["HTML", "SCSS"],
		// 	codeLink: "https://github.com/Elkhan2003/OJJO",
		// 	demoLink: "https://elkhan2003.github.io/OJJO/",
		// 	image: ojjo
		// },
		// {
		// 	title: '2020 |  CSS Animation 🤫',
		// 	description: <FormattedMessage id="page.project.text.intern" />,
		// 	stack: ['HTML', 'CSS'],
		// 	codeLink: 'https://github.com/Elkhan2003/css-animation',
		// 	demoLink: 'https://elkhan2003.github.io/css-animation/',
		// 	image: css_animation
		// }
	];

	return (
		<>
			<div
				id="project"
				className={`${scss.text__z__index} ${scss.project__page}`}
			>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.title}>
							<h1>
								<FormattedMessage id="page.project.title_1" />
							</h1>
							<h2>
								<FormattedMessage id="page.project.title_2" />
							</h2>
						</div>

						{projects.map((project, index) => (
							<div
								className={`${scss.card} ${
									index % 2 !== 0 ? scss.row__reverse : ''
								}`}
								key={index + 1}
							>
								<div className={scss.pro__text}>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<div className={scss.stack}>
										{project.stack.map((item, index) => (
											<p key={index + 1}>{item}</p>
										))}
									</div>
									<div className={scss.links}>
										<a
											className={`${scss.code}`}
											href={project.codeLink}
											target="_blank"
										>
											Code
											<GithubIcon />
										</a>
										<a
											className={`${scss.demo}`}
											href={project.demoLink}
											target="_blank"
										>
											Live Demo
											<ArrowUpRightIcon />
										</a>
									</div>
								</div>
								<div className={`${scss.pro__img}`}>
									<a href={project.demoLink} target="_blank">
										<Image
											priority={true}
											quality={25}
											loading="eager"
											src={project.image}
											alt={'project'}
										/>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
