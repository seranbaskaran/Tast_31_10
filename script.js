let data={
  "data": {
    "teams": {
      "teama": {
        "tid": 7,
        "title": "New Zealand",
        "abbr": "NZ",
        "alt_name": "New Zealand",
        "type": "country",
        "thumb_url": "https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png",
        "logo_url": "https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png",
        "country": "nz",
        "sex": "male",
        "cid": 0,
        "squads": [
          {
            "player_id": 46141,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "wk",
            "playing11": true,
            "name": "Devon Conway"
          },
          {
            "player_id": 16609,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Will Young"
          },
          {
            "player_id": 1081,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Rachin Ravindra"
          },
          {
            "player_id": 16509,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Daryl Mitchell"
          },
          {
            "player_id": 44185,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(WK/C)",
            "role": "wk",
            "playing11": true,
            "name": "Tom Latham"
          },
          {
            "player_id": 1082,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Glenn Phillips"
          },
          {
            "player_id": 1708,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Mark Chapman"
          },
          {
            "player_id": 1923,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Mitchell Santner"
          },
          {
            "player_id": 486,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Matt Henry"
          },
          {
            "player_id": 16643,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Lockie Ferguson"
          },
          {
            "player_id": 47,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Trent Boult"
          }
        ]
      },
      "teamb": {
        "tid": 498,
        "title": "Afghanistan",
        "abbr": "AFG",
        "alt_name": "Afghanistan",
        "type": "country",
        "thumb_url": "https://images.entitysport.com/assets/uploads/2023/07/Afghanistan-3.png",
        "logo_url": "https://images.entitysport.com/assets/uploads/2023/07/Afghanistan-3.png",
        "country": "af",
        "sex": "male",
        "cid": 0,
        "squads": [
          {
            "player_id": 93570,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(WK)",
            "role": "wk",
            "playing11": true,
            "name": "Rahmanullah Gurbaz"
          },
          {
            "player_id": 45172,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Ibrahim Zadran"
          },
          {
            "player_id": 44977,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bat",
            "playing11": true,
            "name": "Rahmat Shah"
          },
          {
            "player_id": 44991,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "(C)",
            "role": "bat",
            "playing11": true,
            "name": "Hashmatullah Shahidi"
          },
          {
            "player_id": 93481,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Azmatullah Omarzai"
          },
          {
            "player_id": 1153,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "wk",
            "playing11": true,
            "name": "Ikram Alikhil"
          },
          {
            "player_id": 319,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "ar",
            "playing11": true,
            "name": "Mohammad Nabi"
          },
          {
            "player_id": 1157,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Rashid Khan"
          },
          {
            "player_id": 93418,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Mujeeb Ur Rahman"
          },
          {
            "player_id": 1404,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Naveen-ul-Haq"
          },
          {
            "player_id": 62778,
            "substitute": false,
            "out": false,
            "in": false,
            "role_str": "",
            "role": "bowl",
            "playing11": true,
            "name": "Fazalhaq Farooqi"
          }
        ]
      }
    }
  }
}
const allPlayer = [];
let teamData = data['data']['teams'];
for (let i in teamData) {
    for (let j in teamData[i]['squads']) {
        teamData[i]['squads'][j]['team'] = data['data']['teams'][i]['title'];
        allPlayer.push(Object.assign(teamData[i]['squads'][j],{visible:false},{captain:false},{vicecaptain:false},{disable:false}));

    }
}
const roleFilters = {}; // Create an object to store players by role
// Loop through the players and group them by role
allPlayer.forEach(player => {
    if (!roleFilters[player.role]) 
    {
      roleFilters[player.role] = [];
    }
    roleFilters[player.role].push(player);
});

//let selectedPlayers = [];
function displayPlayersByRole(role) {
    //header color
    const buttons = document.querySelectorAll('.role-button');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });
    // Add 'active-button' class to the clicked button
    const activeButton = document.querySelector(`[data-role='${role}']`);
    activeButton.classList.add('active-button');

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    roleFilters[role].forEach(player => {
        const row = document.createElement('tr');
        row.setAttribute('class', 'row1');
        row.addEventListener('click', () => {
          if (player.visible === false) {
            // Check if the player can be selected based on your restrictions
            let count = 0;
            allPlayer.forEach((val) => {
              if (val.visible === true) {
                count++;
              }
            });
            if (count >= 11) {
              alert("Cannot select more than 11 players");
              return;
            }
        
            count = 0;
            allPlayer.forEach((val) => {
              if (val.visible === true && val.role === player.role) {
                count++;
              }
            });
            switch (player.role) {
              case 'wk':
                if (count >= 4) {
                  alert('Cannot select more wicket keepers');
                  return;
                }
                break;
              case 'bat':
                if (count >= 6) {
                  alert('Cannot select more batsmen');
                  return;
                }
                break;
              case 'ar':
                if (count >= 4) {
                  alert('Cannot select more all-rounders');
                  return;
                }
                break;
              case 'bowl':
                if (count >= 6) {
                  alert('Cannot select more bowlers');
                  return;
                }
                break;
            }
        
            count = 0;
            allPlayer.forEach((val) => {
              if (val.visible === true && val.team === player.team) {
                count++;
              }
            });
            if (count >= 7) {
              alert('Cannot select more players from the same team');
              return;
            }
           
            player.visible = true;
            showPlayerInSection(allPlayer);
          } 
          else {
            // Deselect the player
            player.visible = false;
            showPlayerInSection(allPlayer);
          }
          // Toggle row background color
          row.style.backgroundColor = player.visible ? 'rgba(151, 170, 51, 0.4)' : '';
          
          //checkRoleRestrictions();
          validateCricketTeam(allPlayer)
        });
        
        player.visible==true?row.style.backgroundColor='rgba(151,170,51,0.4)':row.style.backgroundColor='';
        const playerTypeImage = getPlayerTypeImage(player.role);
        const thumbUrl = player.team === "New Zealand" ? teamData.teama.thumb_url : teamData.teamb.thumb_url;
       
        row.innerHTML = `
            <td><img src="${thumbUrl}" alt="Player Image" width="50"></td>
            <td>${player.name}</td>
            <td>${player.player_id}</td>
            <td><img src="${playerTypeImage}"alt="Player Type" width="50"></td>
        `;
        tableBody.appendChild(row);
    });
}

function getPlayerTypeImage(playerRole) {
    switch (playerRole) {
        case 'ar':
            return "https://png.pngtree.com/png-clipart/20210225/ourmid/pngtree-wooden-cricket-bat-clipart-sporting-goods-png-image_2957536.png";
        case 'bat':
            return "https://images.vexels.com/media/users/3/316363/isolated/preview/02c4382e5d08daec77666410ddae3e6a-cricket-bat.png";
        case 'wk':
            return "https://cdn.iconscout.com/icon/premium/png-256-thumb/wicket-keeper-gloves-4399285-3757032.png?f=webp";
        case 'bowl':
            return "https://e7.pngegg.com/pngimages/488/27/png-clipart-cricket-balls-tennis-balls-stump-cricket-sport-sphere.png";
    }
}

function showPlayerInSection(allPlayer) {
  const choosedPlayerDiv = document.querySelector('.single-fantasy-tip');
  const playerSections = {
    ar: choosedPlayerDiv.querySelector('.all-rounder-section'),
    bat: choosedPlayerDiv.querySelector('.batter-section'),
    wk: choosedPlayerDiv.querySelector('.wicket-keeper-section'),
    bowl: choosedPlayerDiv.querySelector('.bowler-section'),
  };
  for (const section in playerSections) {
    playerSections[section].innerHTML = '';
  }
  allPlayer.forEach((player)=>{
    if(player.visible==false){
      return;
    }
  const playerType = getPlayerTypeStr(player.role);
  const playerSection = choosedPlayerDiv.querySelector(`.${playerType}-section`);
  const playerDiv = document.createElement('div');
  playerDiv.className = 'player-info';

  const playerImage = document.createElement('img');
  playerImage.src = player.team === "New Zealand" ? 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player2.svg' : 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player1.svg';
  const playerName = document.createElement('p');
  playerName.className = 'player-name';
  playerName.textContent = player.name;
    if(player.captain==true){
      let captainImg=document.createElement('img');
      captainImg.src='https://static.sportskeeda.com/cricket_images/fantasy_v2/captain-icon-new.svg';
      captainImg.className='captain-logo';
      playerDiv.appendChild(captainImg);
    }
    if(player.vicecaptain==true){
      let viceCaptainImg=document.createElement('img');
      viceCaptainImg.src='https://static.sportskeeda.com/cricket_images/fantasy_v2/vice-captain-icon-new.svg';
      viceCaptainImg.className='viceCaptain-logo';
      playerDiv.appendChild(viceCaptainImg);
    }

  playerDiv.appendChild(playerImage);
  playerDiv.appendChild(playerName);

  playerSection.appendChild(playerDiv);
  })
}

/* function removePlayer(player) {
  const index = selectedPlayers.findIndex(p => {
    p.captain=false;
    p.vicecaptain=false;
    return p.player_id === player.player_id});
  if (index !== -1) {
      selectedPlayers.splice(index, 1);
  }
} */
// Function to get the player type
function getPlayerTypeStr(playerRole) {
    switch (playerRole) {
        case 'ar':
            return 'all-rounder';
        case 'bat':
            return 'batter';
        case 'wk':
            return 'wicket-keeper';
        case 'bowl':
            return 'bowler';
        default:
            return 
            // Function to ge'other';
    }
}

document.getElementById("nextButton").addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  const modalBody = modal.querySelector(".modal-body");
  modalBody.innerHTML = "";

  const captainSelectionForm = document.createElement("div");
  captainSelectionForm.id = "captainSelectionForm";

  allPlayer.forEach((player, index) => {
      if(player.visible==true)
      {
        const playerDiv = document.createElement("div");
      playerDiv.className = "selected-player";

      const playerImage = document.createElement('img');
      playerImage.src = player.team === "New Zealand" ? 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player2.svg' : 'https://staticg.sportskeeda.com/cricket_images/fantasy_v2/player1.svg';

      const playerName = document.createElement("p");
      playerName.textContent = `${index + 1}. ${player.name} - ${player.team}`;

      const playerSelection = document.createElement('div');
      playerSelection.className = "playerSelection";

      const captainRadio = document.createElement("input");
      captainRadio.type = "radio";
      captainRadio.name = "captain";
      captainRadio.value = player.player_id;
      captainRadio.id = `captain${index}`;

      const captainLabel = document.createElement("label");
      captainLabel.htmlFor = `captain${index}`;
      captainLabel.textContent = "Captain";

      const viceCaptainRadio = document.createElement("input");
      viceCaptainRadio.type = "radio";
      viceCaptainRadio.name = "viceCaptain";
      viceCaptainRadio.value = player.player_id;
      viceCaptainRadio.id = `viceCaptain${index}`;

      const viceCaptainLabel = document.createElement("label");
      viceCaptainLabel.htmlFor = `viceCaptain${index}`;
      viceCaptainLabel.textContent = "Vice Captain";

      playerSelection.appendChild(captainRadio);
      playerSelection.appendChild(captainLabel);
      playerSelection.appendChild(viceCaptainRadio);
      playerSelection.appendChild(viceCaptainLabel);

      playerDiv.appendChild(playerImage);
      playerDiv.appendChild(playerName);
      playerDiv.appendChild(playerSelection);
      captainSelectionForm.appendChild(playerDiv);
      }
  });

  modalBody.appendChild(captainSelectionForm);
  modal.style.display = "block";
  const selectCaptain=document.getElementById('selectCaptain');
  selectCaptain.addEventListener("click", ()=>{
      // e.preventDefault();
      const captainValue = document.querySelector('input[name="captain"]:checked').value;
      const viceCaptainValue = document.querySelector('input[name="viceCaptain"]:checked').value;
      allPlayer.forEach(player1 => {
          player1.captain=false;
          player1.vicecaptain=false;
          if (player1.player_id == captainValue) {
              player1.captain = true;
          }
          if (player1.player_id == viceCaptainValue) {
              player1.vicecaptain = true;
          }
          //console.log(player1);
      });
      // Close the modal
      modal.style.display = "none";
      showPlayerInSection(allPlayer);
  });
});




 function checkCount(roleCounts){

    allPlayer.forEach((player)=>{
      if(player.visible){
        if(!roleCounts['selectedPlayerCount']){
          roleCounts['selectedPlayerCount'] = 0;
        }

        if (!roleCounts[player.role]) 
        {
          roleCounts[player.role] = 0;
        }
        if(!roleCounts[player.team]){
          roleCounts[player.team]=0;
        }
        roleCounts['selectedPlayerCount']++;
        roleCounts[player.role]++;
        roleCounts[player.team]++;
      }
    })
    console.log(roleCounts);
} 

function getMinimumRequiredPlayers(role, roleCounts){
  let requiredCount = 0;
  switch(role){
    case 'wk':
    case 'ar':
      if(1- roleCounts[role] > 0) 
        requiredCount = 1- roleCounts[role]; 
      break;
    case 'bat':
    case 'bowl':
      let requiredCount = 3- roleCounts[role] > 0;
      if(3- roleCounts[role] > 0) 
        return requiredCount = 3- roleCounts[role]; 
      break;
  }
  return requiredCount;
}

function validateCricketTeam(allPlayers) {
  let roleCounts = {};
  const playerTypes = {
    batsman: { min: 3, max: 6 },
    bowler: { min: 3, max: 6 },
    allRounder: { min: 1, max: 4 },
    wicketKeeper: { min: 1, max: 4 },
  };
  checkCount(roleCounts);
  allPlayer.forEach((player)=>{
    if(player.visible==false){
      // team based validation
      if(roleCounts[player.team]>=7){
        player.disable=true;
        console.log("maximum count is reached"+player.team);
      }
      // role based validation
      switch(player.role){
        case 'wk':
          if(roleCounts[player.role]>=4){
            player.disable=true;
            console.log("maximum reached for "+player.role +" role");
          }
          if(roleCounts[player.role]>=1 && (11 - roleCounts['selectedPlayerCount'] - getMinimumRequiredPlayers('bat', roleCounts)- getMinimumRequiredPlayers('bowl', roleCounts)- getMinimumRequiredPlayers('ar', roleCounts))<=0){
              player.disable = true;
          }
        break;
        case 'ar':
          if(roleCounts[player.role]>=4){
            player.disable=true;
            console.log("maximum reached for "+player.role +" role");
          }
          if(roleCounts[player.role]>=1 && (11 - roleCounts['selectedPlayerCount'] - getMinimumRequiredPlayers('bat', roleCounts)- getMinimumRequiredPlayers('bowl', roleCounts)- getMinimumRequiredPlayers('wk', roleCounts))<=0){
              player.disable = true;
          }
        break;
        case 'bat':
          if(roleCounts[player.role]>=6){
            player.disable=true;
            console.log("maximum reached for "+player.role +" role");
          }
          if(roleCounts[player.role]>=3 && (11 - roleCounts['selectedPlayerCount'] - getMinimumRequiredPlayers('wk', roleCounts)- getMinimumRequiredPlayers('bowl', roleCounts)- getMinimumRequiredPlayers('ar', roleCounts))<=0){
            player.disable = true;
          }
        break;
        case 'bowl':
          if(roleCounts[player.role]>=6){
            player.disable=true;
            console.log("maximum reached for "+player.role +" role");
          }
          if(roleCounts[player.role]>=3 && (11 - roleCounts['selectedPlayerCount'] - getMinimumRequiredPlayers('wk', roleCounts)- getMinimumRequiredPlayers('bat', roleCounts)- getMinimumRequiredPlayers('ar', roleCounts))<=0){
            player.disable = true;
          }
        break;
      }
    }  

  })
}
