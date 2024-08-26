
import { test, expect } from "@playwright/experimental-ct-react";
import App1674 from "../example/App1674.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1674 />);
  await expect(component).toContainText("Learn React");
});
