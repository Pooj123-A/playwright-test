
import { test, expect } from "@playwright/experimental-ct-react";
import App1384 from "../example/App1384.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1384 />);
  await expect(component).toContainText("Learn React");
});
