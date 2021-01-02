# Discord-Local-File-DB-CRUD
A crud for discord DDOS BOTs (My Custom Module)

Crud Module Functions

Name         |   Function Code
--------------------------------------------------
Register(C)  | register(discord, discord_id);
User (R)     | user(stat, discord_id);
Update (U)   | update(stat_to_change, new_stat, user_discord_id);
Remove (D)   | remove(discord_id);
isRegistered | isRegistered(discord_id);
isAdmin      | isAdmin(discord_id);
isPremium    | isPremium(discord_id);

-----------------------------------------------------------------------------------------------------------
register(discord, discord_id); [REGISTER DISCORD USER]

- Use 'message.auther.tag' for the discord argument and 'message.author.id' for discord_id argument
-----------------------------------------------------------------------------------------------------------
user(stat, discord_id); [GET USER STATS]

- List of the following valid stats:
	-> "username", "userid", "userlevel", "usermaxtime", "userisadmin", "all"

- Use 'message.author.id' for discord_id
-----------------------------------------------------------------------------------------------------------
update(stat_to_change, new_stat, user_discord_id); [UPDATE ONE OF THE FOLLOWING STAT ON A USER]

- List of the following valid (stat_to_change)
	-> "username", "userid", "userlevel", "usermaxtime", "userisadmin"

- Use new_stat argument for the new stat!

- Use 'message.author.id' for discord_id
-----------------------------------------------------------------------------------------------------------
remove(discord_id); [REMOVE A USER FROM DB]

- Use 'message.author.id' for discord_id
-----------------------------------------------------------------------------------------------------------
isRegistered(discord); [RETURN BOOLEN (TRUE/FALSE)] (BEST USED FOR IF STATEMENT)  [EX: if(isRegistered(discord_id) == true)]

- Use 'message.author.id' for discord_id
-----------------------------------------------------------------------------------------------------------
isAdmin(discord_id); [RETURN BOOLEN (TRUE/FALSE)] (BEST USED FOR IF STATEMENT)  [EX: if(isAdmin(discord_id) == true)]

- Use 'message.author.id' for discord_id
-----------------------------------------------------------------------------------------------------------
isPremium(discord_id); [RETURN BOOLEN (TRUE/FALSE)] (BEST USED FOR IF STATEMENT)  [EX: if(isAdmin(discord_id) == true)]

- Use 'message.author.id' for discord_id
-----------------------------------------------------------------------------------------------------------
