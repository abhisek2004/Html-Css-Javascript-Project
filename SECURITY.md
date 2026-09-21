# 🔐 Security Policy

The security of our project and its users is one of our top priorities. We appreciate the efforts of security researchers, developers, and community members who responsibly report security vulnerabilities and help us improve the safety and reliability of this project.

We encourage responsible disclosure and ask that security researchers give us a reasonable opportunity to investigate and address reported vulnerabilities before making them public.

---

## 📢 Reporting a Vulnerability

If you discover a security vulnerability, security weakness, or potential security issue in this project, please report it privately.

**Please do not publicly disclose the vulnerability through GitHub Issues, Discussions, social media, Discord, forums, or other public channels before we have had an opportunity to investigate it.**

### 📧 Security Contact

Please report security vulnerabilities via email:

**Email:** `abhisek2004@gmail.com`

For sensitive reports, please use a clear subject such as:

> **[SECURITY] Vulnerability Report – <Brief Description>**

---

## 📝 What to Include in Your Report

To help us investigate and resolve the issue quickly, please provide as much of the following information as possible:

### 1. Vulnerability Description

Provide a clear explanation of:

* What the vulnerability is
* Where it exists
* How you discovered it
* Which component, feature, endpoint, or file is affected

### 2. Steps to Reproduce

Include detailed reproduction steps, such as:

1. Navigate to the affected feature.
2. Perform the required action.
3. Provide the relevant input or request.
4. Observe the resulting behavior.

If possible, provide a minimal Proof of Concept (PoC).

### 3. Potential Impact

Explain what an attacker could potentially achieve, for example:

* Unauthorized access
* Authentication bypass
* Account compromise
* Privilege escalation
* Sensitive information disclosure
* Cross-site scripting (XSS)
* SQL/NoSQL injection
* Server-side request forgery (SSRF)
* Remote code execution (RCE)
* Denial of service (DoS)
* Data manipulation or unauthorized modification

### 4. Supporting Evidence

You may include:

* Screenshots
* Screen recordings
* Logs
* HTTP requests/responses
* Error messages
* Proof-of-concept code
* Relevant configuration details

**Please remove passwords, API keys, tokens, personal information, and other sensitive data before submitting evidence.**

### 5. Suggested Fix

If you have an idea for mitigating or fixing the vulnerability, you may include your recommendation.

A suggested fix is appreciated but **not required**.

---

## 🚨 Severity Guidelines

We generally classify security reports according to their potential impact and exploitability.

| Severity            | General Description                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🔴 **Critical**     | Vulnerabilities that could result in remote code execution, complete system compromise, authentication bypass affecting sensitive systems, or widespread exposure of sensitive data. |
| 🟠 **High**         | Vulnerabilities that could allow significant unauthorized access, privilege escalation, account takeover, or substantial data exposure.                                              |
| 🟡 **Medium**       | Vulnerabilities with meaningful security impact but requiring specific conditions, user interaction, or limited privileges to exploit.                                               |
| 🟢 **Low**          | Vulnerabilities with limited security impact or issues that are difficult to exploit or have minimal consequences.                                                                   |
| ⚪ **Informational** | Security improvements, hardening suggestions, or findings without a direct security impact.                                                                                          |

Severity may be adjusted after we evaluate the vulnerability, exploitability, affected users, and realistic impact.

---

## 🎯 Scope

Security researchers are encouraged to focus on vulnerabilities affecting:

* Application
