import { IBranch, IStructureNode } from "mvw-navigation/js";
export interface ISearchIndexConfig {
    destination?: string;
    bodySelector?: string;
    glob?: string;
}
/**
 * @additionalProperties: true
 */
export interface IEnvironmentConfig {
    baseUrl?: string;
    isRelease?: boolean;
}
export interface ICreatorConfig {
    ampPath?: string;
    destinationPath: string;
    environment: string;
    environments: {
        [key: string]: IEnvironmentConfig;
    };
    navigationPath?: string;
    pugPath: string;
    pugLintPath: string;
    siteTitle?: string;
    structure: Array<IBranch | IStructureNode>;
    searchIndex?: ISearchIndexConfig | boolean;
}
