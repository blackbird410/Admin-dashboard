import { projectSamples, announcementSamples, trendingSamples } from "./data.js"

const body = document.body;

class Layout {
		constructor(){}

		addLayout() {
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

			
		addSidebarElements() {
			const sidebar = document.querySelector('.sidebar');
			const logo = document.createElement('div');
			const sidebarMain = document.createElement('div');
			const help = document.createElement('div');

			logo.classList.add('icon-container');
			logo.setAttribute('id', 'logo');
			sidebarMain.classList.add('sidebar-main');
			help.classList.add('sidebar-help');
			
			const logoIcon = document.createElement('div');
			logoIcon.style.backgroundImage = "url('icons/dashboard.svg')";
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

				itemIcon.style.backgroundImage = `url('icons/${item.toLowerCase()}.svg')`;
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

						itemIcon.style.backgroundImage = `url('icons/${item.toLowerCase()}.svg')`;
				itemText.textContent = item;

						itemContainer.appendChild(itemIcon);
						itemContainer.appendChild(itemText);
						help.appendChild(itemContainer);

			});

			sidebar.appendChild(logo);
			sidebar.appendChild(sidebarMain);
			sidebar.appendChild(help);
		}


		addHeaderElements() {
			const header = document.querySelector('.header');
			const searchContainer = document.createElement('div');
			const notificationContainer = document.createElement('div');
			const adminWelcome = document.createElement('div');
			const btnContainer = document.createElement('div');

			const searchIcon = document.createElement('div');
			searchIcon.classList.add('icon');
			searchIcon.style.backgroundImage = "url('icons/magnify.svg')";

			const searchBar = document.createElement('input');
			searchBar.setAttribute('id', 'search');
			
			searchContainer.classList.add('search-container');
			searchContainer.appendChild(searchIcon);
			searchContainer.appendChild(searchBar);

			const notificationIcon = document.createElement('div');
			notificationIcon.classList.add('icon');
			notificationIcon.style.backgroundImage = "url('icons/bell-ring.svg')";

			const adminIcon = document.createElement('img');
			adminIcon.classList.add('avatar', 'icon');
			adminIcon.setAttribute('src', 'profile/1.ico');
			//adminIcon.style.backgroundImage = "url('profile/1.ico')";

			const adminName = document.createElement('div');
			adminName.classList.add('admin-name');
			adminName.setAttribute('id', 'notif-admin-name');
			adminName.textContent = 'Peter Solomon';

			notificationContainer.classList.add('notification-container');
			notificationContainer.appendChild(notificationIcon);
			notificationContainer.appendChild(adminIcon);
			notificationContainer.appendChild(adminName);

			adminWelcome.classList.add('admin-welcome');
			adminWelcome.appendChild(adminIcon.cloneNode(true));
			const hello = document.createElement('div');
			hello.setAttribute('id', 'hello');
			hello.textContent = "Hi there,";
			adminWelcome.appendChild(hello);
			const name = adminName.cloneNode(true);
			name.removeAttribute('id');
			name.setAttribute('id', 'welcome-admin-name');
			name.textContent = `${adminName.textContent} (@solomon)`
			adminWelcome.appendChild(name);

			btnContainer.classList.add('btn-container');
			const buttons = ['New', 'Upload', 'Share'];
			buttons.forEach(btnName => {
				const btn = document.createElement('div');
				btn.classList.add('btn');
				btn.textContent = btnName;
				btnContainer.appendChild(btn);
			});

			header.appendChild(searchContainer);
			header.appendChild(notificationContainer);
			header.appendChild(adminWelcome);
			header.appendChild(btnContainer);
		}

		addMainElements() {
			const main = document.querySelector('.main');

			const projects = document.createElement('div');
			const announcements = document.createElement('div');
			const trendings = document.createElement('div');

			projects.classList.add('projects');
			announcements.classList.add('announcements');
			trendings.classList.add('trendings');

			const headers = ['Your Projects', 'Announcements', 'Trending'];
			headers.forEach(headerTitle => {
				const header = document.createElement('div');
				header.classList.add('main-header');
				header.textContent = headerTitle;

				switch(headerTitle)
				{
					case 'Your Projects':
						projects.appendChild(header);
						break;
					case 'Announcements':
						announcements.appendChild(header);
						break;
					case 'Trending':
						trendings.appendChild(header);
						break;
					default:
						break;
				}
			});

			main.appendChild(projects);
			main.appendChild(announcements);
			main.appendChild(trendings);
		}

		addProjects() {
			const container = document.querySelector('.projects');

			projectSamples.forEach(project => {
				const p = document.createElement('div');
				const title = document.createElement('div');
				const description = document.createElement('p');

				p.classList.add('project');
				title.classList.add('title');
				description.classList.add('description');

				title.textContent = project.title;
				description.textContent = project.description;

				p.appendChild(title);
				p.appendChild(description);
				container.appendChild(p);
			});
		}

		addAnnouncements() {
			const container = document.querySelector('.announcements');

			announcementSamples.forEach(announcement => {
				const a = document.createElement('div');
				const title = document.createElement('div');
				const message = document.createElement('p');

				a.classList.add('announcement');
				title.classList.add('title');
				message.classList.add('description');

				title.textContent = announcement.title;
				message.textContent = announcement.message;
				
				a.appendChild(title);
				a.appendChild(message);
				container.appendChild(a);
			});
		}

		 addTrendings() {
			const container = document.querySelector('.trendings');

			trendingSamples.forEach(trending => {
				const t = document.createElement('div');
				const icon = document.createElement('img');
				const username = document.createElement('div');
				const project = document.createElement('div');

				t.classList.add('trending');
				icon.classList.add('icon', 'avatar');
				username.classList.add('username');
				project.classList.add('trending-project');

				icon.setAttribute('src', trending.picture);
				username.textContent = trending.username;
				project.textContent = trending.project;

				t.appendChild(icon);
				t.appendChild(username);
				t.appendChild(project);
				container.appendChild(t);
			});
		}

}

const myLayout = new Layout();

myLayout.addLayout();
myLayout.addSidebarElements();
myLayout.addHeaderElements();
myLayout.addMainElements();
myLayout.addProjects();
myLayout.addAnnouncements();
myLayout.addTrendings();
