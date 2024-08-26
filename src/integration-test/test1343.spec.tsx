
import { test, expect } from "@playwright/experimental-ct-react";
import App1343 from "../example/App1343.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1343 />);
  await expect(component).toContainText("Learn React");
});
