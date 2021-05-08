UPDATE users 
SET
  username=${username}, 
  first_name=${first_name}, 
  last_name=${last_name}, 
  email=${email},
  highest_score=${highest_score}
WHERE 
  user_id = ${userId}

returning *;