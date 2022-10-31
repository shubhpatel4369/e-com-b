const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "sk_test_51LfHpwSEIomzKVNgMc9CjNQ09bH9GyjkRINHgdMi1YmKS211LjQqlEPG5YUt7AVoijv87K2xpTBKpR7ztCnedS5U00Z6MNyLKC");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY || "pk_test_51LfHpwSEIomzKVNgA3HgLUyIH40msprTDsS56qvX9lGkN0t5OliTKfrXAxdRbOWTqwIZg8ZHuKu8bI9XtGG5Aa4A00tY9rDpt5" });
});
