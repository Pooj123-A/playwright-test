
import { test, expect } from "@playwright/experimental-ct-react";
import App1472 from "../example/App1472.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1472 />);
  await expect(component).toContainText("Learn React");
});
