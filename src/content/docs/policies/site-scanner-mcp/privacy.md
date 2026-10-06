---
title: Site Scanner MCP Server — Privacy Policy
description: How Evinced handles information when you use the Evinced Site Scanner MCP Server.
---

_Last updated: October 6, 2026_

## 1. Introduction and scope

This Privacy Policy explains how Evinced, Inc. ("Evinced", "we", "us") handles information when you use the Evinced Site Scanner MCP Server (the "Service").

1.1 **The Service.** The Service is a Model Context Protocol (MCP) server. It lets an AI assistant you choose read and analyse accessibility scan results from your Evinced Site Scanner account. It is read-focused; the one exception is `create_property`, which creates a new property in your account.

1.2 **Two ways to use it.**

- **Hosted:** Evinced operates the Service at `site-scanner-mcp.evinced.io`. Your AI assistant connects to it over HTTPS.
- **Local:** you install and run the Service on your own device. It then runs under your control, and Evinced receives only what your device sends to the Evinced platform.

1.3 **What this policy does not cover.** Your Evinced Site Scanner account and the data in it are governed by your agreement with Evinced and by the [Evinced Privacy Policy](https://www.evinced.com/privacy-policy). Your AI assistant (for example Claude or Gemini) is governed by its provider's terms.

## 2. Information we collect

The Service collects only what it needs to answer your AI assistant's requests and to keep a record of them.

2.1 **Access token.** Your AI assistant sends your Evinced access token with each request. The Service uses it to act on your behalf with the Evinced platform. The hosted Service holds the token only in memory and never writes it to its records, which identify it by a one-way hash. When you sign in through a web connector, the hosted Service also relays the sign-in exchange between your AI assistant and Auth0 (authorization codes and tokens) without keeping or recording it.

2.2 **Identity information.** Your token carries your email address, name and Evinced user ID, and the app you connected with. The Service reads your organization (tenant), its name and your internal user ID from the Evinced platform.

2.3 **Requests you make.** The tool your assistant calls and its inputs, such as scan IDs, property IDs, website addresses and property settings.

2.4 **Crawler login details.** If you create a property that needs a login, the username, password or cookies you supply go to the Evinced platform. The Service removes them from its request records. If the platform rejects the request, its error message is recorded and may repeat part of what you sent. When your assistant later reads the property back, the platform's response may include these details; the Service caches that response like other results and passes it to your assistant.

2.5 **Results from your account.** Scan results, issue details, page addresses, code snippets and page screenshots that the Evinced platform returns to the Service.

2.6 **Technical information (hosted Service only).** IP address, forwarding addresses, the user agent of your AI assistant, the host name, request and trace identifiers, and the time, duration and outcome of each request. Our hosting platform's gateway also logs each request's IP address, user agent and address.

2.7 **Public website content.** When you ask the Service to analyse a website, it requests that site's public pages and derives a summary. It does not keep the pages.

2.8 **What we do not collect.** The Service does not receive your conversations with your AI assistant. It sees only the tool requests the assistant sends.

## 3. How we use information

We use information only to run, secure and improve the Service.

3.1 **To provide the Service:** to sign you in, call the Evinced platform as you, and return results to your AI assistant.

3.2 **To make it faster:** to keep results in a cache, so repeat requests do not call the platform again (section 4 sets out how long).

3.3 **To keep it secure:** to record which account called which tool and when, so we can investigate misuse and meet our audit obligations.

3.4 **To operate and improve it:** to diagnose errors, measure performance and understand which tools are used.

3.5 **What we never do.** We do not sell your information, use it for advertising, or use it to train AI models.

3.6 **Legal bases.** Where the GDPR or similar laws apply, we rely on:

- **Performance of a contract**, to provide the Service you asked for (3.1, 3.2).
- **Legitimate interests**, in securing, auditing and improving the Service (3.3, 3.4).
- **Legal obligations**, where a law requires us to keep or disclose information.

## 4. Storage and retention

The hosted Service has no database. It keeps a cache in memory, writes request records to server logs on its hosting platform's disks, and sends a copy of each record to our log provider.

| Information | Where it is kept | How long |
| --- | --- | --- |
| Cached results (hosted) | Server memory, separated by sign-in token | Until the server restarts. Lists of scans and properties are refreshed after 1 hour, other results after 15 minutes; scan results are not refreshed |
| Component labels (hosted) | Server memory, shared between accounts | Until the server restarts |
| Access token (hosted) | Server memory only | Until the server restarts |
| Request records | Server logs on our hosting platform's disks | Until the server is replaced or its log rotates |
| Request records | Our log provider (see section 5) | 30 days |
| Gateway records | Our hosting platform's gateway logs | Under our hosting platform's log retention |
| Access token (local) | A file on your device, readable only by your user account on macOS and Linux | Until you sign out |
| Cached results (local) | A folder in your home directory, with your system's default file permissions | Until you clear them or delete the folder. Results cached under an earlier sign-in stay until you delete the folder |
| Public website content | Not stored | — |

Component labels are short names, such as "Main navigation", that the Service derives from a page component's own markup. They are cached by component rather than by account, so another account that scans an identical component may see the same label.

Servers are replaced whenever we release a new version, which clears their memory and their server logs.

## 5. Sharing and service providers

We do not sell or rent your information. We share it only as described here.

5.1 **Service providers.** These companies process information for us under contract:

| Provider | Purpose | Information it receives |
| --- | --- | --- |
| Auth0 (Okta) | Sign-in and token refresh | Sign-in requests and tokens. You enter your password on Auth0's page, never in the Service |
| Google Cloud | Hosting, in the United States | All hosted traffic; the cache in memory and server logs on disk |
| Coralogix | Log storage and search | Request records without your email, name or profile fields. They include your sign-in ID, organization, IP address and user agent; for single sign-on accounts the sign-in ID can contain your email address |

5.2 **The Evinced platform.** The Service passes your token and requests to the Evinced Site Scanner platform, which returns your scan data.

5.3 **Your AI assistant.** Results go to the AI assistant you connect, at your direction. Its provider handles them under its own terms.

5.4 **Websites you analyse.** When you ask for a site analysis, our servers request that site's public pages. The site sees our server's address and the user agent `EvincedBot/1.0`, not your token.

5.5 **Legal and corporate.** We may disclose information when the law requires it, to protect our rights or users' safety, or as part of a merger or acquisition under terms at least as protective as this policy.

## 6. Security

We protect your information with technical and organisational measures that fit how the Service works.

- **Encryption in transit:** all connections to the hosted Service use HTTPS.
- **No stored credentials:** the hosted Service never receives your Evinced account password, writes no tokens to disk or logs, and holds tokens only in memory (section 4). Sign-in uses OAuth 2.0 with PKCE through Auth0.
- **Separation between accounts:** cached scan data is keyed to each account's own token, so one account cannot read another's. Component labels are the one shared cache (section 4).
- **Redaction:** before a request record is written, the Service removes the values of inputs named like passwords, secrets, tokens, cookies, credentials or usernames, and token-shaped text in error messages.
- **Restricted fetching:** site analysis reaches only public internet addresses, never our internal network.
- **Restricted access:** server logs are available to Evinced personnel on our internal network; records at our log provider are available only to authorised Evinced personnel.
- **Local installs:** on macOS and Linux, the token file on your device is readable only by your user account.

No system is perfectly secure. To report a security issue, email [security@evinced.com](mailto:security@evinced.com).

## 7. Your choices and rights

7.1 **Disconnect.** Remove the connector from your AI assistant at any time. The Service then receives nothing further from you.

7.2 **Sign out of a local install.** Call the `logout` tool to delete the token stored on your device. Call `authenticate` to sign in again or switch accounts.

7.3 **Clear cached data.** Call the `clear_cache` tool. Without a scan ID it removes the results cached under your current sign-in. With a scan ID it removes that scan's comparison data, and its raw results too when you set `clear_scan_results`. On the hosted Service it acts on the server that handles the call; results cached under an earlier sign-in, copies on other servers and shared component labels stay until the server restarts. On a local install, results cached under an earlier sign-in stay until you delete the cache folder.

7.4 **Your privacy rights.** Depending on where you live, you may have the right to:

- access the information we hold about you;
- correct it;
- delete it;
- restrict or object to how we use it;
- receive a copy in a portable format;
- complain to your data protection authority.

To use these rights, contact us (section 9). We answer within the time the law requires. We may keep request records for their retention period where we need them for security or legal reasons.

7.5 **Accounts provided by your organization.** If your organization provides your Evinced account, we may refer your request to it.

## 8. International transfers, children and changes

8.1 **International transfers.** The hosted Service runs in the United States. Our service providers may process information in other countries. Where the law requires it, we protect these transfers with recognised safeguards, such as the EU Standard Contractual Clauses.

8.2 **Children.** The Service is a business tool and is not meant for anyone under 18, matching the [Evinced Privacy Policy](https://www.evinced.com/privacy-policy). We do not knowingly collect their information.

8.3 **Changes to this policy.** We may change this policy at any time. When we do, we will post the updated version on this page and change the date at the top.

## 9. Contact us

For questions about this policy or to use your privacy rights, contact:

- **Evinced, Inc.** — 3790 El Camino Real, Unit 551, Palo Alto, CA 94306, USA
- **Privacy:** [privacy@evinced.com](mailto:privacy@evinced.com)
- **Security issues:** [security@evinced.com](mailto:security@evinced.com)
- **Support:** [support@evinced.com](mailto:support@evinced.com)
