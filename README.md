# Discord-Local-File-DB-CRUD
A crud for discord DDOS BOTs (My Custom Module)
Dont forget to change db file path!
-----------------------------------------------------------------------------------------------------------
Crud Module Functions (NEW JS DEVs > Create a 'db' Folder with 'users.db' in it
-----------------------------------------------------------------------------------------------------------

Name/Functions | Return Type     |   Function Code
-----------------------------------------------------------------------------------------------------------
Register(C)    | Return String   | register(discord, discord_id);
User (R)       | Return String   | user(stat, discord_id);
Update (U)     | String String   | update(stat_to_change, new_stat, user_discord_id);
Remove (D)     | Return String   | remove(discord_id);
isRegistered   | Return Boolen   | isRegistered(discord_id);
isAdmin        | Return Boolen   | isAdmin(discord_id);
isPremium      | Return Boolen   | isPremium(discord_id);

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
