class ReputationContract {

    async submitFeedback(ctx, sellerId, buyerId, rating, feedbackToken) {

        const existingSeller = await ctx.stub.getState(sellerId);

        if (!existingSeller || existingSeller.length === 0) {
            throw new Error(`Seller ${sellerId} does not exist`);
        }

        const sellerData = JSON.parse(existingSeller.toString());

        if (!feedbackToken || feedbackToken.length < 5) {
            throw new Error(`Invalid feedback token`);
        }

        const feedbackRecord = {
            sellerId,
            buyerId,
            rating,
            feedbackToken,
            timestamp: new Date().toISOString()
        };

        if (!sellerData.feedbackHistory) {
            sellerData.feedbackHistory = [];
        }

        sellerData.feedbackHistory.push(feedbackRecord);

        const totalRatings = sellerData.feedbackHistory.reduce(
            (sum, item) => sum + parseInt(item.rating),
            0
        );

        sellerData.reputationScore =
            totalRatings / sellerData.feedbackHistory.length;

        await ctx.stub.putState(
            sellerId,
            Buffer.from(JSON.stringify(sellerData))
        );

        return JSON.stringify({
            message: "Feedback submitted successfully",
            reputationScore: sellerData.reputationScore
        });
    }
}

module.exports = ReputationContract;
