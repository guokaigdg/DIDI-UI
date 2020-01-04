export const IndexDB_config = {
  db_name: "historyDB",
  collections: [
    {
      colName: "page",
      colSchema: ["title", "path", "pageSnapshot", "isHome"]
    }
  ]
};
