install:
	npm ci

brain-games:
	node bin/brain-games.js

create-link:
	npm link

publish:
	npm publish --dry run

lint:
	npx eslint .