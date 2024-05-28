<div align="center">
  <h2>Recipe Finder</h2>
  <p>
    Solo Frontend
  </p>
  <img src="portada.png"></img>
</div>

## 📜 Description

- Due to its practicality, **Vite** was chosen to initialize, minify, and create the production *bundle*.
- **TypeScript** was employed to enhance code quality with static typing and improved developer tooling.
- **React**, **TailwindCSS** were used to quickly layout complex components.
- **ShadcnUI** was utilized for providing a set of accessible and customizable UI components based on *Tailwind*.
- **Zod** was used for schema validation to ensure the correctness of data structures.
- **React-router-dom** was employed to handle routing within the React application, enabling navigation between different components and views.
- The project is deployed on [**Netlify**](https://bespoke-haupia-b6aac1.netlify.app/). Additionally, the final code is dockerized for local testing.
- **Update1 - release/migrate_zustand**: Implemented Zustand for state management to handle complex application states efficiently.
- **Update2 - release/add_testing**: Added testing frameworks **React Testing Library**, **Jest**, and **Mock Service Worker** for unit and integration testing.

## 🚀 Getting Started

### **Online Version**

Use this [link](https://bespoke-haupia-b6aac1.netlify.app/ "Test Demo") to try the code deployed on Netlify.


### **Local Version**
1. Run the following commands for *Linux*. You must have [**Docker**](https://docs.docker.com/engine/install/) and its [**post-installation**](https://docs.docker.com/engine/install/linux-postinstall/) set up beforehand.

```bash
# Download the latest image from DockerHub:
docker pull deglanrivas/frontend-ts-recipefinder:latest

# Create a container based on that image:
docker run --rm -d -p 8080:80 --name demo_container deglanrivas/frontend-ts-recipefinder:latest

```

2. Open [**http://localhost:8080**](http://localhost:8080/) in your browser to see the result 🚀

3. Once the test is complete, remove the image and container:
```bash
# Stop the containers:
docker stop demo_container && docker rmi deglanrivas/frontend-ts-recipefinder:latest

# Verify they were correctly removed:
docker images
docker ps -a
```