describe("Search elements",()=>{ 
    beforeEach(()=>{
        cy.visit('/')
    })
    it("Search for elements with multiple results",()=>{ 
        cy.fixture('index').then((index)=>{ 
            cy.get(index.searchBox).type('dress')
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchresults').then((searchresult)=>{ 
            cy.get(searchresult.title).should('contain','dress')

        })
    })
    it('search for elementes with no results',()=>{ 
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchresults').then((searchresult)=>{ 
            cy.get(searchresult.heading).should('contain','0 results have been found')

        })
    })
})