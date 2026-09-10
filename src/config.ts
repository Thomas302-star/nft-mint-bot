const botToken = process.env.TELEGRAM_BOT_TOKEN;
const ownerIdRaw = process.env.TELEGRAM_OWNER_ID;

if (!botToken) {
  throw new Error("Missing TELEGRAM_BOT_TOKEN environment variable.");
}

if (!ownerIdRaw) {
  throw new Error("Missing TELEGRAM_OWNER_ID environment variable.");
}

const ownerId = Number(ownerIdRaw);

if (!Number.isSafeInteger(ownerId)) {
  throw new Error("TELEGRAM_OWNER_ID must be a valid Telegram numeric user ID.");
}

export const config = {
  botToken,
  ownerId,
};
