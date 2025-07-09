class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            submitButton: "[type='submit']"   
        }
      
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, driverLicenseDate) {
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(employeeId) // employee ID
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(otherId) // Other Id
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(driversLicenseNumber) // Driver License Number
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type(driverLicenseDate) // License Expiry Date
        cy.get('.--close').click() // Date Close Button

    }

    fillNacionality () {
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // Nacionality
        cy.get(':nth-child(27) > span').click() // Brazilian
    }

    fillMaritalStatus (){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click() // Marital Status
        cy.get(':nth-child(3) > span').click() // Married
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click() // Save button
        cy.get('body').should('contain', 'Successfully Updated') // Success message
        cy.get('.oxd-toast-close').click() // Close Button Success message*/
    }


}

export default MyInfoPage