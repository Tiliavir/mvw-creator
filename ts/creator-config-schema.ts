import { SiteStructureSchema } from "mvw-navigation/js/site-structure-schema.js";

export const CreatorConfigSchema: any = {
  $schema: "http://json-schema.org/draft-06/schema",

  additionalProperties: false,
  description: "MVW Creator configuration",
  properties: {
    ampPath: { type: "string" },
    destinationPath: { type: "string" },
    environment: { type: "string" },
    environments: {
      patternProperties: {
        "^[a-z]+$": {
          additionalProperties: true,
          properties: {
            baseUrl: { type: "string" },
            isRelease: { type: "boolean" }
          },
          type: "object"
        }
      },
      type: "object",
    },
    navigationPath: { type: "string" },
    pugPath: { type: "string" },
    pugLintPath: { type: "string" },
    siteTitle: { type: "string" },
    structure: { $ref: SiteStructureSchema },
    searchIndex: {
      anyOf: [{
          additionalProperties: false,
          properties: {
            destination: { type: "string" },
            bodySelector: { type: "string" },
            glob: { type: "string" },
          },
          type: "object"
        },
        {
          type: "boolean"
        }
      ]
    }
  },
  required: ["destinationPath", "environment", "environments", "pugPath", "pugLintPath", "structure"],
  title: "JSON Schema for the MVW Creator configuration",
  type: "object"
};
