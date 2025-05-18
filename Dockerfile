FROM python:3.10-alpine3.20
RUN apk add build-base ffmpeg espeak espeak-dev
RUN apk add --update nodejs npm
WORKDIR /app
COPY . /app
RUN pip install numpy && pip install aeneas 
RUN cd /app && npm i