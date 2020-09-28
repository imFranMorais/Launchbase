module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || 
            month == 0 && 
            today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }
    
        return age        
    },

    date: function(timestamp) {
        const date = new Date(timestamp)
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    },

    graduation: function(level) {
        let graduation;
        switch (level) {
            case "high-school":
                graduation = "Ensino médio completo";
                return graduation;
            case "higherEducation":
                graduation = "Ensino superior completo"
                return graduation;
            case "master":
                graduation = "Mestrado"
                return graduation;
            case "doctorateDegree":
                graduation = "Doutorado"
                return graduation;
            default:
                console.log("No Option Selected");       
        }
    }
}