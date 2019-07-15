FROM wordaddict/node:10.15.1-slim
RUN mkdir -p /user/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN chmod +x /usr/src/app/run.sh
RUN npm install --force && npm cache verify
CMD ./run.sh
