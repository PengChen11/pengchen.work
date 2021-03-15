# Blog / Portfolio website for me

This website will tell the visitors things about me, display all my web development projects and articles I wrote to help new comers to the development world.

Deployed site:

[pengchen.work](https://pengchen.work)

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React with NextJS framework.
2. Deployed website will communicate with micro-service API gateway for data.
3. Axios for performing API Requests to backend service.
4. React Bootstrap and regular css for layout and styling.
5. Deployment to a cloud provider (Vercel in this case).
6. A static Home page, with animations.
7. A static about page, introduce my stories.
8. A static contact page, display my contact info.
9. A Work page, dynamically render projects cards from database ([blog service](https://github.com/PengChen11/Microservices-Blog)), and use Modal to display project details.
10. A Blog page, dynamically render articles I wrote from database ([blog service](https://github.com/PengChen11/Microservices-Blog)), and use NextJS dynamic page rendering for each individual article (Articles will be written in MarkDown).
11. This website will only DISPLAY info, full CRUD operation for projects and blogs will be handled in Admin center project, and being separated from this repo.

## Development Process, Milestones

1. Phase 1: static page development.

   - Basic React Application with NextJS framework.
   - static pre-rendering with NextJS for home, about and contact page.
   - React Bootstrap lib and regular css styling.

2. Phase 2: Dynamic rendering for work and blog page.

    - Warning: development for this phase maybe delayed, Admin-center need to have basic CRUD functions first to successfully create objects in DB, or sample data will be used just for now.
    - create React function components for work page and blog page.
    - periodical static pre-rendering with NextJS for work and blog page. Server side data update interval TBD.
    - React Bootstrap lib and regular css styling.

3. Phase 3: Additional features

     - move my story page data to the blog service and use Admin-center to do full CRUD.
