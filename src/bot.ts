import { Bot, InlineKeyboard } from "grammy";
import { config } from "./config.js";

const bot = new Bot(config.botToken);

const mainMenu = new InlineKeyboard()
  .text("💰 Wallet", "wallet")
  .text("🔎 Find Mints", "find_mints")
  .row()
  .text("🖼 My NFTs", "my_nfts")
  .text("⚙️ Settings", "settings");

bot.use(async (ctx, next) => {
  if (ctx.from?.id !== config.ownerId) {
    await ctx.reply("Access denied.");
    return;
  }

  await next();
});

bot.command("start", async (ctx) => {
  await ctx.reply(
    "🤖 NFT Mint Bot\n\nWelcome.\n\nWhat would you like to do?",
    { reply_markup: mainMenu },
  );
});

bot.callbackQuery("wallet", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Wallet functionality is coming soon.");
});

bot.callbackQuery("find_mints", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("NFT mint discovery is coming soon.");
});

bot.callbackQuery("my_nfts", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("NFT portfolio is coming soon.");
});

bot.callbackQuery("settings", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Settings are coming soon.");
});

bot.catch((error) => {
  console.error("Bot error:", error.error);
});

console.log("NFT Mint Bot is running...");
await bot.start();
