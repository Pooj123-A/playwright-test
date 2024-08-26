
import { test, expect } from "@playwright/experimental-ct-react";
import App1442 from "../example/App1442.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1442 />);
  await expect(component).toContainText("Learn React");
});
