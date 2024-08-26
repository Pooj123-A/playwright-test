
import { test, expect } from "@playwright/experimental-ct-react";
import App1692 from "../example/App1692.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1692 />);
  await expect(component).toContainText("Learn React");
});
