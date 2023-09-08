const communityData = (data)=>{
    const community = {
        adminId: data[0],
        communityName: data[1],
        moderators: data[2]?.map(mods => mods[0]), 
        members: [data[0], ...(data[2]?.map(mods => mods[0]) || []), ...(data[3]?.map(members => members[0]) || [])], 
        description: data[4],
        joinType: data[5]
      };

      return community;
}

module.exports = {
    communityData
}