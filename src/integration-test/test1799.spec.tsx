
import { test, expect } from "@playwright/experimental-ct-react";
import App1799 from "../example/App1799.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1799 />);
  await expect(component).toContainText("Learn React");
});
