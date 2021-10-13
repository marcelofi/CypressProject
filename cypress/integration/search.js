describe("Search elements",()=>{ 
    beforeEach(()=>{
        cy.visit('/')
    })
    it("Search for elements with multiple results",()=>{ 
        cy.search('dress')
        cy.fixture('searchresults').then((searchresult)=>{ 
            cy.get(searchresult.title).should('contain','dress')

        })
    })
    it('search for elementes with no results',()=>{ 
        cy.search('qwerty')
        cy.fixture('searchresults').then((searchresult)=>{ 
            cy.get(searchresult.heading).should('contain','0 results have been found')

        })
    })
})