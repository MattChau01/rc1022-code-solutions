select "f"."releaseYear" as "released",
       "g"."name" as "genre",
       "f"."title" as "title"
  from "films" as "f"
join "filmGenre" as "fg" using ("filmId")
join "genres" as "g" using ("genreId")
where "f"."title" = 'Boogie Amelie';
