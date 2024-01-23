// Adding layout elements
const body = document.body;
addLayout();
addSidebarElements();
addHeaderElements();

function addLayout() {
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
}

function addSidebarElements() {
	const sidebar = document.querySelector('.sidebar');
	const logo = document.createElement('div');
	const sidebarMain = document.createElement('div');
	const help = document.createElement('div');

	logo.classList.add('icon-container');
	logo.setAttribute('id', 'logo');
	sidebarMain.classList.add('sidebar-main');
	help.classList.add('sidebar-help');
	
	const logoIcon = document.createElement('div');
	const logoText = document.createElement('div');
	logoText.textContent = 'Dashboard';
	logoIcon.classList.add('icon');

	logo.appendChild(logoIcon);
	logo.appendChild(logoText);

	const mainItems = ['Home', 'Profile', 'Message', 'History', 'Tasks', 'Communities'];
	const helpItems = ['Settings', 'Support', 'Privacy'];

	mainItems.forEach(item => {
		const itemContainer = document.createElement('div');
		const itemIcon = document.createElement('div');
		const itemText = document.createElement('div');
		
		itemContainer.classList.add('icon-container');
		itemIcon.classList.add('icon');
		itemText.classList.add('icon-name');

		itemText.textContent = item;

		itemContainer.appendChild(itemIcon);
		itemContainer.appendChild(itemText);
		sidebarMain.appendChild(itemContainer);
	});


	helpItems.forEach(item => {
		const itemContainer = document.createElement('div');
                const itemIcon = document.createElement('div');
                const itemText = document.createElement('div');

                itemContainer.classList.add('icon-container');
                itemIcon.classList.add('icon');
                itemText.classList.add('icon-name');

                itemText.textContent = item;

                itemContainer.appendChild(itemIcon);
                itemContainer.appendChild(itemText);
               	help.appendChild(itemContainer);

	});

	sidebar.appendChild(logo);
	sidebar.appendChild(sidebarMain);
	sidebar.appendChild(help);
}


function addHeaderElements(){
	const header = document.querySelector('.header');
	const searchContainer = document.createElement('div');
	const notificationContainer = document.createElement('div');
	const userWelcome = document.createElement('div');
	const btnContainer = document.createElement('div');

	const searchIcon = document.createElement('div');
	searchIcon.classList.add('icon');

	const searchBar = document.createElement('input');
	
	searchContainer.classList.add('search-container');
	searchContainer.appendChild(searchIcon);
	searchContainer.appendChild(searchBar);

	const notificationIcon = document.createElement('div');
	notificationIcon.classList.add('icon');

	const adminIcon = document.createElement('div');
	adminIcon.classList.add('icon');

	const adminName = document.createElement('div');
	adminName.classList.add('admin-name');
	adminName.setAttribute('id', 'notif-admin-name');
	adminName.textContent = 'Neil Rigaud';

	notificationContainer.classList.add('notification-container');
	notificationContainer.appendChild(notificationIcon);
	notificationContainer.appendChild(adminIcon);
	notificationContainer.appendChild(adminName);

	header.appendChild(searchContainer);
	header.appendChild(notificationContainer);
	header.appendChild(userWelcome);
	header.appendChild(btnContainer);
}





























