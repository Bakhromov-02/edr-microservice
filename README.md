# EDR (Nx + NestJS)

Backend workspace built with Nx and NestJS. Use the commands below to bootstrap your local environment, run the dev servers, and manage TypeORM migrations.

## Prerequisites
- Node.js 18+ and npm
- PostgreSQL available for the configured database connection

## Setup
1) Copy the sample environment file and adjust values as needed:
```sh
cp example.env .env
```
2) Install dependencies:
```sh
npm install
```

## Run the project
Start both agent and server in watch mode:
```sh
npm run start:dev
```

## Database migrations (`libs/database/project.json`)
Targets for migrations live under `libs/database/project.json` and use the compiled data source at `dist/libs/database/src/lib/ormconfig.js`.

- Generate a new migration:
```sh
npx nx run database:migration:generate --name=AddUsersTable
```
  Migration files are written to `libs/database/src/lib/migrations`.
- Apply migrations:
```sh
npx nx run database:migration:run
```
- Revert the last migration:
```sh
npx nx run database:migration:revert
```

## Commit Message Guidelines

This project adheres to the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This approach helps maintain a clear and consistent history of changes, making it easier to understand the evolution of the codebase and automate versioning and changelog generation.

### Commit Types

Each commit message should start with a **type** followed by a **scope** (optional) and a **description**. The structure is as follows:
```code 
<type>([optional scope]): <description>

[optional body]

[optional footer]
```


### Types of Commits

1. **feat**: A new feature
   - Use this type when introducing a new functionality to the project.
   - **Example**: 
    ```
     feat(auth): add JWT authentication
    ```
   - **Example**: 
    ```
    feat(api): add new endpoint for user profile

    This endpoint allows users to fetch their profile information, including name, email, and preferences. It handles user authentication via JWT.

    Closes #42
    ```

2. **fix**: A bug fix
   - Use this type when correcting an issue in the code.
   - **Example**:
    ```
    fix(upload): validate file types and sizes
    ```

3. **docs**: Documentation only changes
   - Use this type for changes to documentation.
   - **Example**:
    ```
    docs(README): update API usage instructions
    ```

4. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
   - Use this type for code style changes.
   - **Example**:
    ```
    style: fix indentation in the main controller
    ```

5. **refactor**: A code change that neither fixes a bug nor adds a feature
   - Use this type for code changes that improve the structure or performance but do not alter functionality.
   - **Example**:
    ```
    refactor(api): restructure routes for better clarity
    ```

6. **perf**: A code change that improves performance
   - Use this type when optimizing the application.
   - **Example**:
    ```
    perf(database): optimize query for faster response
    ```

7. **test**: Adding missing or correcting existing tests
   - Use this type when writing tests or updating existing ones.
   - **Example**:
    ```
    test(auth): add tests for JWT middleware
    ```

8. **build**: Changes that affect the build system or external dependencies
   - Use this type for changes related to the build process or dependencies.
   - **Example**:
    ```
    build(deps): update express to version 4.17
    ```

9. **ci**: Changes to our CI configuration files and scripts
   - Use this type for changes that affect continuous integration and deployment configurations.
   - **Example**:
    ```
    ci(travis): add environment variables for production
    ```

10. **chore**: Other changes that don't modify src or test files
    - Use this type for changes that are not related to features or fixes, like maintenance tasks.
    - **Example**:
    ```
    chore: update package-lock.json
    ```

11. **revert**: Reverts a previous commit
    - Use this type to revert a previous commit.
    - **Example**:
    ```
    revert: revert "feat(auth): add JWT authentication"
    ```
    - **Example**:
    ```
    fix(auth): correct login validation logic

    The previous logic was improperly validating user credentials, leading to failed logins.

    BREAKING CHANGE: The login endpoint now requires a JWT token in the header.
    ```
    - **Example**:
    ```
    feat(notifications): add email notification feature

    This feature sends an email notification to users when they receive a new message. The email includes the sender's information and a preview of the message.
    
    This implementation uses the nodemailer library for sending emails and includes error handling to catch any issues during the sending process.
    
    BREAKING CHANGE: The notification service configuration format has changed, requiring an SMTP server configuration.
    ```

### Breaking Changes

If a commit introduces breaking changes, it must include a `BREAKING CHANGE:` section in the footer. This section should provide information on how the changes may affect users and what steps they may need to take. The format is as follows:

```code
<type>(<scope>): <description>

BREAKING CHANGE: <description of change>
```

- **Example**:
```markdown
feat(auth): add JWT authentication

BREAKING CHANGE: The login endpoint now requires a JWT token in the header.
```

## Why Use Conventional Commits?

- **Clarity**: Provides a clear and concise history of changes.
- **Automation**: Facilitates automated versioning and changelog generation.
- **Collaboration**: Improves collaboration by establishing a common language for commit messages.
- **Organization**: Helps to categorize commits, making it easier to understand the purpose of changes.
