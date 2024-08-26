
import { test, expect } from "@playwright/experimental-ct-react";
import App1551 from "../example/App1551.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1551 />);
  await expect(component).toContainText("Learn React");
});
