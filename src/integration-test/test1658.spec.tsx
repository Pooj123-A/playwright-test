
import { test, expect } from "@playwright/experimental-ct-react";
import App1658 from "../example/App1658.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1658 />);
  await expect(component).toContainText("Learn React");
});
