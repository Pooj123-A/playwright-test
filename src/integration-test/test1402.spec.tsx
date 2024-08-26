
import { test, expect } from "@playwright/experimental-ct-react";
import App1402 from "../example/App1402.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1402 />);
  await expect(component).toContainText("Learn React");
});
