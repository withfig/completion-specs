var completionSpec = {
    name: "forecastquery",
    description: "Provides APIs for creating and managing Amazon Forecast resources.",
    subcommands: [
        {
            name: "query-forecast",
            description: "Retrieves a forecast for a single item, filtered by the supplied criteria. The criteria is a key-value pair. The key is either item_id (or the equivalent non-timestamp, non-target field) from the TARGET_TIME_SERIES dataset, or one of the forecast dimensions specified as part of the FeaturizationConfig object. By default, QueryForecast returns the complete date range for the filtered forecast. You can request a specific date range. To get the full forecast, use the CreateForecastExportJob operation.  The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was used to create the predictor.",
            options: [
                {
                    name: "--forecast-arn",
                    description: "The Amazon Resource Name (ARN) of the forecast to query.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--start-date",
                    description: "The start date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T08:00:00.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--end-date",
                    description: "The end date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T20:00:00.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: 'The filtering criteria to apply when retrieving the forecast. For example, to get the forecast for client_21 in the electricity usage dataset, specify the following:  {"item_id" : "client_21"}  To get the full forecast, use the CreateForecastExportJob operation.',
                    args: {
                        name: "map",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.",
                    args: {
                        name: "string",
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
    ],
};

