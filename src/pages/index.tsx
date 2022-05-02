import { NextPage } from "next";
import { Piano } from "../components/Piano";

const IndexPage: NextPage = () => {
    return (
        <div className="flex items-end h-screen bg-gray-600">
            <Piano />
        </div>
    );
};

export default IndexPage;
