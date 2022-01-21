FROM nginx
# define diretório principal
# WORKDIR /app
# RUN npm install
# RUN npm run build

# variável do ambiente (disponível para todas as apps do container)
ENV API_URL=http://localhost:8000/api/

RUN ls

# direcionamento ocorre para essa pasta, facilita o comando run
WORKDIR /usr/share/nginx/html

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html

# expõe porta externa (serve mais para documentação)
EXPOSE 3000

# executa ao iniciar container, não sobrescrito pelo run
ENTRYPOINT [ "nginx" ]

# executa ao iniciar container, sobrescrito pelo run
RUN [ "-g", "daemon off;" ]

COPY ./index.html /usr/share/nginx/html

# executa ao iniciar container, não será sobrescrito pelo run
# nesses casos, echo hello, world! será executado ao iniciar o container
# ENTRYPOINT [ "/bin/echo", "hello, world!" ]

# ENTRYPOINT [ "/bin/echo" ]
# CMD [ "hello, world!" ]

# nesse caso, printa hello john, pois cmd é substituído pelo parâmetro passado no docker container run
# ENTRYPOINT [ "/bin/echo", "hello" ]
# CMD [ "world" ]
# docker container run hello-world-image john

# não especificar o USER seta o root como padrão (perigoso segurança)
# em imagens node, USER node já existe e tem os privilégios necessários
# RUN chown -R node:ndoe /app
# USER node

# ao buildar a imagem, um cache que armazena as camadas é gerado
# se não houver mudança naquele step (camada), o Docker usa o cache daquele step do último build
# se houver mudança, todas as camadas subsequentes são buildadas novamente
# por isso, deixar camadas propensas a mudanças mais para o final do pipeline