import { INavigationNode } from "mvw-navigation/js";

export interface ISearchIndexConfig {
  destination: string;
  bodySelector: string;
  glob: string;
}

export interface ICreatorConfig {
  ampPath?: string;
  destinationPath: string;
  environment: string;
  environments: {
    [key: string]: {
      baseUrl: string;
      isRelease: boolean;
    };
  };
  navigationPath?: string;
  pugPath: string;
  pugLintPath: string;
  siteTitle?: string;
  structure: INavigationNode[];
  searchIndex?: ISearchIndexConfig | boolean;
}
