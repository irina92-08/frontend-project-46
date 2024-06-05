lint:
	npx eslint .

fix:
	npx eslint --fix .

publish:
	npm publish --dry-run

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

install:
	npm ci
