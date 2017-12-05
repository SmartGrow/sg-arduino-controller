FROM resin/raspberrypi3-node

# Enable systemd
ENV INITSYSTEM on

COPY . /app

CMD ["node", "/app/server.js"]

# replace this with your application's default port
EXPOSE 3000