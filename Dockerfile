FROM 200.0.1.100:5000/node 




WORKDIR /app



COPY . .

RUN npm install express mysql

EXPOSE 4000

CMD node main.js