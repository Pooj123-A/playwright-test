
import { test, expect } from "@playwright/experimental-ct-react";
import App354 from "../example/App354.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App354 />);
  await expect(component).toContainText("Learn React");
});
