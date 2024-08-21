FROM node:22.6.0

WORKDIR /app

COPY . .

# Instale as dependências
RUN npm install

# Instale o Angular CLI globalmente
RUN npm install -g @angular/cli

# Adicione o caminho global do npm ao PATH
ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
