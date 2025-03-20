# API Reference

## Overview
🔌 Documentation for portfolio project's REST API endpoints

## Authentication
🔑 JWT token in Authorization header
`Authorization: Bearer {token}`

## Endpoints

### GET /projects
```json
{
  "endpoint": "/projects",
  "method": "GET",
  "description": "Retrieve portfolio projects",
  "parameters": {
    "filter": "[all|featured] (default: all)"
  }
}
```

### GET /projects/{id}
```json
{
  "endpoint": "/projects/{id}",
  "method": "GET",
  "description": "Get detailed project metadata"
}
```

## Examples
```bash
curl https://api.portfolio.netlify.app/projects \
  -H "Authorization: Bearer {token}"
```

## Versioning
`X-API-Version: 1.0.0`

## Live Environment
🌐 https://api.portfolio.netlify.app/projects