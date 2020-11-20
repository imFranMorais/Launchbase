module.exports = {
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
    
        return age        
    },

    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`

        }
    },

    graduation(level) {
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
    },

    schoolYear(grade) {
        let schoolYear;
        switch (grade) {
            case "5f":
                schoolYear = "1° ensino fundamental";
                return schoolYear;
            case "6f":
                schoolYear = "6° ensino fundamental";
                return schoolYear;
            case "7f":
                schoolYear = "7° ensino fundamental";
                return schoolYear;
            case "8f":
                schoolYear = "8° ensino fundamental";
                return schoolYear;
            case "9f":
                schoolYear = "9° ensino fundamental";
                return schoolYear;
            case "1m":
                schoolYear = "1° ensino médio";
                return schoolYear;
            case "2m":
                schoolYear = "2° ensino médio";
                return schoolYear;
            case "3m":
                schoolYear = "3° ensino médio";
                return schoolYear;
            default:
                console.log("No Option Selected");       
        }
    }
}