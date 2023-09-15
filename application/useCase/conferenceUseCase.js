const conferenceUseCase = require('../../domain/repository/conferenceDBRepository')

module.exports ={
    getInterests: async ()=>{
        try {
            const interests = await conferenceUseCase.getActiveInterests();
            const data = [];
            interests.forEach((interest) => {
                data.push(interest);
            });
            return data;
        } catch (error) {
            throw new Error(error.message)
            
        }
    }
}