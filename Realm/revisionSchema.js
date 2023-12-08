import Realm from "realm";

class revision extends Realm.Object { }
revision.schema = {
    name: "revision",
    properties: {
        recordID: "string",
        name:"string",
        dateJ0:"date",
        revisionList: "string",
    },
    primaryKey: "recordID",
};

export default new Realm({ schema: [revision], schemaVersion: 2});