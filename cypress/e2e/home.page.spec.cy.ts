/// <reference types="Cypress" />

const page = {
	mockLoadUsers: (response = { fixture: 'users' }) => {
		return cy.intercept('**/users', response);
	},
	mockLoadPerson: (id: string, response = { fixture: 'person' }) => {
		return cy.intercept(`**/users/${id}`, response);
	},
  initialVisit: (url) => {
    cy.visit(url);
    page.getByDataCy('app').should('exist');
  },
  getByDataCy: name => cy.get(`[data-cy="${name}"]`),
	assertHash: hash => cy.location('hash').should('eq', hash),
	users: () => page.getByDataCy('user'),
	assertSearch: search => cy.location('search').should('eq', search),
	assertUrl: (command, value) => cy.url().should(command, value),

	mockPersonError: (id = '1') => {
    const errorResponse = {
			statusCode: 404,
    };

    return cy.intercept(`**/#/users/${id}`, errorResponse);
  },
}

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('`Home Page`', () => {

  describe('initial loading', () => {
    it('should have correct address', () => {
      page.mockLoadUsers();
      page.initialVisit('/');
      page.assertHash('');
    });

    it('should work with empty array', () => {
      page.mockLoadUsers([]);
      page.initialVisit('/');
			page.getByDataCy('list-no-users').should('exist');
    });
	})

	describe('users list', () => {
		beforeEach(() => {
      page.mockLoadUsers();
      page.initialVisit('/');
		});

		it('should render all users', () => {
			page.users().should('have.length', 10);
		});

		it('should render all required person data', () => {
			page.users().eq(0).find('td').eq(0).should('have.text', 'Leanne Graham Elder');
			page.users().eq(0).find('td').eq(1).should('have.text', 'Sincere@april.biz');
			page.users().eq(0).find('td').eq(2).should('have.text', 'Romaguera-Crona');
			page.users().eq(0).find('td').eq(3).should('have.text', 'Gwenborough');
		});
	})

	describe('load without sort params', () => {
		beforeEach(() => {
      page.mockLoadUsers();
      page.initialVisit('/');
		});

		it('should do not have query params', () => {
			page.assertSearch('')
		});

		it('should set query params', () => {
			page.assertSearch('')

			page.getByDataCy('sort-by-name').click();

			page.assertUrl('include', '?sort=name');
		});

		it('should set query properly', () => {
			page.assertSearch('')

			page.getByDataCy('sort-by-name').click();
			page.getByDataCy('sort-by-name').click();
			
			page.assertUrl('include', '?sort=name&order=desc');

			page.getByDataCy('sort-by-name').click();

			page.assertSearch('')
		});

		it('should set different query', () => {
			page.assertSearch('')

			page.getByDataCy('sort-by-name').click();
			
			page.assertUrl('include', '?sort=name');

			page.getByDataCy('sort-by-city').click();

			page.assertUrl('include', '?sort=city');
		});

		it('should effect on list', () => {
			page.assertSearch('')

			page.getByDataCy('sort-by-name').click();

			page.users().eq(0).find('td').eq(0).should('have.text', 'Chelsey Dietrich');

		});

		it('should filter list', () => {
			page.assertSearch('')

			page.getByDataCy('list-input').type('cl');

			page.users().eq(0).find('td').eq(0).should('have.text', 'Clementine Bauch');
			page.users().eq(1).find('td').eq(3).should('have.text', 'Lebsackbury');

		});
	})
})

describe('`User Page`', () => {
	describe('`initial loading`', () => {
		it('should load user', () => {
      page.mockLoadPerson('7');
      page.initialVisit(`#/user/7`);
			page.getByDataCy('user-page').should('exist');
    });

		it('should work with {}', () => {
      page.mockLoadPerson('10', {});
      page.initialVisit(`#/user/10`);
			
			page.getByDataCy('user-page-no-data').should('exist');
			page.getByDataCy('user-card').should('not.exist');
    });

		it('should load right users', () => {
			page.mockLoadUsers();
			cy.visit('/')
      page.mockLoadPerson('10');
			page.users().eq(9).find('td').eq(0).should('have.text', 'Clementina DuBuque');
			page.users().eq(9).click();

			page.getByDataCy('user-card-name').should('have.text', 'Moriah.Stanton');
    });

		it('should return to `Home Page`', () => {
			page.mockLoadUsers();
			cy.visit('/')
      page.mockLoadPerson('7');
			page.users().eq(5).find('td').eq(0).should('have.text', 'Mrs. Dennis Schulist');
			page.users().eq(5).click();

			page.getByDataCy('user-card-name').should('have.text', 'Leopoldo_Corkery');
      
			page.getByDataCy('user-go-back').click();
			page.assertUrl('include', 'http://localhost:3000/');
    });

		// it('should show loader', () => { //works only once because of useSWR cache
		// 	page.mockLoadPerson('1');

		// 	cy.visit('/#/user/1', {failOnStatusCode: false})
      
		// 	page.getByDataCy('user-card-loader').should('exist');
    // });

	});
});
