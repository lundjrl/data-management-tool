export default [
  {
    text: "Data Management",
    items: [
      {
        text: "Database",
        collapsed: false,
        items: [
          {
            text: "Alter",
            collapsed: false,
            items: [
              { text: "Column", link: "/dmt/database/alter/column" },
              { text: "Bulk Column", link: "/dmt/database/alter/bulk-column" },
            ],
          },
          {
            text: "Create",
            collapsed: false,
            items: [
              { text: "Column", link: "/dmt/database/create/column" },
              { text: "Bulk Column", link: "/dmt/database/create/bulk-column" },
              { text: "Table", link: "/dmt/database/create/table" },
            ],
          },
          {
            text: "Delete",
            collapsed: false,
            items: [
              { text: "Column", link: "/dmt/database/delete/column" },
              { text: "Bulk Column", link: "/dmt/database/delete/bulk-column" },
              { text: "Table", link: "/dmt/database/delete/table" },
            ],
          },
          {
            text: "JSON",
            collapsed: false,
            items: [
              {
                text: "Schema",
                items: [
                  {
                    text: "Get Json Schema Collection",
                    link: "/dmt/database/json/schema/get-json-schema-collection",
                  },
                  {
                    text: "Get Json Schema",
                    link: "/dmt/database/json/schema/get-json-schema",
                  },
                ],
              },
              { text: "Index", link: "/dmt/database/json" },
            ],
          },
          {
            text: "Rename",
            collapsed: true,
            items: [
              { text: "Column", link: "/dmt/database/rename/column" },
              { text: "Bulk Column", link: "/dmt/database/rename/bulk-column" },
            ],
          },
          { text: "Index", link: "/dmt/database/" },
        ],
      },
      {
        text: "Health",
        collapsed: true,
        link: "/dmt/health/",
      },
      {
        text: "Orm",
        collapsed: true,
        items: [
          {
            text: "Introspect",
            link: "/dmt/orm/introspect",
          },
        ],
      },
      {
        text: "Schema",
        collapsed: true,
        items: [
          {
            text: "Collection",
            items: [
              {
                text: "Delete By Id",
                link: "/dmt/schema/collection/delete-by-id",
              },
              { text: "Get By Id", link: "/dmt/schema/collection/get-by-id" },
              {
                text: "Update By Id",
                link: "/dmt/schema/collection/update-by-id",
              },
            ],
          },
          {
            text: "Records",
            items: [
              {
                text: "Delete By Id",
                link: "/dmt/schema/records/delete-by-id",
              },
              { text: "Get By Id", link: "/dmt/schema/records/get-by-id" },
              {
                text: "Update By Id",
                link: "/dmt/schema/records/update-by-id",
              },
            ],
          },
        ],
      },
      {
        text: "Search",
        collapsed: true,
        items: [{ text: "Query", link: "/dmt/search/query" }],
      },
    ],
  },
];
