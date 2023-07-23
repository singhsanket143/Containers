FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git 

RUN git clone https://github.com/singhsanket143/Dockerizing_node_project.git .

ENV PORT=3000

# EXPOSE 3000

RUN npm ci

CMD ["npm", "start"]


# docker build -t app-from-github-with-env .
# docker run -it --init --publish 3001:3000 app-from-github-with-env:latest
# docker run -it --init -p 3001:3000 app-from-github-with-env:latest
# docker run -it --init -P app-from-github-with-env:latest