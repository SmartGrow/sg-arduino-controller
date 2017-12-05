FROM resin/raspberrypi3-node

# Enable systemd
ENV INITSYSTEM on

COPY . /app

WORKDIR /app
RUN npm install

CMD ["npm", "start &"]

EXPOSE 3000