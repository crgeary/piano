import { Octokit } from "@octokit/rest";
import yaml from "js-yaml";

import { YamlData } from "../types/data";

const config = {
  owner: "crgeary",
  repo: "piano",
  timelineDataFilePath: "data.yml",
};

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getYamlTimelineDataFromRepo = () => {
  return octokit.request({
    url: `/repos/${config.owner}/${config.repo}/contents/${config.timelineDataFilePath}`,
  });
};

export const getTimelineData = async () => {
  const { data: response } = await getYamlTimelineDataFromRepo();

  const dataYaml = Buffer.from(response.content, "base64").toString();
  return yaml.load(dataYaml) as YamlData;
};
