import { rimraf } from "rimraf";
import {fileExists} from "./fileExists";

export const rmdir = async (dirname: string): Promise<string> => {
    const alreadyExists = await fileExists(dirname);
    if (!alreadyExists) {
        return dirname;
    } else {
        try {
            await rimraf(dirname);
            return dirname;
        } catch (error) {
            throw error;
        }
    }
};
