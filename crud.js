var fs = require("fs");

var CRUD = require("../auth/crud.js");

exports.user = function(stat, usrORid) {
    // USER FETCH STATUS 
    let got_user = false;

    /*
    Checks If Statistic Type Is VALID
    */
    let stats = [ "username", "userid", "userlevel", "usermaxtime", "userisadmin", "all" ];
    let found = false;
    stats.forEach(s => {
        if(s == stat) {
            found = true;
        }
    });
    if(!found) {
        return "Error, Invalid user stat type!";
    }

    /*
    Grab User From DB
    */
    let db = fs.readFileSync("../db/users.db", "utf8");
    let users = db.split('\n');
    users.forEach(user_data => {
        if(user_data.includes(usrORid))
        {
            let user_info = user_data.split("','");
            let username = user_info[0].replace("('", "");
            let userid = user_info[1];
            let userlevel = user_info[2];
            let usermaxtime = user_info[3];
            let userisadmin = user_info[4].replace("')", "");
            switch(stat) {
                case stats[0]:
                    stat = username;
                    got_user = true;
                    break;
                case stats[1]:
                    stat = userid;
                    got_user = true;
                    break;
                case stats[2]:
                    stat = userlevel;
                    got_user = true;
                    break;
                case stats[3]:
                    stat = usermaxtime;
                    got_user = true;
                    break;
                case stats[4]:
                    stat = userisadmin;
                    got_user = true;
                    break;
                case stats[5]:
                    got_user = true;
                    stat = username + "," + userid + "," + userlevel + "," + usermaxtime + "," + userisadmin;
                    break;
            }
        }
    })

    /*
    Check if user was found in DB or NOT
    */

    if(got_user == true)
    {
        return stat;
    } else {
        return "No user found!";
    }
}

exports.update = function(stat, new_stat, skis) {
    // update status validation
    let update_success = false;
    /*
    Checks If Statistic Type Is VALID
    */
    var user_rank_stats = ["username", "userid", "userlevel", "usermaxtime", "userisadmin"];
    if(!user_rank_stats.includes(stat)) {
        return "Error, Invalid stat type!";
    }
    
    let user = CRUD.user("all", skis); //search for users

   
    let info = user.split(',');
    let username = info[0];
    let userid = info[1];
    let userlevel = info[2];
    let usermaxtime = info[3];
    let userisadmin = info[4];

    if(user === "No user found!") {
        return "No user found to update!";
    }

    CRUD.remove(skis);
    
    switch(stat) {
        case user_rank_stats[0]:
            username = new_stat;
            update_success = true;
            break;
        case user_rank_stats[1]:
            userid = new_stat;
            update_success = true;
            break;
        case user_rank_stats[2]:
            if(new_stat > 5) {
                update_success = false;
                console.log("[APPLICATION ERROR]: Unable to change user level to this level! (Max levels: 5)");
            } else {
                userlevel = new_stat;
                update_success = true;
            }
            break;
        case user_rank_stats[3]:
            if(new_stat > 10000) {
                update_success = false;
                console.log("[APPLICATION ERROR]: Unable to change max user time over the Discord BOT Max Time");
            } else {
                update_success = true;
                usermaxtime = new_stat;
            }
            break;
        case user_rank_stats[4]:
            if(new_stat > 1) {
                update_success = false;
                console.log("[APPLICATION ERROR]: Unable to change user stats! (0 = no admin / 1 = admin)");
            } else {
                update_success = true;
                userisadmin = new_stat;
            }
            break;
    }
    fs.appendFileSync("../db/users.db", "('" + username + "','" + userid + "','" + userlevel + "','" + usermaxtime + "','" + userisadmin + "')\n");;
    return "User updated";
}

exports.register = function(usr, usrid) {
    if(CRUD.user("all", usrid).includes(usrid)) {
        return "User already registered!";
    } else {
        fs.appendFileSync("../db/users.db", "('" + usr + "','" + usrid + "','0','0','0')\n");
        return "User registered! Thank you for registering! <@" + usrid + ">";
    }

}

exports.remove = function(usrORid) {
    /*
    Grab Old Database
    */
    let old_db = fs.readFileSync("../db/users.db", "utf8");
    let old_users = old_db.split('\n'); // SPLIT DB INTO AN ARRAY OF LINES


    let new_db = ""; // NEW DB LIST

    /*
    Adding all users to new list that isn't the 'usrORid'
    */
    old_users.forEach(user => {
        if(!user.includes(usrORid)){
            new_db += user + "\n";
        }
    })

    /*
    Rewriting DB to new list
    */
    fs.writeFileSync("../db/users.db", new_db);

}   

exports.isRegistered = function(usrORid) {
    let user = CRUD.user("all", usrORid);
    if(user === "No user found!" || user === "Error, Invalid user stat type!" || !user) {
        return false;
    } else if(user.includes(usrORid) === true) {
        return true;
    } else {
        console.log("[x] Something went wrong reading user string from DB!");
        return false;
    }
}

exports.isAdmin = function(usrORid) {
    /*
    Gets user info if found!
    */
    return CRUD.user("userisadmin", usrORid);
}

exports.isPremium = function(usrORid) {
    if(CRUD.user("userlevel", usrORid) == "0")
    {
        return false;
    } else {
        return true;
    }
}
