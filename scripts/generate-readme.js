const fs = require("fs-extra");
const path = require("path");
const yaml = require("js-yaml");

(async () => {
    const templatePath = path.join(__dirname, "./stubs/README.md");
    const ymlPath = path.join(__dirname, "../data.yml");
    const outputPath = path.join(__dirname, "../README.md");

    const [templateContents, ymlContents] = await Promise.all([
        fs.readFile(templatePath, "utf8"),
        fs.readFile(ymlPath, "utf8"),
    ]);

    const data = yaml.load(ymlContents);

    const events = data.events.map(({ date, action, description }) => {
        return [
            `-   **${date.toLocaleDateString("en-gb")}**`,
            action.replace(/(^\w{1}|\.\s*\w{1})/gi, (s) => s.toUpperCase()),
            description,
        ]
            .filter((n) => !!n)
            .join(" - ");
    });

    const tracks = data.tracks.map((track) => {
        const date = track.date.toLocaleDateString("en-gb");
        const name = track.url.replace(/^midi\/[0-9]{4}\/|\.midi$/gi, "");
        return `-   **${date}** - [${name}](${track.url})`;
    });

    const readmeContents = templateContents.replace(/{{(?:\W+)?([a-z]+)+(?:\W+)?}}/gi, (_, key) => {
        switch (key) {
            case "events":
                return events.join("\n");
            case "tracks":
                return tracks.join("\n");
        }
        return match;
    });

    await fs.outputFile(outputPath, readmeContents);
})();
