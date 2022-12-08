select "ad"."line1" as "street address",
       "ci"."name" as "city",
       "ad"."district" as "district",
       "co"."name" as "country"
  from "addresses" as "ad"
  join "cities" as "ci" using ("cityId")
  join "countries" as "co" using ("countryId");
