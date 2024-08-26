
import { test, expect } from "@playwright/experimental-ct-react";
import App1291 from "../example/App1291.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1291 />);
  await expect(component).toContainText("Learn React");
});
