# Example setup to use aeneas for forced alignment

## What this repo does: 
Use force-alignment on any audio transcript and generate an SRT


## Development notes:
We are building a Caption generator which
1. accepts audio and video files
2. generates the transcript
3. aligns the audio with the transcript

## How to run:

### Pre-requisite: 
* Docker
### Run the code
1. clone the repo and cd into it.
1. place your audio file in `data` folder. Currently the code process file named: `audio.mp3`
2. place your transcript file in `data` folder. Currently the code process file named: `transcript.txt`
3. run `docker compose up --build`
4. your aligned output would be generated in at `data/output.srt`.
