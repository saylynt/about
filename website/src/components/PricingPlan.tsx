import * as React from 'react'

export interface PricingPlanFeature {
    name: string
    id: string
    future?: boolean
}

interface Props {
    className?: string
    name: string
    description: string
    price: string
    priceInterval?: string | React.ReactFragment
    priceCaption?: string | React.ReactFragment
    features: PricingPlanFeature[]
    plusEverythingIn?: string
    buttonLabel: string
    buttonOnClick?: () => void
    buttonHref: string
}

/**
 * A pricing plan on the pricing page.
 */
export const PricingPlan: React.FunctionComponent<Props> = ({
    className,
    name,
    description,
    price,
    priceInterval = (
        <>
            per active user
            <br />
            per month
        </>
    ),
    priceCaption,
    features,
    plusEverythingIn,
    buttonLabel,
    buttonOnClick,
    buttonHref,
}) => (
    <div className={`card border-0 pricing__card ${className}`}>
        <h2 className="card-title border-bottom py-2">{name}</h2>
        <div className="card-body py-1 pricing-plan__description text-center flex-grow-0">{description}</div>
        <div className="card-body pt-2 d-flex flex-column align-items-center flex-grow-0">
            <div className="pricing-plan__price d-flex align-items-center justify-content-center">
                <span className="pricing-plan__price-amount mr-2">{price}</span>
                <span className="pricing-plan__price-caption small">
                    {priceInterval}
                    {priceCaption && (
                        <>
                            <br />
                            {priceCaption}
                        </>
                    )}
                </span>
            </div>
            <a
                className="pricing-plan__button btn btn-primary justify-content-center text-center d-inline-flex"
                href={buttonHref}
                onClick={buttonOnClick}
            >
                {buttonLabel}
            </a>
        </div>
        <div className="list-group list-group-flush py-3">
            {features.map(({ name, id, future }, i) => (
                <a
                    key={i}
                    href={`#${id}`}
                    className={`list-group-item list-group-item-action bg-transparent border-0 py-1`}
                >
                    {name}
                </a>
            ))}
            {plusEverythingIn && (
                <div className="list-group-item border-0 text-muted font-italic pt-1">
                    Plus everything in {plusEverythingIn}
                </div>
            )}
        </div>
    </div>
)
