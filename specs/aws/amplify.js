var completionSpec = {
    name: "amplify",
    description: "Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the Amplify Console User Guide. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the Amplify Framework.",
    subcommands: [
        {
            name: "create-app",
            description: "Creates a new Amplify app.",
            options: [
                {
                    name: "--name",
                    description: "The name for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--repository",
                    description: "The repository for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform",
                    description: "The platform or framework for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--iam-service-role-arn",
                    description: "The AWS Identity and Access Management (IAM) service role for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--oauth-token",
                    description: "The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--access-token",
                    description: "The personal access token for a third-party source control system for an Amplify app. The personal access token is used to create a webhook and a read-only deploy key. The token is not stored.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--environment-variables",
                    description: "The environment variables map for an Amplify app.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-branch-auto-build",
                    description: "Enables the auto building of branches for an Amplify app.",
                },
                {
                    name: "--no-enable-branch-auto-build",
                    description: "Enables the auto building of branches for an Amplify app.",
                },
                {
                    name: "--enable-branch-auto-deletion",
                    description: "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.",
                },
                {
                    name: "--no-enable-branch-auto-deletion",
                    description: "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.",
                },
                {
                    name: "--enable-basic-auth",
                    description: "Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.",
                },
                {
                    name: "--no-enable-basic-auth",
                    description: "Enables basic authorization for an Amplify app. This will apply to all branches that are part of this app.",
                },
                {
                    name: "--basic-auth-credentials",
                    description: "The credentials for basic authorization for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--custom-rules",
                    description: "The custom rewrite and redirect rules for an Amplify app.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "The tag for an Amplify app.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--build-spec",
                    description: "The build specification (build spec) for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--custom-headers",
                    description: "The custom HTTP headers for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-auto-branch-creation",
                    description: "Enables automated branch creation for an Amplify app.",
                },
                {
                    name: "--no-enable-auto-branch-creation",
                    description: "Enables automated branch creation for an Amplify app.",
                },
                {
                    name: "--auto-branch-creation-patterns",
                    description: "The automated branch creation glob patterns for an Amplify app.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--auto-branch-creation-config",
                    description: "The automated branch creation configuration for an Amplify app.",
                    args: {
                        name: "structure",
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
            name: "create-backend-environment",
            description: "Creates a new backend environment for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--environment-name",
                    description: "The name for the backend environment.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--stack-name",
                    description: "The AWS CloudFormation stack name of a backend environment.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--deployment-artifacts",
                    description: "The name of deployment artifacts.",
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
        {
            name: "create-branch",
            description: "Creates a new branch for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--stage",
                    description: "Describes the current stage for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--framework",
                    description: "The framework for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-notification",
                    description: "Enables notifications for the branch.",
                },
                {
                    name: "--no-enable-notification",
                    description: "Enables notifications for the branch.",
                },
                {
                    name: "--enable-auto-build",
                    description: "Enables auto building for the branch.",
                },
                {
                    name: "--no-enable-auto-build",
                    description: "Enables auto building for the branch.",
                },
                {
                    name: "--environment-variables",
                    description: "The environment variables for the branch.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--basic-auth-credentials",
                    description: "The basic authorization credentials for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-basic-auth",
                    description: "Enables basic authorization for the branch.",
                },
                {
                    name: "--no-enable-basic-auth",
                    description: "Enables basic authorization for the branch.",
                },
                {
                    name: "--enable-performance-mode",
                    description: "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.",
                },
                {
                    name: "--no-enable-performance-mode",
                    description: "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.",
                },
                {
                    name: "--tags",
                    description: "The tag for the branch.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--build-spec",
                    description: "The build specification (build spec) for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--ttl",
                    description: "The content Time To Live (TTL) for the website in seconds.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--display-name",
                    description: "The display name for a branch. This is used as the default domain prefix.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-pull-request-preview",
                    description: "Enables pull request previews for this branch.",
                },
                {
                    name: "--no-enable-pull-request-preview",
                    description: "Enables pull request previews for this branch.",
                },
                {
                    name: "--pull-request-environment-name",
                    description: "The Amplify environment name for the pull request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--backend-environment-arn",
                    description: "The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.",
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
        {
            name: "create-deployment",
            description: "Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch, for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--file-map",
                    description: "An optional file map that contains the file name as the key and the file content md5 hash as the value. If this argument is provided, the service will generate a unique upload URL per file. Otherwise, the service will only generate a single upload URL for the zipped files.",
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
            name: "create-domain-association",
            description: "Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The domain name for the domain association.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--enable-auto-sub-domain",
                    description: "Enables the automated creation of subdomains for branches.",
                },
                {
                    name: "--no-enable-auto-sub-domain",
                    description: "Enables the automated creation of subdomains for branches.",
                },
                {
                    name: "--sub-domain-settings",
                    description: "The setting for the subdomain.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--auto-sub-domain-creation-patterns",
                    description: "Sets the branch patterns for automatic subdomain creation.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--auto-sub-domain-iam-role",
                    description: "The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.",
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
        {
            name: "create-webhook",
            description: "Creates a new webhook on an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for a branch that is part of an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description for a webhook.",
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
        {
            name: "delete-app",
            description: "Deletes an existing Amplify app specified by an app ID.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
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
            name: "delete-backend-environment",
            description: "Deletes a backend environment for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID of an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--environment-name",
                    description: "The name of a backend environment of an Amplify app.",
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
            name: "delete-branch",
            description: "Deletes a branch for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch.",
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
            name: "delete-domain-association",
            description: "Deletes a domain association for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique id for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The name of the domain.",
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
            name: "delete-job",
            description: "Deletes a job for a branch of an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch, for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The unique ID for the job.",
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
            name: "delete-webhook",
            description: "Deletes a webhook.",
            options: [
                {
                    name: "--webhook-id",
                    description: "The unique ID for a webhook.",
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
            name: "generate-access-logs",
            description: "Returns the website access logs for a specific time range using a presigned URL.",
            options: [
                {
                    name: "--start-time",
                    description: "The time at which the logs should start. The time range specified is inclusive of the start time.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--end-time",
                    description: "The time at which the logs should end. The time range specified is inclusive of the end time.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--domain-name",
                    description: "The name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
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
            name: "get-app",
            description: "Returns an existing Amplify app by appID.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
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
            name: "get-artifact-url",
            description: "Returns the artifact info that corresponds to an artifact id.",
            options: [
                {
                    name: "--artifact-id",
                    description: "The unique ID for an artifact.",
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
            name: "get-backend-environment",
            description: "Returns a backend environment for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique id for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--environment-name",
                    description: "The name for the backend environment.",
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
            name: "get-branch",
            description: "Returns a branch for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch.",
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
            name: "get-domain-association",
            description: "Returns the domain information for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique id for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The name of the domain.",
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
            name: "get-job",
            description: "Returns a job for a branch of an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The branch name for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The unique ID for the job.",
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
            name: "get-webhook",
            description: "Returns the webhook information that corresponds to a specified webhook ID.",
            options: [
                {
                    name: "--webhook-id",
                    description: "The unique ID for a webhook.",
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
            name: "list-apps",
            description: "Returns a list of the existing Amplify apps.",
            options: [
                {
                    name: "--next-token",
                    description: "A pagination token. If non-null, the pagination token is returned in a result. Pass its value in another request to retrieve more entries.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "list-artifacts",
            description: "Returns a list of artifacts for a specified app, branch, and job.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name of a branch that is part of an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The unique ID for a job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A pagination token. Set to null to start listing artifacts from start. If a non-null pagination token is returned in a result, pass its value in here to list more artifacts.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
            name: "list-backend-environments",
            description: "Lists the backend environments for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--environment-name",
                    description: "The name of the backend environment",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "A pagination token. Set to null to start listing backend environments from the start. If a non-null pagination token is returned in a result, pass its value in here to list more backend environments.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
            name: "list-branches",
            description: "Lists the branches of an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A pagination token. Set to null to start listing branches from the start. If a non-null pagination token is returned in a result, pass its value in here to list more branches.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "list-domain-associations",
            description: "Returns the domain associations for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A pagination token. Set to null to start listing apps from the start. If non-null, a pagination token is returned in a result. Pass its value in here to list more projects.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            name: "list-jobs",
            description: "Lists the jobs for a branch of an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for a branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A pagination token. Set to null to start listing steps from the start. If a non-null pagination token is returned in a result, pass its value in here to list more steps.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
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
            description: "Returns a list of tags for a specified Amazon Resource Name (ARN).",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) to use to list tags.",
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
            name: "list-webhooks",
            description: "Returns a list of webhooks for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "A pagination token. Set to null to start listing webhooks from the start. If non-null,the pagination token is returned in a result. Pass its value in here to list more webhooks.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of records to list in a single response.",
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
            name: "start-deployment",
            description: "Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch, for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The job ID for this deployment, generated by the create deployment request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--source-url",
                    description: "The source URL for this deployment, used when calling start deployment without create deployment. The source URL can be any HTTP GET URL that is publicly accessible and downloads a single .zip file.",
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
        {
            name: "start-job",
            description: "Starts a new job for a branch of an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The branch name for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The unique ID for an existing job. This is required if the value of jobType is RETRY.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--job-type",
                    description: "Describes the type for the job. The job type RELEASE starts a new job with the latest change from the specified branch. This value is available only for apps that are connected to a repository. The job type RETRY retries an existing job. If the job type value is RETRY, the jobId is also required.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-reason",
                    description: "A descriptive reason for starting this job.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--commit-id",
                    description: "The commit ID from a third-party repository provider for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--commit-message",
                    description: "The commit message from a third-party repository provider for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--commit-time",
                    description: "The commit date and time for the job.",
                    args: {
                        name: "timestamp",
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
            name: "stop-job",
            description: "Stops a job that is in progress for a branch of an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch, for the job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-id",
                    description: "The unique id for the job.",
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
            description: "Tags the resource with a tag key and value.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) to use to tag a resource.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "The tags used to tag the resource.",
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
            description: "Untags a resource with a specified Amazon Resource Name (ARN).",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) to use to untag a resource.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "The tag keys to use to untag a resource.",
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
        {
            name: "update-app",
            description: "Updates an existing Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--description",
                    description: "The description for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform",
                    description: "The platform for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--iam-service-role-arn",
                    description: "The AWS Identity and Access Management (IAM) service role for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--environment-variables",
                    description: "The environment variables for an Amplify app.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-branch-auto-build",
                    description: "Enables branch auto-building for an Amplify app.",
                },
                {
                    name: "--no-enable-branch-auto-build",
                    description: "Enables branch auto-building for an Amplify app.",
                },
                {
                    name: "--enable-branch-auto-deletion",
                    description: "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.",
                },
                {
                    name: "--no-enable-branch-auto-deletion",
                    description: "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository.",
                },
                {
                    name: "--enable-basic-auth",
                    description: "Enables basic authorization for an Amplify app.",
                },
                {
                    name: "--no-enable-basic-auth",
                    description: "Enables basic authorization for an Amplify app.",
                },
                {
                    name: "--basic-auth-credentials",
                    description: "The basic authorization credentials for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--custom-rules",
                    description: "The custom redirect and rewrite rules for an Amplify app.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--build-spec",
                    description: "The build specification (build spec) for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--custom-headers",
                    description: "The custom HTTP headers for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-auto-branch-creation",
                    description: "Enables automated branch creation for an Amplify app.",
                },
                {
                    name: "--no-enable-auto-branch-creation",
                    description: "Enables automated branch creation for an Amplify app.",
                },
                {
                    name: "--auto-branch-creation-patterns",
                    description: "Describes the automated branch creation glob patterns for an Amplify app.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--auto-branch-creation-config",
                    description: "The automated branch creation configuration for an Amplify app.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--repository",
                    description: "The name of the repository for an Amplify app",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--oauth-token",
                    description: "The OAuth token for a third-party source control system for an Amplify app. The token is used to create a webhook and a read-only deploy key. The OAuth token is not stored.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--access-token",
                    description: "The personal access token for a third-party source control system for an Amplify app. The token is used to create webhook and a read-only deploy key. The token is not stored.",
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
        {
            name: "update-branch",
            description: "Updates a branch for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--description",
                    description: "The description for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--framework",
                    description: "The framework for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--stage",
                    description: "Describes the current stage for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-notification",
                    description: "Enables notifications for the branch.",
                },
                {
                    name: "--no-enable-notification",
                    description: "Enables notifications for the branch.",
                },
                {
                    name: "--enable-auto-build",
                    description: "Enables auto building for the branch.",
                },
                {
                    name: "--no-enable-auto-build",
                    description: "Enables auto building for the branch.",
                },
                {
                    name: "--environment-variables",
                    description: "The environment variables for the branch.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--basic-auth-credentials",
                    description: "The basic authorization credentials for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-basic-auth",
                    description: "Enables basic authorization for the branch.",
                },
                {
                    name: "--no-enable-basic-auth",
                    description: "Enables basic authorization for the branch.",
                },
                {
                    name: "--enable-performance-mode",
                    description: "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.",
                },
                {
                    name: "--no-enable-performance-mode",
                    description: "Enables performance mode for the branch. Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.",
                },
                {
                    name: "--build-spec",
                    description: "The build specification (build spec) for the branch.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--ttl",
                    description: "The content Time to Live (TTL) for the website in seconds.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--display-name",
                    description: "The display name for a branch. This is used as the default domain prefix.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--enable-pull-request-preview",
                    description: "Enables pull request previews for this branch.",
                },
                {
                    name: "--no-enable-pull-request-preview",
                    description: "Enables pull request previews for this branch.",
                },
                {
                    name: "--pull-request-environment-name",
                    description: "The Amplify environment name for the pull request.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--backend-environment-arn",
                    description: "The Amazon Resource Name (ARN) for a backend environment that is part of an Amplify app.",
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
        {
            name: "update-domain-association",
            description: "Creates a new domain association for an Amplify app.",
            options: [
                {
                    name: "--app-id",
                    description: "The unique ID for an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--domain-name",
                    description: "The name of the domain.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--enable-auto-sub-domain",
                    description: "Enables the automated creation of subdomains for branches.",
                },
                {
                    name: "--no-enable-auto-sub-domain",
                    description: "Enables the automated creation of subdomains for branches.",
                },
                {
                    name: "--sub-domain-settings",
                    description: "Describes the settings for the subdomain.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--auto-sub-domain-creation-patterns",
                    description: "Sets the branch patterns for automatic subdomain creation.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--auto-sub-domain-iam-role",
                    description: "The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.",
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
        {
            name: "update-webhook",
            description: "Updates a webhook.",
            options: [
                {
                    name: "--webhook-id",
                    description: "The unique ID for a webhook.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--branch-name",
                    description: "The name for a branch that is part of an Amplify app.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--description",
                    description: "The description for a webhook.",
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

