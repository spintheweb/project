
# Governance – Spin the Web

Spin the Web is a personally-driven open source project managed transparently and openly. At present, the project is not funded in any way—it exists and grows thanks entirely to the passion, dedication, and voluntary contributions of its community. As the community grows, one of our objectives is to secure sponsorship or funding to help finance and sustain these efforts, ensuring continued progress and support for all contributors.

## Mission
To promote digital transformation, open standards, and social impact through open collaboration and transparent funding.

- Major decisions are made by community consensus and core contributors

## Design Principles

### Integration Principle

Spin the Web promotes a composition-first architecture: applications expose REST backends and are presented in portals via WBOL-defined webbaselets, enabling a consistent and accessible user experience across systems. This principle is inclusive of both open and paid software. Participation does not require relinquishing licensing models; REST interactions can be monitored and reported using transparent, privacy-respecting telemetry to support usage insights, accountability, and potential sponsorship.

### AI-Assisted Development

WBOL is a formal, machine-readable description of portals. We embrace AI-assisted development to accelerate quality and delivery while preserving transparency, privacy, and accessibility. Tools and agents may use WBOL and standardized REST backends to scaffold webbaselets, validate configurations, propose UX variants, generate tests/docs, and help refactor safely. Both open and paid software are welcome; REST interactions can be monitored via transparent, privacy-respecting telemetry.

- Human-in-the-loop: all AI-assisted changes must be reviewed by a human maintainer.
- Licensing: AI-generated code and assets must be compatible with project licenses.
- Privacy: do not share sensitive data with external tools; follow our telemetry policy.
- Traceability: PRs using AI should note it in the description when material.

## Roles
- **Core Contributors:** Trusted members with merge rights and decision authority
- **Community Contributors:** Anyone participating via issues, PRs, or discussions

- Regular public updates on project status

- All governance and decisions are open and documented

## Audience Overviews

This section provides concise, role-focused snapshots so key stakeholders can quickly grasp how Spin the Web aligns with their objectives. Use these overviews to connect strategic goals with the project's modular architecture and governance model.

### For the CTO

Think of Spin the Web as the Kubernetes control plane for your front-end stack. Each webbaselet is a containerized microservice with its own interface, dependencies, and configuration. You declare conventions and policies in the Book—just like Helm charts and CRDs—and the Deno runtime acts as your API server and scheduler, instantiating modules on demand, enforcing role- and context-based rules, and ensuring zero-downtime updates.

Immediate wins:
- Continuous delivery of UI components with built-in version control
- Fine-grained access controls and feature flags tied to user roles
- Rapid onboarding of reusable, standards-compliant modules

### For the CEO

Spin the Web is the enterprise operating system for your digital strategy. The Book serves as your corporate playbook—defining vision, standards, and governance—while the runtime container is the execution engine that deploys, updates, and scales each portal component in real time. Departments plug into pre-approved modules, accelerating time-to-market, reducing technical debt, and maintaining brand consistency across every customer-facing interface.

Strategic benefits:
- Aligns digital initiatives with centralized governance
- Cuts development costs through module reuse
- Speeds market response via declarative, policy-driven deployment
- Drives sustainable growth with sponsor-backed funding

## Amendments
This document may be updated by consensus of core contributors and the community.