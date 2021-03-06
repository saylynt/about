# Product

The Product team strives to make the following true:

- The team is working on the most important things (listed in the [project roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit)) to execute on [our strategy](../../company/strategy.md).
- Each teammate has the customer and product context needed (about customer problems, likely future priorities, possible solutions, etc.) to perform their work effectively.
- The product vision and roadmap are communicated well to teammates and everyone outside Sourcegraph.

## [Sourcegraph workflow](../../workflow/index.md)

The [Sourcegraph workflow](../../workflow/index.md) describes how our product fits into the developer workflow.

## [Roles](roles.md)

See job descriptions and responsibilities of roles on the Product team:

- [Product Manager](roles.md#product-manager)

## [Personas](personas.md)

See "[Personas](personas.md)".

## Delivery plans

Every customer-facing piece of work at Sourcegraph has a **delivery plan**, which describes how we deliver the work to customers. Delivery plans have 3 purposes:

- They let us ship things to customers more quickly without blocking on any other team member or to relay context. Usually, this means developers notify customers directly and can get immediate feedback on their work.
- They are an easily verifiable check during planning that all work ties directly to a customer need that is understood by the developers working on the feature.
- They give developers more direct contact with customers (which is motivating and educational).

Delivery plans live in the [sourcegraph/customer issue tracker](https://github.com/sourcegraph/customer/issues), which is visible only to Sourcegraph team members.

### Format

There is no strict format for delivery plans. (This may change as we use them more.)

We anticipate most delivery plans will:

- Have a series of steps that the developer can follow on their own without blocking on any other team member (e.g., sales or distribution). Usually this will be an email or Slack message to send to 1 or 2 specific customers with docs links, screenshots, and/or example links.
- Have hypotheses to help us learn more quickly. There are 2 kinds of hypotheses. These help us learn quickly if we've misjudged the importance or ease of a feature.
  - Example hypothesis 1: Testing whether a feature is actually important to a customer. The hypothesis is of the form `Within X days, Alice ____` (e.g., "Within 3 days, Alice replies to the email and uses the feature").
  - Example hypothesis 2: Testing whether a feature works as expected. The hypothesis is of the form `Alice is able to ____` (e.g., "Alice is able to perform an interactive-mode search").
- Be written together by team members on Product/Sales/Engineering/Marketing (depending on the feature).
  - It is not the developer's responsibility in general to know what the delivery plan should be or to write it themselves. That information is crucial context that usually comes from Product or Sales.

### Process

1. The delivery plan for each feature is created during planning (along with the tracking issue and prioritization discussions).
1. When a developer's work is ready, they *immediately* start following the delivery plan.
  - They do not check in with sales/product/marketing (e.g., "hey, feature XYZ is ready, can you ping the customer?" or "can you check the delivery plan to make sure it's still up to date before I send this email?") before doing so. This enforces that the delivery plan is written comprehensively beforehand and is kept up to date by sales/product/marketing if customer circumstances change. We are an all-remote company and need to avoid synchronous processes.
1. When steps in the delivery plan are executed (such as emailing a customer), comment on the delivery plan issue.
1. When the hypotheses have results, comment on the issue.
1. When the delivery plan is finished and all hypotheses have results, close the issue.

See [RFC 97: Delivery plans for getting customer feedback/usage sooner](https://docs.google.com/document/d/1cZ7JIVuRWrF2MxwDdH36SC7zOyT2qJf9AMUd9Wc9_aY/edit#) (where this idea was originally proposed) for more background.

### Example delivery plan (for the code statistics feature)

When this feature is deployed to Sourcegraph.com, enable it in global settings. Then email alice@example.com and cc bob@sourcegraph.com with subject `Code statistics on Acme Corp's Sourcegraph instance` and the following body.

> Hi Alice,
>
> I'm Carol, an engineer on the Sourcegraph team. Bob (cc'd) mentioned you are interested in seeing language statistics computed across multiple repositories and for specific queries. We just shipped this feature, and it will be available on Acme Corp's Sourcegraph instance next time you upgrade.
>
> Docs at https://docs.sourcegraph.com/user/search#statistics. Try it on Acme Corp's public code at https://sourcegraph.com/stats?q=repo%3A%2Facme-corp%2F%28foo%7Cbar%29.
>
> [Attach screenshot of the Sourcegraph.com page pie chart]
>
> Would you like us to ask David to upgrade Acme Corp's Sourcegraph instance sooner so you can start using this?
>
> Thanks,
> Bob

We expect a reply in 3 days (or else we'll follow up nicely once). We expect Alice to ask David to upgrade sooner so they can try this out, and we expect Alice to use this within 2 days of it being available on their instance.

## Product planning is continuous

See "[Planning](planning.md)".

## Release early, release often

Each project, no matter how long-running, needs to plan to ship _something_ in each release. The "something" depends on the project. We strongly prefer for it to be a minimal viable feature that is enabled by default. The next best thing is to ship something that is feature-flagged off by default. When possible, larger features should be merged mid-cycle to solicit feedback from the team and customers before the release is cut.

The reason for this is to avoid going for too long without customer feedback (from customers trying it) or even technical/product feedback (from performing the diligent work of polishing it to be ready to release). Lacking these critical checks means we will end up building something that doesn't solve people's problems or that is over-built.

When we have relaxed this in the past, the results have been bad and the overwhelming feedback from retrospectives has been to release regularly.

## Saying "no"

We receive tons of feature requests and bug reports, more than we can handle. This means we must frequently say "no" or prioritize things less urgently than some people would like. Our job is to find the most important things to work on.
