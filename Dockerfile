FROM resin/raspberrypi3-node

# Enable systemd
ENV INITSYSTEM on

COPY . /app
RUN cd /app && npm install

CMD ["udevadm trigger && node /app/server.js"]

EXPOSE 3000