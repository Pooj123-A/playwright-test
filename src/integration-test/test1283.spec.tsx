
import { test, expect } from "@playwright/experimental-ct-react";
import App1283 from "../example/App1283.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1283 />);
  await expect(component).toContainText("Learn React");
});
