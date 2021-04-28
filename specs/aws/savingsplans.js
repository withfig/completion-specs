var completionSpec = {
    name: "savingsplans",
    description: "Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the AWS Savings Plans User Guide.",
    subcommands: [
        {
            name: "create-savings-plan",
            description: "Creates a Savings Plan.",
            options: [
                {
                    name: "--savings-plan-offering-id",
                    description: "The ID of the offering.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--commitment",
                    description: "The hourly commitment, in USD. This is a value between 0.001 and 1 million. You cannot specify more than three digits after the decimal point.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--upfront-payment-amount",
                    description: "The up-front payment amount. This is a whole number between 50 and 99 percent of the total value of the Savings Plan. This parameter is supported only if the payment option is Partial Upfront.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--purchase-time",
                    description: "The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--client-token",
                    description: "Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "One or more tags.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "delete-queued-savings-plan",
            description: "Deletes the queued purchase for the specified Savings Plan.",
            options: [
                {
                    name: "--savings-plan-id",
                    description: "The ID of the Savings Plan.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-savings-plan-rates",
            description: "Describes the specified Savings Plans rates.",
            options: [
                {
                    name: "--savings-plan-id",
                    description: "The ID of the Savings Plan.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-savings-plans",
            description: "Describes the specified Savings Plans.",
            options: [
                {
                    name: "--savings-plan-arns",
                    description: "The Amazon Resource Names (ARN) of the Savings Plans.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--savings-plan-ids",
                    description: "The IDs of the Savings Plans.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--states",
                    description: "The states.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-savings-plans-offering-rates",
            description: "Describes the specified Savings Plans offering rates.",
            options: [
                {
                    name: "--savings-plan-offering-ids",
                    description: "The IDs of the offerings.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--savings-plan-payment-options",
                    description: "The payment options.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--savings-plan-types",
                    description: "The plan types.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--products",
                    description: "The AWS products.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--service-codes",
                    description: "The services.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--usage-types",
                    description: "The usage details of the line item in the billing report.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--operations",
                    description: "The specific AWS operation for the line item in the billing report.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-savings-plans-offerings",
            description: "Describes the specified Savings Plans offerings.",
            options: [
                {
                    name: "--offering-ids",
                    description: "The IDs of the offerings.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--payment-options",
                    description: "The payment options.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--product-type",
                    description: "The product type.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--plan-types",
                    description: "The plan type.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--durations",
                    description: "The durations, in seconds.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--currencies",
                    description: "The currencies.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--descriptions",
                    description: "The descriptions.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--service-codes",
                    description: "The services.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--usage-types",
                    description: "The usage details of the line item in the billing report.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--operations",
                    description: "The specific AWS operation for the line item in the billing report.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "The filters.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "Lists the tags for the specified resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Adds the specified tags to the specified resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: 'One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
                    args: {
                        name: "map",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Removes the specified tags from the specified resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "The tag keys.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
    ],
};

