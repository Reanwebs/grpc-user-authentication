const communityData = (data)=>{
    const membersArray = [];
    for (let i = 0; i < data[2].length; i++) {
        membersArray.push({
          member: {
            userId: data[i]
          }
        });
      }
    const community = {
        adminId: data[0],
        communityName: data[1],
        members:membersArray, 
        description: data[3],
        joinType: data[4]
      };

      return community;
}

module.exports = {
    communityData
}