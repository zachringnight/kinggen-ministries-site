import { ImageResponse } from "next/og";

export const alt = "KingGen Ministries - Gospel-centered counseling for women in need";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(123, 163, 144, 0.32), transparent 34%), linear-gradient(135deg, #2d4a2c 0%, #3b5e3a 58%, #4a6b4a 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            display: "flex",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -80,
            top: -40,
            width: 420,
            height: 420,
            borderRadius: 9999,
            border: "28px solid rgba(255,255,255,0.07)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 38,
            width: "100%",
            padding: "54px 68px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 70,
                height: 70,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 12,
                  height: 54,
                  borderRadius: 9999,
                  background: "#f6f3ed",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 36,
                  height: 12,
                  top: 20,
                  borderRadius: 9999,
                  background: "#f6f3ed",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                  opacity: 0.84,
                }}
              >
                KingGen Ministries
              </div>
              <div
                style={{
                  fontSize: 22,
                  opacity: 0.92,
                }}
              >
                Clinical pastoral counseling ministry
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              maxWidth: 860,
            }}
          >
            <div
              style={{
                fontSize: 74,
                lineHeight: 0.98,
                fontWeight: 700,
              }}
            >
              Free Gospel-centered counseling for women in need.
            </div>
            <div
              style={{
                fontSize: 27,
                lineHeight: 1.38,
                color: "rgba(255,255,255,0.9)",
                maxWidth: 820,
              }}
            >
              Compassionate, confidential care supported through referrals, donor
              partnership, and nonprofit stewardship.
            </div>
          </div>

        </div>
      </div>
    ),
    size
  );
}
