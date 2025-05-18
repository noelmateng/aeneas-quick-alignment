const fs = require("fs/promises");
const { exec } = require("child_process");
const path = require("path");
const util = require("util");

const execPromisified = util.promisify(exec);

const audioPath = "./data/audio.mp3"
const transcriptPath = "./data/transcript.txt"
const processedTranscriptPath = "./data/transcript-processed.txt"
const outputPath = "./data/output.srt"
const command =
      `PYTHONIOENCODING=UTF-8 python3 -m aeneas.tools.execute_task "${audioPath}" "${processedTranscriptPath}" ` +
      `"task_language=eng|os_task_file_format=srt|is_text_type=plain|` +
      `task_adjust_boundary_no_zero=True|task_adjust_boundary_algorithm=percent|` +
      `task_adjust_boundary_rate_value=2.0|task_adjust_boundary_offset_value=0.01|` +
      `task_adjust_boundary_percent_value=5|task_adjust_boundary_beforenext_value=0.01|` +
      `task_adjust_boundary_aftercurrent_value=0.01" "${outputPath}"`;

async function run(){
      const file = await fs.readFile(transcriptPath, {encoding: "utf-8"});
      const lines = file.split(" ");
      await fs.writeFile(processedTranscriptPath,lines.join("\n"));
      console.log("processed transcript")
      await execPromisified(command);
      console.log("alignment successful")
}

run();