select * from classroom
where to_tsvector(title) @@ to_tsquery($1)
OR to_tsvector(subject) @@ to_tsquery($1);