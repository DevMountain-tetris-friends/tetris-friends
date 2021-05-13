SELECT username, highest_score FROM users
WHERE highest_score IS NOT null
ORDER BY highest_score DESC
LIMIT 5;