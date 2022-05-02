export type YamlDataEvent = {
    date: Date;
    action: string;
    description?: string;
};

export type YamlDataTrack = {
    date: Date;
    url: string;
};

export type YamlData = {
    events: YamlDataEvent[];
    tracks: YamlDataTrack[];
};
