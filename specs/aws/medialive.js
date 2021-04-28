var completionSpec = {
    name: "medialive",
    description: "API for AWS Elemental MediaLive",
    subcommands: [
        {
            name: "accept-input-device-transfer",
            description: "Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.",
            options: [
                {
                    name: "--input-device-id",
                    description: "The unique ID of the input device to accept. For example, hd-123456789abcdef.",
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
            name: "batch-delete",
            description: "Starts delete of resources.",
            options: [
                {
                    name: "--channel-ids",
                    description: "List of channel IDs",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-ids",
                    description: "List of input IDs",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-security-group-ids",
                    description: "List of input security group IDs",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--multiplex-ids",
                    description: "List of multiplex IDs",
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
            name: "batch-start",
            description: "Starts existing resources",
            options: [
                {
                    name: "--channel-ids",
                    description: "List of channel IDs",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--multiplex-ids",
                    description: "List of multiplex IDs",
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
            name: "batch-stop",
            description: "Stops running resources",
            options: [
                {
                    name: "--channel-ids",
                    description: "List of channel IDs",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--multiplex-ids",
                    description: "List of multiplex IDs",
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
            name: "batch-update-schedule",
            description: "Update a channel schedule",
            options: [
                {
                    name: "--channel-id",
                    description: "Id of the channel whose schedule is being updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--creates",
                    description: "Schedule actions to create in the schedule.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--deletes",
                    description: "Schedule actions to delete from the schedule.",
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
            name: "cancel-input-device-transfer",
            description: "Cancel an input device transfer that you have requested.",
            options: [
                {
                    name: "--input-device-id",
                    description: "The unique ID of the input device to cancel. For example, hd-123456789abcdef.",
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
            name: "create-channel",
            description: "Creates a new channel",
            options: [
                {
                    name: "--cdi-input-specification",
                    description: "Specification of CDI inputs for this channel",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--channel-class",
                    description: "The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--destinations",
                    description: "Placeholder documentation for __listOfOutputDestination",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--encoder-settings",
                    description: "Encoder Settings",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-attachments",
                    description: "List of input attachments for channel.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-specification",
                    description: "Specification of network and file inputs for this channel",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--log-level",
                    description: "The log level to write to CloudWatch Logs.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "Name of channel.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--request-id",
                    description: "Unique request ID to be specified. This is needed to prevent retries from\ncreating multiple resources.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--reserved",
                    description: "Deprecated field that's only usable by whitelisted customers.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--role-arn",
                    description: "An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A collection of key-value pairs.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--vpc",
                    description: "Settings for VPC output",
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
            name: "create-input",
            description: "Create an input",
            options: [
                {
                    name: "--destinations",
                    description: "Destination settings for PUSH type inputs.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-devices",
                    description: "Settings for the devices.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-security-groups",
                    description: "A list of security groups referenced by IDs to attach to the input.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--media-connect-flows",
                    description: "A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one\nFlow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a\nseparate Availability Zone as this ensures your EML input is redundant to AZ issues.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "Name of the input.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--request-id",
                    description: "Unique identifier of the request to ensure the request is handled\nexactly once in case of retries.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--role-arn",
                    description: "The Amazon Resource Name (ARN) of the role this input assumes during and after creation.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--sources",
                    description: "The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A collection of key-value pairs.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--type",
                    description: "Placeholder documentation for InputType",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--vpc",
                    description: "Settings for a private VPC Input.\nWhen this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.\nThis property requires setting the roleArn property on Input creation.\nNot compatible with the inputSecurityGroups property.",
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
            name: "create-input-security-group",
            description: "Creates a Input Security Group",
            options: [
                {
                    name: "--tags",
                    description: "A collection of key-value pairs.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--whitelist-rules",
                    description: "List of IPv4 CIDR addresses to whitelist",
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
            name: "create-multiplex",
            description: "Create a new multiplex.",
            options: [
                {
                    name: "--availability-zones",
                    description: "A list of availability zones for the multiplex. You must specify exactly two.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--multiplex-settings",
                    description: "Configuration for a multiplex event.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "Name of multiplex.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--request-id",
                    description: "Unique request ID. This prevents retries from creating multiple\nresources.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A collection of key-value pairs.",
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
            name: "create-multiplex-program",
            description: "Create a new program in the multiplex.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "ID of the multiplex where the program is to be created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--multiplex-program-settings",
                    description: "The settings for this multiplex program.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--program-name",
                    description: "Name of multiplex program.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--request-id",
                    description: "Unique request ID. This prevents retries from creating multiple\nresources.",
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
            name: "create-partner-input",
            description: "Create a partner input",
            options: [
                {
                    name: "--input-id",
                    description: "Unique ID of the input.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--request-id",
                    description: "Unique identifier of the request to ensure the request is handled\nexactly once in case of retries.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A collection of key-value pairs.",
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
            name: "create-tags",
            description: "Create tags for a resource",
            options: [
                {
                    name: "--resource-arn",
                    description: "Placeholder documentation for __string",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "Placeholder documentation for Tags",
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
            name: "delete-channel",
            description: "Starts deletion of channel. The associated outputs are also deleted.",
            options: [
                {
                    name: "--channel-id",
                    description: "Unique ID of the channel.",
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
            name: "delete-input",
            description: "Deletes the input end point",
            options: [
                {
                    name: "--input-id",
                    description: "Unique ID of the input",
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
            name: "delete-input-security-group",
            description: "Deletes an Input Security Group",
            options: [
                {
                    name: "--input-security-group-id",
                    description: "The Input Security Group to delete",
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
            name: "delete-multiplex",
            description: "Delete a multiplex. The multiplex must be idle.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex.",
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
            name: "delete-multiplex-program",
            description: "Delete a program from a multiplex.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex that the program belongs to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--program-name",
                    description: "The multiplex program name.",
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
            name: "delete-reservation",
            description: "Delete an expired reservation.",
            options: [
                {
                    name: "--reservation-id",
                    description: "Unique reservation ID, e.g. '1234567'",
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
            name: "delete-schedule",
            description: "Delete all schedule actions on a channel.",
            options: [
                {
                    name: "--channel-id",
                    description: "Id of the channel whose schedule is being deleted.",
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
            name: "delete-tags",
            description: "Removes tags for a resource",
            options: [
                {
                    name: "--resource-arn",
                    description: "Placeholder documentation for __string",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "An array of tag keys to delete",
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
            name: "describe-channel",
            description: "Gets details about a channel",
            options: [
                {
                    name: "--channel-id",
                    description: "channel ID",
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
            name: "describe-input",
            description: "Produces details about an input",
            options: [
                {
                    name: "--input-id",
                    description: "Unique ID of the input",
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
            name: "describe-input-device",
            description: "Gets the details for the input device",
            options: [
                {
                    name: "--input-device-id",
                    description: "The unique ID of this input device. For example, hd-123456789abcdef.",
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
            name: "describe-input-device-thumbnail",
            description: "Get the latest thumbnail data for the input device.",
            options: [
                {
                    name: "--input-device-id",
                    description: "The unique ID of this input device. For example, hd-123456789abcdef.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--accept",
                    description: "The HTTP Accept header. Indicates the requested type for the thumbnail.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "outfile",
                    description: "Filename where the content will be saved",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
            ],
        },
        {
            name: "describe-input-security-group",
            description: "Produces a summary of an Input Security Group",
            options: [
                {
                    name: "--input-security-group-id",
                    description: "The id of the Input Security Group to describe",
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
            name: "describe-multiplex",
            description: "Gets details about a multiplex.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex.",
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
            name: "describe-multiplex-program",
            description: "Get the details for a program in a multiplex.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex that the program belongs to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--program-name",
                    description: "The name of the program.",
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
            name: "describe-offering",
            description: "Get details for an offering.",
            options: [
                {
                    name: "--offering-id",
                    description: "Unique offering ID, e.g. '87654321'",
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
            name: "describe-reservation",
            description: "Get details for a reservation.",
            options: [
                {
                    name: "--reservation-id",
                    description: "Unique reservation ID, e.g. '1234567'",
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
            name: "describe-schedule",
            description: "Get a channel schedule",
            options: [
                {
                    name: "--channel-id",
                    description: "Id of the channel whose schedule is being updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
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
            name: "list-channels",
            description: "Produces list of channels that have been created",
            options: [
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
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
            name: "list-input-device-transfers",
            description: "List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.",
            options: [
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--transfer-type",
                    description: "Placeholder documentation for __string",
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
            name: "list-input-devices",
            description: "List input devices",
            options: [
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
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
            name: "list-input-security-groups",
            description: "Produces a list of Input Security Groups for an account",
            options: [
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
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
            name: "list-inputs",
            description: "Produces list of inputs that have been created",
            options: [
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
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
            name: "list-multiplex-programs",
            description: "List the programs that currently exist for a specific multiplex.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum number of items to return.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex that the programs belong to.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "The token to retrieve the next page of results.",
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
            name: "list-multiplexes",
            description: "Retrieve a list of the existing multiplexes.",
            options: [
                {
                    name: "--max-results",
                    description: "The maximum number of items to return.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to retrieve the next page of results.",
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
            name: "list-offerings",
            description: "List offerings available for purchase.",
            options: [
                {
                    name: "--channel-class",
                    description: "Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--channel-configuration",
                    description: "Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--codec",
                    description: "Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--duration",
                    description: "Filter by offering duration, e.g. '12'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--maximum-bitrate",
                    description: "Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--maximum-framerate",
                    description: "Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resolution",
                    description: "Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resource-type",
                    description: "Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--special-feature",
                    description: "Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--video-quality",
                    description: "Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'",
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
            name: "list-reservations",
            description: "List purchased reservations.",
            options: [
                {
                    name: "--channel-class",
                    description: "Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--codec",
                    description: "Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Placeholder documentation for MaxResults",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--maximum-bitrate",
                    description: "Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--maximum-framerate",
                    description: "Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Placeholder documentation for __string",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resolution",
                    description: "Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--resource-type",
                    description: "Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--special-feature",
                    description: "Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--video-quality",
                    description: "Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'",
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
            description: "Produces list of tags that have been created for a resource",
            options: [
                {
                    name: "--resource-arn",
                    description: "Placeholder documentation for __string",
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
            name: "purchase-offering",
            description: "Purchase an offering and create a reservation.",
            options: [
                {
                    name: "--count",
                    description: "Number of resources",
                    args: {
                        name: "integer",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "Name for the new reservation",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--offering-id",
                    description: "Offering to purchase, e.g. '87654321'",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--request-id",
                    description: "Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--start",
                    description: "Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "A collection of key-value pairs",
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
            name: "reject-input-device-transfer",
            description: "Reject the transfer of the specified input device to your AWS account.",
            options: [
                {
                    name: "--input-device-id",
                    description: "The unique ID of the input device to reject. For example, hd-123456789abcdef.",
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
            name: "start-channel",
            description: "Starts an existing channel",
            options: [
                {
                    name: "--channel-id",
                    description: "A request to start a channel",
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
            name: "start-multiplex",
            description: "Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex.",
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
            name: "stop-channel",
            description: "Stops a running channel",
            options: [
                {
                    name: "--channel-id",
                    description: "A request to stop a running channel",
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
            name: "stop-multiplex",
            description: "Stops a running multiplex. If the multiplex isn't running, this action has no effect.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex.",
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
            name: "transfer-input-device",
            description: "Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.",
            options: [
                {
                    name: "--input-device-id",
                    description: "The unique ID of this input device. For example, hd-123456789abcdef.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--target-customer-id",
                    description: "The AWS account ID (12 digits) for the recipient of the device transfer.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--target-region",
                    description: "The target AWS region to transfer the device.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--transfer-message",
                    description: "An optional message for the recipient. Maximum 280 characters.",
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
            name: "update-channel",
            description: "Updates a channel.",
            options: [
                {
                    name: "--cdi-input-specification",
                    description: "Specification of CDI inputs for this channel",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--channel-id",
                    description: "channel ID",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--destinations",
                    description: "A list of output destinations for this channel.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--encoder-settings",
                    description: "The encoder settings for this channel.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-attachments",
                    description: "Placeholder documentation for __listOfInputAttachment",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-specification",
                    description: "Specification of network and file inputs for this channel",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--log-level",
                    description: "The log level to write to CloudWatch Logs.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "The name of the channel.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--role-arn",
                    description: "An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.",
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
            name: "update-channel-class",
            description: "Changes the class of the channel.",
            options: [
                {
                    name: "--channel-class",
                    description: "The channel class that you wish to update this channel to use.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--channel-id",
                    description: "Channel Id of the channel whose class should be updated.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--destinations",
                    description: "A list of output destinations for this channel.",
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
            name: "update-input",
            description: "Updates an input.",
            options: [
                {
                    name: "--destinations",
                    description: "Destination settings for PUSH type inputs.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-devices",
                    description: "Settings for the devices.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-id",
                    description: "Unique ID of the input.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--input-security-groups",
                    description: "A list of security groups referenced by IDs to attach to the input.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--media-connect-flows",
                    description: "A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one\nFlow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a\nseparate Availability Zone as this ensures your EML input is redundant to AZ issues.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "Name of the input.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--role-arn",
                    description: "The Amazon Resource Name (ARN) of the role this input assumes during and after creation.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--sources",
                    description: "The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.",
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
            name: "update-input-device",
            description: "Updates the parameters for the input device.",
            options: [
                {
                    name: "--hd-device-settings",
                    description: "The settings that you want to apply to the HD input device.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--input-device-id",
                    description: "The unique ID of the input device. For example, hd-123456789abcdef.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--name",
                    description: "The name that you assigned to this input device (not the unique ID).",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--uhd-device-settings",
                    description: "The settings that you want to apply to the UHD input device.",
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
            name: "update-input-security-group",
            description: "Update an Input Security Group's Whilelists.",
            options: [
                {
                    name: "--input-security-group-id",
                    description: "The id of the Input Security Group to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "A collection of key-value pairs.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--whitelist-rules",
                    description: "List of IPv4 CIDR addresses to whitelist",
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
            name: "update-multiplex",
            description: "Updates a multiplex.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "ID of the multiplex to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--multiplex-settings",
                    description: "The new settings for a multiplex.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--name",
                    description: "Name of the multiplex.",
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
            name: "update-multiplex-program",
            description: "Update a program in a multiplex.",
            options: [
                {
                    name: "--multiplex-id",
                    description: "The ID of the multiplex of the program to update.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--multiplex-program-settings",
                    description: "The new settings for a multiplex program.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--program-name",
                    description: "The name of the program to update.",
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
            name: "update-reservation",
            description: "Update reservation.",
            options: [
                {
                    name: "--name",
                    description: "Name of the reservation",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--reservation-id",
                    description: "Unique reservation ID, e.g. '1234567'",
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
            name: "wait",
            description: "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
            subcommands: [
                {
                    name: "channel-created",
                    description: "Wait until a channel has been created It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks.",
                    options: [
                        {
                            name: "--channel-id",
                            description: "channel ID",
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
                    name: "channel-deleted",
                    description: "Wait until a channel has been deleted It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 84 failed checks.",
                    options: [
                        {
                            name: "--channel-id",
                            description: "channel ID",
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
                    name: "channel-running",
                    description: "Wait until a channel is running It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks.",
                    options: [
                        {
                            name: "--channel-id",
                            description: "channel ID",
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
                    name: "channel-stopped",
                    description: "Wait until a channel has is stopped It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
                    options: [
                        {
                            name: "--channel-id",
                            description: "channel ID",
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
                    name: "input-attached",
                    description: "Wait until an input has been attached It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--input-id",
                            description: "Unique ID of the input",
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
                    name: "input-deleted",
                    description: "Wait until an input has been deleted It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--input-id",
                            description: "Unique ID of the input",
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
                    name: "input-detached",
                    description: "Wait until an input has been detached It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 84 failed checks.",
                    options: [
                        {
                            name: "--input-id",
                            description: "Unique ID of the input",
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
                    name: "multiplex-created",
                    description: "Wait until a multiplex has been created It will poll every 3 seconds until a successful state has been reached. This will exit with a return code of 255 after 5 failed checks.",
                    options: [
                        {
                            name: "--multiplex-id",
                            description: "The ID of the multiplex.",
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
                    name: "multiplex-deleted",
                    description: "Wait until a multiplex has been deleted It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 20 failed checks.",
                    options: [
                        {
                            name: "--multiplex-id",
                            description: "The ID of the multiplex.",
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
                    name: "multiplex-running",
                    description: "Wait until a multiplex is running It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 120 failed checks.",
                    options: [
                        {
                            name: "--multiplex-id",
                            description: "The ID of the multiplex.",
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
                    name: "multiplex-stopped",
                    description: "Wait until a multiplex has is stopped It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 28 failed checks.",
                    options: [
                        {
                            name: "--multiplex-id",
                            description: "The ID of the multiplex.",
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
            ],
        },
    ],
};

