export const detailedPromptLibraries = {
    "code-explainer": [
      {
        id: "explain-basic",
        title: "Basic Code Explanation",
        prompt: `Please explain this code in simple terms, as if you're teaching a beginner programmer:
  
  [paste your code here]
  
  Break down what each part does and why it's important. Use analogies where helpful.`,
      },
      {
        id: "explain-advanced",
        title: "Advanced Code Analysis",
        prompt: `Provide a detailed technical explanation of this code:
  
  [paste your code here]
  
  Include:
  - Algorithm complexity analysis
  - Design patterns used
  - Performance considerations
  - Best practices demonstrated`,
      },
      {
        id: "explain-function",
        title: "Function Breakdown",
        prompt: `Explain this function step by step:
  
  [paste your function here]
  
  Cover:
  - Purpose and use case
  - Parameters and return values
  - Logic flow
  - Edge cases handled`,
      },
      {
        id: "explain-class",
        title: "Class Structure Explanation",
        prompt: `Explain this class and its structure:
  
  [paste your class code here]
  
  Include:
  - Class purpose and responsibilities
  - Properties and methods
  - Inheritance relationships
  - Usage examples`,
      },
      {
        id: "explain-algorithm",
        title: "Algorithm Explanation",
        prompt: `Explain how this algorithm works:
  
  [paste your algorithm here]
  
  Cover:
  - Problem it solves
  - Step-by-step process
  - Time and space complexity
  - When to use this approach`,
      },
      {
        id: "explain-pattern",
        title: "Design Pattern Explanation",
        prompt: `Identify and explain the design patterns in this code:
  
  [paste your code here]
  
  Include:
  - Pattern names and types
  - Why these patterns were chosen
  - Benefits and trade-offs
  - Alternative approaches`,
      },
      {
        id: "explain-data-structure",
        title: "Data Structure Explanation",
        prompt: `Explain the data structures used in this code:
  
  [paste your code here]
  
  Cover:
  - Types of data structures
  - Why they were chosen
  - Operations and efficiency
  - Memory usage implications`,
      },
      {
        id: "explain-api",
        title: "API Code Explanation",
        prompt: `Explain this API code and its functionality:
  
  [paste your API code here]
  
  Include:
  - Endpoint purpose
  - Request/response flow
  - Authentication/authorization
  - Error handling approach`,
      },
      {
        id: "explain-database",
        title: "Database Code Explanation",
        prompt: `Explain this database-related code:
  
  [paste your database code here]
  
  Cover:
  - Query purpose and logic
  - Table relationships
  - Performance considerations
  - Data integrity measures`,
      },
      {
        id: "explain-frontend",
        title: "Frontend Code Explanation",
        prompt: `Explain this frontend code and its user interface logic:
  
  [paste your frontend code here]
  
  Include:
  - Component structure
  - State management
  - User interactions
  - Rendering logic`,
      },
    ],
    "bug-finder": [
      {
        id: "general-bug-scan",
        title: "General Bug Scan",
        prompt: `Review this code and identify potential bugs, performance issues, or security vulnerabilities:
  
  [paste your code here]
  
  Provide specific suggestions for fixes and explain why each issue is problematic.`,
      },
      {
        id: "memory-leak-detection",
        title: "Memory Leak Detection",
        prompt: `Analyze this code for potential memory leaks:
  
  [paste your code here]
  
  Look for:
  - Unreleased resources
  - Circular references
  - Event listener cleanup
  - Object retention issues`,
      },
      {
        id: "security-vulnerability-scan",
        title: "Security Vulnerability Scan",
        prompt: `Perform a security audit of this code:
  
  [paste your code here]
  
  Check for:
  - Input validation issues
  - SQL injection vulnerabilities
  - XSS vulnerabilities
  - Authentication/authorization flaws`,
      },
      {
        id: "performance-bottleneck-finder",
        title: "Performance Bottleneck Finder",
        prompt: `Identify performance bottlenecks in this code:
  
  [paste your code here]
  
  Focus on:
  - Inefficient algorithms
  - Unnecessary computations
  - Resource-heavy operations
  - Optimization opportunities`,
      },
      {
        id: "logic-error-detection",
        title: "Logic Error Detection",
        prompt: `Find logical errors in this code:
  
  [paste your code here]
  
  Look for:
  - Incorrect conditional logic
  - Off-by-one errors
  - Wrong assumptions
  - Edge case handling issues`,
      },
      {
        id: "concurrency-bug-finder",
        title: "Concurrency Bug Finder",
        prompt: `Analyze this code for concurrency-related bugs:
  
  [paste your code here]
  
  Check for:
  - Race conditions
  - Deadlocks
  - Thread safety issues
  - Synchronization problems`,
      },
      {
        id: "error-handling-review",
        title: "Error Handling Review",
        prompt: `Review the error handling in this code:
  
  [paste your code here]
  
  Evaluate:
  - Exception handling completeness
  - Error message quality
  - Recovery mechanisms
  - Logging appropriateness`,
      },
      {
        id: "api-bug-detection",
        title: "API Bug Detection",
        prompt: `Find bugs in this API code:
  
  [paste your API code here]
  
  Look for:
  - Incorrect status codes
  - Missing validation
  - Improper error responses
  - Security issues`,
      },
      {
        id: "database-bug-scan",
        title: "Database Bug Scan",
        prompt: `Identify issues in this database code:
  
  [paste your database code here]
  
  Check for:
  - SQL injection risks
  - Performance issues
  - Data integrity problems
  - Transaction handling errors`,
      },
      {
        id: "frontend-bug-finder",
        title: "Frontend Bug Finder",
        prompt: `Find bugs in this frontend code:
  
  [paste your frontend code here]
  
  Look for:
  - State management issues
  - Event handling problems
  - Rendering bugs
  - Accessibility issues`,
      },
    ],
    "feature-planner": [
      {
        id: "feature-requirements",
        title: "Feature Requirements Analysis",
        prompt: `Help me plan the implementation of this feature:
  
  Feature: [describe your feature]
  
  Analyze:
  - User requirements and use cases
  - Technical requirements
  - Dependencies and constraints
  - Success criteria`,
      },
      {
        id: "feature-architecture",
        title: "Feature Architecture Design",
        prompt: `Design the architecture for this feature:
  
  Feature: [describe your feature]
  
  Include:
  - System components needed
  - Data flow and interactions
  - Integration points
  - Scalability considerations`,
      },
      {
        id: "feature-breakdown",
        title: "Feature Task Breakdown",
        prompt: `Break down this feature into development tasks:
  
  Feature: [describe your feature]
  
  Provide:
  - Detailed task list
  - Task dependencies
  - Estimated effort for each task
  - Priority levels`,
      },
      {
        id: "feature-user-stories",
        title: "User Stories Creation",
        prompt: `Create user stories for this feature:
  
  Feature: [describe your feature]
  
  Generate:
  - User personas and scenarios
  - Acceptance criteria
  - Edge cases to consider
  - User journey mapping`,
      },
      {
        id: "feature-api-design",
        title: "API Design for Feature",
        prompt: `Design the API for this feature:
  
  Feature: [describe your feature]
  
  Include:
  - Endpoint specifications
  - Request/response formats
  - Authentication requirements
  - Rate limiting considerations`,
      },
      {
        id: "feature-database-design",
        title: "Database Design for Feature",
        prompt: `Design the database schema for this feature:
  
  Feature: [describe your feature]
  
  Cover:
  - Table structures and relationships
  - Indexing strategy
  - Data migration plan
  - Performance considerations`,
      },
      {
        id: "feature-testing-strategy",
        title: "Testing Strategy for Feature",
        prompt: `Create a testing strategy for this feature:
  
  Feature: [describe your feature]
  
  Include:
  - Unit test scenarios
  - Integration test cases
  - End-to-end test flows
  - Performance testing approach`,
      },
      {
        id: "feature-security-planning",
        title: "Security Planning for Feature",
        prompt: `Plan security measures for this feature:
  
  Feature: [describe your feature]
  
  Address:
  - Authentication and authorization
  - Data protection requirements
  - Input validation needs
  - Security testing approach`,
      },
      {
        id: "feature-rollout-plan",
        title: "Feature Rollout Plan",
        prompt: `Create a rollout plan for this feature:
  
  Feature: [describe your feature]
  
  Include:
  - Deployment strategy
  - Feature flags approach
  - Monitoring and metrics
  - Rollback procedures`,
      },
      {
        id: "feature-documentation-plan",
        title: "Documentation Plan for Feature",
        prompt: `Plan documentation for this feature:
  
  Feature: [describe your feature]
  
  Cover:
  - User documentation needs
  - Technical documentation
  - API documentation
  - Training materials required`,
      },
    ],
    "sql-helper": [
      {
        id: "basic-query-help",
        title: "Basic Query Helper",
        prompt: `Help me write a SQL query to accomplish this task:
  
  Task: [describe what you want to achieve]
  
  Include:
  - The complete query
  - Explanation of each part
  - Sample data examples
  - Performance considerations`,
      },
      {
        id: "complex-join-query",
        title: "Complex Join Query",
        prompt: `Help me create a complex JOIN query:
  
  Tables: [describe your tables and relationships]
  Goal: [what data you want to retrieve]
  
  Provide:
  - Optimized JOIN strategy
  - Query with proper syntax
  - Index recommendations
  - Alternative approaches`,
      },
      {
        id: "query-optimization",
        title: "Query Optimization",
        prompt: `Optimize this SQL query for better performance:
  
  Current query:
  [paste your query here]
  
  Provide:
  - Optimized version
  - Explanation of improvements
  - Index suggestions
  - Execution plan analysis`,
      },
      {
        id: "stored-procedure-help",
        title: "Stored Procedure Helper",
        prompt: `Help me create a stored procedure for:
  
  Purpose: [describe the procedure's purpose]
  Parameters: [list input parameters]
  Logic: [describe the business logic]
  
  Include:
  - Complete procedure code
  - Error handling
  - Parameter validation
  - Usage examples`,
      },
      {
        id: "data-migration-query",
        title: "Data Migration Query",
        prompt: `Help me create queries for data migration:
  
  Source: [describe source structure]
  Target: [describe target structure]
  Transformation: [describe data transformations needed]
  
  Provide:
  - Migration scripts
  - Data validation queries
  - Rollback procedures
  - Performance considerations`,
      },
      {
        id: "reporting-query",
        title: "Reporting Query Builder",
        prompt: `Create a reporting query for:
  
  Report requirements: [describe what the report should show]
  Data sources: [list tables/views involved]
  Grouping/aggregation: [describe grouping needs]
  
  Include:
  - Complete query with aggregations
  - Filtering options
  - Sorting logic
  - Performance optimization`,
      },
      {
        id: "database-schema-design",
        title: "Database Schema Design",
        prompt: `Design a database schema for:
  
  Application: [describe your application]
  Entities: [list main entities and their relationships]
  Requirements: [describe specific requirements]
  
  Provide:
  - Table creation scripts
  - Relationship definitions
  - Index recommendations
  - Constraint specifications`,
      },
      {
        id: "trigger-creation",
        title: "Database Trigger Helper",
        prompt: `Help me create a database trigger for:
  
  Purpose: [describe what the trigger should do]
  Table: [target table]
  Event: [INSERT/UPDATE/DELETE]
  Logic: [describe the trigger logic]
  
  Include:
  - Complete trigger code
  - Error handling
  - Performance considerations
  - Testing approach`,
      },
      {
        id: "view-creation",
        title: "Database View Helper",
        prompt: `Help me create a database view for:
  
  Purpose: [describe the view's purpose]
  Data sources: [list tables to include]
  Logic: [describe any calculations or filtering]
  
  Provide:
  - View creation script
  - Security considerations
  - Performance implications
  - Maintenance guidelines`,
      },
      {
        id: "query-debugging",
        title: "Query Debugging Helper",
        prompt: `Help me debug this SQL query:
  
  Query:
  [paste your problematic query]
  
  Issue: [describe the problem you're experiencing]
  
  Provide:
  - Problem identification
  - Corrected query
  - Explanation of the fix
  - Prevention tips`,
      },
    ],
    "api-documentation": [
      {
        id: "rest-api-docs",
        title: "REST API Documentation",
        prompt: `Generate comprehensive documentation for this REST API:
  
  API: [describe your API or paste code]
  
  Include:
  - Endpoint descriptions
  - Request/response examples
  - Authentication details
  - Error codes and messages`,
      },
      {
        id: "graphql-api-docs",
        title: "GraphQL API Documentation",
        prompt: `Create documentation for this GraphQL API:
  
  Schema: [paste your GraphQL schema or describe it]
  
  Include:
  - Query examples
  - Mutation examples
  - Type definitions
  - Subscription details`,
      },
      {
        id: "api-endpoint-docs",
        title: "API Endpoint Documentation",
        prompt: `Document this specific API endpoint:
  
  Endpoint: [describe the endpoint]
  Method: [GET/POST/PUT/DELETE]
  Purpose: [what it does]
  
  Include:
  - Parameter descriptions
  - Request body format
  - Response format
  - Usage examples`,
      },
      {
        id: "api-authentication-docs",
        title: "API Authentication Documentation",
        prompt: `Document the authentication system for this API:
  
  Auth method: [describe authentication method]
  Implementation: [paste relevant code or describe]
  
  Include:
  - Authentication flow
  - Token management
  - Security considerations
  - Code examples`,
      },
      {
        id: "api-error-handling-docs",
        title: "API Error Handling Documentation",
        prompt: `Document error handling for this API:
  
  API: [describe your API]
  Error scenarios: [list potential errors]
  
  Include:
  - Error code definitions
  - Error response formats
  - Troubleshooting guide
  - Best practices for clients`,
      },
      {
        id: "api-rate-limiting-docs",
        title: "API Rate Limiting Documentation",
        prompt: `Document rate limiting for this API:
  
  API: [describe your API]
  Rate limits: [describe current limits]
  
  Include:
  - Rate limit policies
  - Headers and responses
  - Handling rate limit errors
  - Best practices for clients`,
      },
      {
        id: "api-versioning-docs",
        title: "API Versioning Documentation",
        prompt: `Document API versioning strategy:
  
  API: [describe your API]
  Versioning approach: [describe how you handle versions]
  
  Include:
  - Version numbering scheme
  - Backward compatibility
  - Migration guides
  - Deprecation policies`,
      },
      {
        id: "webhook-docs",
        title: "Webhook Documentation",
        prompt: `Document webhooks for this API:
  
  Webhooks: [describe your webhook system]
  Events: [list webhook events]
  
  Include:
  - Event descriptions
  - Payload formats
  - Security considerations
  - Retry mechanisms`,
      },
      {
        id: "sdk-docs",
        title: "SDK Documentation",
        prompt: `Create documentation for this API SDK:
  
  SDK: [describe your SDK]
  Language: [programming language]
  Features: [list main features]
  
  Include:
  - Installation instructions
  - Quick start guide
  - Code examples
  - Advanced usage patterns`,
      },
      {
        id: "api-testing-docs",
        title: "API Testing Documentation",
        prompt: `Document testing procedures for this API:
  
  API: [describe your API]
  Testing tools: [list tools used]
  
  Include:
  - Test case examples
  - Automated testing setup
  - Performance testing
  - Security testing guidelines`,
      },
    ],
    "code-refactorer": [
      {
        id: "general-refactoring",
        title: "General Code Refactoring",
        prompt: `Review this code and suggest improvements for better readability, maintainability, and performance:
  
  [paste your code here]
  
  Focus on:
  - Code structure and organization
  - Naming conventions
  - Design patterns
  - Performance optimizations`,
      },
      {
        id: "function-refactoring",
        title: "Function Refactoring",
        prompt: `Refactor this function to improve its design:
  
  [paste your function here]
  
  Consider:
  - Single responsibility principle
  - Parameter optimization
  - Return value clarity
  - Error handling improvement`,
      },
      {
        id: "class-refactoring",
        title: "Class Structure Refactoring",
        prompt: `Refactor this class for better design:
  
  [paste your class code here]
  
  Improve:
  - Class responsibilities
  - Method organization
  - Property encapsulation
  - Inheritance structure`,
      },
      {
        id: "duplicate-code-removal",
        title: "Duplicate Code Removal",
        prompt: `Identify and eliminate code duplication:
  
  [paste your code with duplicated patterns]
  
  Provide:
  - Identified duplications
  - Refactored version with shared functions
  - Improved code organization
  - Maintainability benefits`,
      },
      {
        id: "performance-refactoring",
        title: "Performance-Focused Refactoring",
        prompt: `Refactor this code for better performance:
  
  [paste your code here]
  
  Optimize:
  - Algorithm efficiency
  - Memory usage
  - Resource utilization
  - Execution speed`,
      },
      {
        id: "readability-refactoring",
        title: "Readability Improvement",
        prompt: `Refactor this code for better readability:
  
  [paste your code here]
  
  Improve:
  - Variable and function naming
  - Code comments and documentation
  - Logical flow and structure
  - Complexity reduction`,
      },
      {
        id: "error-handling-refactoring",
        title: "Error Handling Refactoring",
        prompt: `Improve error handling in this code:
  
  [paste your code here]
  
  Enhance:
  - Exception handling strategy
  - Error message quality
  - Recovery mechanisms
  - Logging and debugging`,
      },
      {
        id: "design-pattern-refactoring",
        title: "Design Pattern Implementation",
        prompt: `Refactor this code to implement appropriate design patterns:
  
  [paste your code here]
  
  Consider:
  - Suitable design patterns
  - Code structure improvements
  - Flexibility and extensibility
  - Maintenance benefits`,
      },
      {
        id: "dependency-refactoring",
        title: "Dependency Management Refactoring",
        prompt: `Improve dependency management in this code:
  
  [paste your code here]
  
  Focus on:
  - Dependency injection
  - Coupling reduction
  - Interface abstractions
  - Testability improvements`,
      },
      {
        id: "legacy-code-modernization",
        title: "Legacy Code Modernization",
        prompt: `Modernize this legacy code:
  
  [paste your legacy code here]
  
  Update:
  - Modern language features
  - Current best practices
  - Framework/library usage
  - Architecture improvements`,
      },
    ],
  }

  