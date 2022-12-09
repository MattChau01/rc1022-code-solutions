select "g"."name" as "genre",
    count("fg".*) as "totals"
  from "genres" as "g"
  join "filmGenre" as "fg" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
 where "a"."actorId" = 178
group by "g"."genreId";
