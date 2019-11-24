import {
  RxJsonSchema,
  RxCollection,
  RxCollectionCreator,
  RxDocument
} from "rxdb";

export type VersionType = {
  dam_id: string;
  lang_code: string;
  version_code: string;
  version_code_alt: string;
  version_name: string;
  media: string;
};

export type VersionMethods = {
  isText: () => boolean;
};

export type VersionDocument = RxDocument<VersionType, VersionMethods>;

export type VersionCollectionMethods = {
  getAll: () => Promise<VersionDocument[]>;
};

export type VersionCollection = RxCollection<
  VersionType,
  VersionMethods,
  VersionCollectionMethods
>;

export const versionSchema: RxJsonSchema<VersionType> = {
  title: "Version schema",
  description: "Describe a version in the database",
  version: 0,
  keyCompression: true,
  type: "object",
  properties: {
    dam_id: {
      type: "string",
      primary: true
    },
    lang_code: {
      type: "string"
    },
    version_code: {
      type: "string"
    },
    version_code_alt: {
      type: "string"
    },
    version_name: {
      type: "string"
    },
    media: {
      type: "string"
    }
  }
};

const versionMethods: VersionMethods = {
  isText: function(this: VersionDocument) {
    return this.media === "text";
  }
};

const versionCollectionMethods: VersionCollectionMethods = {
  getAll: async function(this: VersionCollection) {
    const allDocs = await this.find().exec();
    return allDocs;
  }
};

export const versionCollection: RxCollectionCreator = {
  name: "versions",
  schema: versionSchema
};
