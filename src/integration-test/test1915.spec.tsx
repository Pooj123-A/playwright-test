
import { test, expect } from "@playwright/experimental-ct-react";
import App1915 from "../example/App1915.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1915 />);
  await expect(component).toContainText("Learn React");
});
