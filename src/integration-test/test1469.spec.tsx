
import { test, expect } from "@playwright/experimental-ct-react";
import App1469 from "../example/App1469.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1469 />);
  await expect(component).toContainText("Learn React");
});
