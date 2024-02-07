// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotRecommendationRequest } from "../models/models_0";
import {
  DescribeBotRecommendationResponse,
  DescribeBotRecommendationResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_DescribeBotRecommendationCommand, se_DescribeBotRecommendationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotRecommendationCommand}.
 */
export interface DescribeBotRecommendationCommandInput extends DescribeBotRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotRecommendationCommand}.
 */
export interface DescribeBotRecommendationCommandOutput extends DescribeBotRecommendationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides metadata information about a bot recommendation. This
 *          information will enable you to get a description on the request inputs,
 *          to download associated transcripts after processing is complete, and to
 *          download intents and slot-types generated by the bot
 *          recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotRecommendationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotRecommendationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotRecommendationRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   botRecommendationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotRecommendationResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationStatus: "Processing" || "Deleting" || "Deleted" || "Downloading" || "Updating" || "Available" || "Failed" || "Stopping" || "Stopped",
 * //   botRecommendationId: "STRING_VALUE",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   transcriptSourceSetting: { // TranscriptSourceSetting
 * //     s3BucketTranscriptSource: { // S3BucketTranscriptSource
 * //       s3BucketName: "STRING_VALUE", // required
 * //       pathFormat: { // PathFormat
 * //         objectPrefixes: [ // ObjectPrefixes
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       transcriptFormat: "Lex", // required
 * //       transcriptFilter: { // TranscriptFilter
 * //         lexTranscriptFilter: { // LexTranscriptFilter
 * //           dateRangeFilter: { // DateRangeFilter
 * //             startDateTime: new Date("TIMESTAMP"), // required
 * //             endDateTime: new Date("TIMESTAMP"), // required
 * //           },
 * //         },
 * //       },
 * //       kmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   encryptionSetting: { // EncryptionSetting
 * //     kmsKeyArn: "STRING_VALUE",
 * //     botLocaleExportPassword: "STRING_VALUE",
 * //     associatedTranscriptsPassword: "STRING_VALUE",
 * //   },
 * //   botRecommendationResults: { // BotRecommendationResults
 * //     botLocaleExportUrl: "STRING_VALUE",
 * //     associatedTranscriptsUrl: "STRING_VALUE",
 * //     statistics: { // BotRecommendationResultStatistics
 * //       intents: { // IntentStatistics
 * //         discoveredIntentCount: Number("int"),
 * //       },
 * //       slotTypes: { // SlotTypeStatistics
 * //         discoveredSlotTypeCount: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBotRecommendationCommandInput - {@link DescribeBotRecommendationCommandInput}
 * @returns {@link DescribeBotRecommendationCommandOutput}
 * @see {@link DescribeBotRecommendationCommandInput} for command's `input` shape.
 * @see {@link DescribeBotRecommendationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class DescribeBotRecommendationCommand extends $Command
  .classBuilder<
    DescribeBotRecommendationCommandInput,
    DescribeBotRecommendationCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "DescribeBotRecommendation", {})
  .n("LexModelsV2Client", "DescribeBotRecommendationCommand")
  .f(void 0, DescribeBotRecommendationResponseFilterSensitiveLog)
  .ser(se_DescribeBotRecommendationCommand)
  .de(de_DescribeBotRecommendationCommand)
  .build() {}
