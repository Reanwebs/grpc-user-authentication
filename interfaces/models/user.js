const communityData = (data)=>{
    const membersArray = [];
    const member = data[2]
    for (let i = 0; i < member.length; i++) {
        membersArray.push({
            userId: member[i]
        });
      }
    const community = {
        adminId: data[0],
        communityName: data[1],
        members:membersArray, 
        description: data[3],
        joinType: data[4],
        communityImage:data[5]
      };

      return community;
}

module.exports = {
    communityData
}