// @ts-nocheck
import { ImageResponse } from "next/server";

export const size = { width: 1200, height: 600 };
export const alt = "Outreachful blog";
export const contentType = "image/png";
export const runtime = "edge";

export default function og() {
  return new ImageResponse();
  // ...
}
