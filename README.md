# Blogster

## Description

Blogster is a full stack application that allows users to create, edit, and
delete blog posts. The application uses Google OAuth for authentication.

## Caching

The application uses Redis to cache data. The cache is used to store the results of database queries. When a user requests a resource, the application first checks the cache. If the resource is in the cache, the application returns the resource from the cache. If the resource is not in the cache, the application queries the database and stores the result in the cache.

### About the starter code

#### AdvancedNodeStarter

Starting project for a course on Advanced Node
