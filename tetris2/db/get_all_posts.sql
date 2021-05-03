SELECT u.username, c.id, c.title, c.content, to_char(current_timestamp, 'Mon/DD/YYYY, HH:MM')
FROM users u
JOIN community_posts c ON (u.user_id = c.author_id)
ORDER BY c.date_created DESC;