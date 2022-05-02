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

export const getTimelineData = async () => {
  const { data } = await octokit.request({
    url: `/repos/${config.owner}/${config.repo}/contents/${config.timelineDataFilePath}`,
  });

  const dataYaml = Buffer.from(data.content, "base64").toString();
  return yaml.load(dataYaml) as YamlData;
};

export const getTrack = async (path: string) => {
  const { data } = await octokit.request({
    url: `/repos/${config.owner}/${config.repo}/contents/${path}`,
  });
  return {
    name: data.name,
    url: data.download_url,
  };
};
