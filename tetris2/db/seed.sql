CREATE TABLE users (
  user_id SERIAL PRIMARY KEY, 
  username VARCHAR(50),
  first_name VARCHAR(50), 
  last_name VARCHAR(50),
  email VARCHAR(60),
  password TEXT, 
  highest_score INT(10)
);

CREATE TABLE community_posts (
    id serial primary key,
    title varchar(255) not null,
    content text,
    author_id INT NOT null references users(user_id),
    date_created timestamp
);

-- CREATE TABLE scores (
--   score_id INT PRIMARY KEY,
--   user_id INT REFERENCES users(user_id) ON DELETE cascade, 
--   highest_score INT REFERENCES users(highest_score)
-- )
