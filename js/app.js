/**************************
* Application
**************************/
App = Em.Application.create({
tits: 'big'
});

	
/**************************
* Routes
**************************/
App.Router.map(function() {
  // put your routes here
});

App.

/**************************
* Models
**************************/
// App.Profile = DS.Model.extend({
//     tier: attr('string'),
//     isValid: attr('boolean'),
//     isCheater: attr('boolean'),
//     isOnline: attr('boolean'),
//     onlineStatus: attr('string'),
//     avatarTile: attr('string'),
//     gamertag: attr('string'),
//     gamerScore: attr('number'),
//     reputation: attr('number'),
//     name: attr('string'),
//     motto: attr('string'),
//     location: attr('string'),
//     bio: attr('string')
//     });

App.Profile = Em.Object.extend({
    tier: null,
    isValid: 0,
    isCheater: 0,
    isOnline: 0,
    onlineStatus: null,
    avatarTile: null,
    gamertag: null,
    gamerScore: 0,
    reputation: 0,
    name: null,
    motto: null,
    location: null,
    bio: null
});


/**************************
* Views
**************************/


/**************************
* Controllers
**************************/
App.ProfileController = Em.ObjectController.extend({ 
  // profile: null,
  profile: null,
	loadProfile: function(value) {
        gamertag = value;
        var me = this;
         if ( gamertag ) {
            var url = 'http://www.xboxleaders.com/api/1.0/profile.json'
                url += '?gamertag=%@'.fmt(gamertag);

            $.getJSON(url,function(data, value){
                var p = App.Profile.create({
                    tier: data.Data.Tier,
                    isOnline: data.Data.IsOnline,
                    onlineStatus: data.Data.OnlineStatus,
                    gamerScore: data.Data.GamerScore,
                    name: data.Data.Name,
                    avatarTile: data.Data.AvatarTile
                });
                profile = p;
                console.log(profile);
            });
        }
    }
});















	

