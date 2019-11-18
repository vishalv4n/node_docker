FROM 200.0.1.100:5000/node 

WORKDIR /app


CMD npm install

COPY . .

EXPOSE 4000

CMD node main.js