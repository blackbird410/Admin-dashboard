// Adding layout elements
addLayout()

function addLayout() {
	const body = document.body;
	const sidebar = document.createElement('div');
	const header = document.createElement('div');
	const main = document.createElement('div');
	const projectContainer = document.createElement('div');
	const announcementContainer = document.createElement('div');
	const trendingContainer = document.createElement('div');

	sidebar.classList.add('sidebar');
	header.classList.add('header');
	main.classList.add('main');
	projectContainer.classList.add('projects');
	announcementContainer.classList.add('announcements');
	trendingContainer.classList.add('trendings');

	body.appendChild(header);
	body.appendChild(sidebar);
	body.appendChild(main);
	//body.appendChild(projectContainer);
	//body.appendChild(announcementContainer);
	//body.appendChild(trendingContainer);
}
