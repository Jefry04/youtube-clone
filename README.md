# YOUTUBE TOP-22

This project is a replica of YouTube App, built using **Reactjs**, **Redux** for the state and **Redux Thunk** for updating the state asynchronously. The client communicates through HTTP requests to an **[Express RESTful API server](https://github.com/Zuniga63/backend-youtube)** that is responsible for serving all the content that is displayed on the screen and the auth.

On this platform, the user can register, view videos that other users have uploaded, upload videos, leave comments and search for content.

## Screens

### Home

![Home](https://user-images.githubusercontent.com/50376585/190522896-72a55d97-a73a-46eb-94f4-6f3094388fbb.png)

### Login

![login](https://user-images.githubusercontent.com/68661179/182906195-c01a53d8-9500-4f7c-a852-f3078f638ace.gif)

### Upload Video

![upload_video](https://user-images.githubusercontent.com/68661179/182906777-1eca7545-2841-472a-ab71-a2fc77be2bf2.gif)

## [Demo](https://youtubetopv22.netlify.app/)

## About this proyect

This project was built using the **SCRUM methodologic** with weekly spring, where at the beginning of the week the features to be worked on were socialized and the work was divided to later carry out daily reviews and notify the progress.

The graphic interface was built using a **[figma design](<https://www.figma.com/file/WMw8qQ0bEYp7VuR3cOLpyW/YouTube-(Community>)** as a base where most of the main components were found and **SASS** was used for all styles of each component.

Finally, auxiliary libraries were used for the modals, forms and the visualization of the videos.

### Dependencies

|   |   |   |
| ------------ | ------------ | ------------ |
| ![react](https://user-images.githubusercontent.com/50376585/190654923-4f23f838-ee8a-4776-8216-4b1a04f93c18.png)  | [react](https://www.npmjs.com/package/react)  | (^18.1.0)  |
| ![react](https://user-images.githubusercontent.com/50376585/190654923-4f23f838-ee8a-4776-8216-4b1a04f93c18.png)  |  [react-dom](https://www.npmjs.com/package/react-dom) | (^18.1.0)  |
| ![react-router-dom](https://user-images.githubusercontent.com/50376585/190654935-acdae310-3846-4eab-a26a-05385aef629b.png)  | [react-router-dom](https://www.npmjs.com/package/react-router-dom) |(^6.3.0)|
| ![react-reduxc](https://user-images.githubusercontent.com/50376585/190654931-e16a6c38-7450-4445-bef4-b276fcd5d3a7.jpg) | [react-redux](https://www.npmjs.com/package/react-redux)|For the state of app(^8.0.1)|
| ![redux-thunk](https://user-images.githubusercontent.com/50376585/190654939-6383d92a-1d2e-4d22-9ddf-3bcd742c9495.jpeg) | [redux-thunk](https://www.npmjs.com/package/redux-thunk)|middleware for asynchronous state (^2.4.1)|
| | [react-player](https://www.npmjs.com/package/react-player)|For visualize videos (^2.10.1)|
| ![Axios-logo](https://user-images.githubusercontent.com/50376585/190654909-d7c2fcd0-1460-4f6b-b7b3-5018ea572e44.png) | [axios](https://www.npmjs.com/package/axios)|For HTTP request (^0.27.2)|
| ![mantine_logo](https://user-images.githubusercontent.com/50376585/190654917-fa18b184-31fa-4436-b656-a068f9c62a6b.png) | [mantine](https://mantine.dev/)| we use @mantine/core[*Forms, inputs, modals, drawer,...etc*], @mantine/dropzone[*For upload images and videos*] and @mantine/hooks|
| ![1280px-Sass_Logo_Color svg](https://user-images.githubusercontent.com/50376585/190654883-5d15929c-78fe-41ed-880b-51e498c75d94.png) | [sass](https://www.npmjs.com/package/sass)| For the CSS styles (^1.51.0)|
| ![swal2-logo](https://user-images.githubusercontent.com/50376585/190654942-1a79731c-c824-4c33-b0f1-ca210051e3b6.png) |[sweetalert2](https://www.npmjs.com/package/sweetalert2)|For some notifications (^11.4.19)|
|  ![tablericons](https://user-images.githubusercontent.com/50376585/190654944-2c62eef6-7f0d-4434-9c6d-e1deb7e96e35.jpg) | [tabler-icons-react](https://www.npmjs.com/package/tabler-icons-react)|(^1.48.1)|
| ![react-tostify](https://user-images.githubusercontent.com/50376585/190658973-6d4fea12-ef46-40e6-9079-e99dcf22c437.jpeg) | [react-toastify](https://www.npmjs.com/package/react-toastify)|For lite notifications (^9.0.5)|
| ![dayjs](https://user-images.githubusercontent.com/50376585/190654914-3f5e9475-72e1-445d-ade0-74b66cd328f6.png) | [dayjs](https://www.npmjs.com/package/dayjs)|For relative times (^1.11.3)|

### Dev Dependencies

|   |   |   |
| ------------ | ------------ | ------------ |
| ![ESLint_logo svg](https://user-images.githubusercontent.com/50376585/190657206-16a5c5f9-a6e2-437a-86a3-d7a58b450efa.png)  |  [eslint](https://www.npmjs.com/package/eslint) | With the rules of Air BnB and prettier(^8.15.0)  |
|  ![prettier](https://user-images.githubusercontent.com/50376585/190654922-4b08b7e8-31e7-4762-be0d-62ffda62a7ef.PNG) | [prettier](https://www.npmjs.com/package/prettier) | (^2.6.2)  |
| 🐶  | [husky](https://www.npmjs.com/package/husky)  |  ^8.0.1 |
| ![Cypress](https://user-images.githubusercontent.com/50376585/190654910-dae9b7dc-76b7-484d-b2ce-5035fa05e2d9.jpeg)  |  [cypress](https://www.npmjs.com/package/cypress) |(^10.3.0)   |

## Installation

1. Clone this respository.
2. Run the script `npm install`
3. Copy the file .env.example to .env.local with `cp .env.example .env.local`
4. Write the Backend URI and Epayco key
5. Run script `npm run dev` for excecute locally

## Created by

[Marco Jefferson Vasquez](https://github.com/Jefry04)
[Andres Felipe Zuñiga](https://github.com/Zuniga63)
[Anderson Uribe](https://github.com/45061)

<a href="https://github.com/Jefry04/youtube-clone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Jefry04/youtube-clone" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
