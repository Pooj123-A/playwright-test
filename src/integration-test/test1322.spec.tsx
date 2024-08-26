
import { test, expect } from "@playwright/experimental-ct-react";
import App1322 from "../example/App1322.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1322 />);
  await expect(component).toContainText("Learn React");
});
