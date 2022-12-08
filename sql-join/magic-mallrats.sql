select "c"."firstName" as "fristName",
       "c"."lastName" as "lastName"
  from "customers" as "c"
join "rentals" as "r" using ("customerId")
join "inventory" as "i" using ("inventoryId")
join "films" as "f" using ("filmId")
 where "f"."title" = 'Magic Mallrats';
