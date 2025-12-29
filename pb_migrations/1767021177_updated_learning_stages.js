/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2266811407")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"admin\"",
    "updateRule": "@request.auth.role = \"admin\"\n",
    "viewRule": "1=1"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2266811407")

  // update collection data
  unmarshal({
    "createRule": "",
    "updateRule": "",
    "viewRule": null
  }, collection)

  return app.save(collection)
})
