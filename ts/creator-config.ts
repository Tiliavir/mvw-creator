export interface ICreatorConfig {
  ampPath?: string;
  destinationPath: string;
  environment: string;
  environments: {
    [key: string]: { baseUrl: string }
  };
  navigationPath?: string;
  pugPath: string;
  siteTitle?: string;
  structureJsonPath: string;
}
