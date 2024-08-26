
import { test, expect } from "@playwright/experimental-ct-react";
import App1854 from "../example/App1854.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1854 />);
  await expect(component).toContainText("Learn React");
});
